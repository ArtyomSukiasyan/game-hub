import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { io } from "socket.io-client";

import Cards from "./getDataCards";
import Form from "./stepOne";
import { isCardsSuitable } from "./gameFunc";
import Loading from "../../loading/loading";
import { losses, victories } from "../../../helpers/results_of_the_game";
import { useHttp } from "../../../hooks/useHttp";

const socket = io("http://shavarshgame.herokuapp.com");

const tableImg =
  "https://media.istockphoto.com/photos/green-poker-table-background-picture-id643199720?k=6&m=643199720&s=170667a&w=0&h=a6gzxiCk7LHz-l1oDNsXfCcUQXkuIfdw9AV4KFroYqg=";

function ReverContext() {
  const [selected, setSelectedCard] = useState(null);
  const [roome, setRoom] = useState("");
  const [tableData, setTableData] = useState([]);
  const [condition, setCondition] = useState(true);
  const [cardData, setCartData] = useState([]);
  const [primary, setPrimary] = useState(null);
  const [allCard, setAllCards] = useState([]);
  const [randomCard, setRandomCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartLength, setCartLength] = useState(6);
  const [takeRandom, setTakeRandom] = useState(false);

  const { request } = useHttp();

  const changeImput = (e) => {
    setRoom(e.target.value);
  };

  const submit = () => {
    setLoading(true);

    socket.emit("ROOM:JOIN", {
      roomId: roome,
      userName: Math.floor(Math.random() * 10),
    });

    socket.on("ROOM:SET_USERS", (data) => {
      const getData = JSON.parse(data);
      setCartData(getData.myCard);
      setPrimary(getData.primary);
      setRandomCard(getData.random[0]);

      setCondition(!data);
    });

    socket.on("SAY:SOMETHING", (data) => {
      const getData = JSON.parse(data);

      setCartLength(getData.data.cardsLength);

      if (getData.data.deleteRandom) {
        setRandomCard(false);
      }
      if (getData.data.losses) {
        losses(request);
        alert("losses");
      }
    });

    socket.on("ROOM:SET_USERS_CARDS", (data) => {
      const getData = JSON.parse(data);

      setAllCards(getData);
    });

    socket.on("RECEIVE:CARDS", (data) => {
      const data2 = JSON.parse(data);
      const newArr = data2.myCard.filter((item) => item);
      setCartData(data2.myCard.filter((item) => item));

      if (newArr.length === 0) {
        victories(request);

        socket.emit("SAY:SOMETHING", {
          roome,
          data: JSON.stringify({
            losses: true,
          }),
        });
        alert("victories");
      }

      const allCards = JSON.stringify(data2.allCards);

      setAllCards(data2.allCards);
      if (newArr.length < 6) {
        setTakeRandom(true);
      } else {
        socket.emit("NUMBER_CARDS", { roome, allCards });
      }
    });

    socket.on("NUMBER_CARDS", (data) => {
      setAllCards(JSON.parse(data));
    });
  };

  useEffect(() => {
    if (takeRandom) {
      setCartData([...cardData, randomCard]);

      setRandomCard(false);
      socket.emit("SAY:SOMETHING", {
        roome,
        data: JSON.stringify({
          deleteRandom: true,
        }),
      });
    }
  }, [takeRandom]);

  useEffect(() => {
    if (primary === true || primary === false) {
      socket.emit("TABLE:DATA", { roome, tableData: { cards: "null" } });
      socket.on("TABLE:DATA", (data) => {
        const nuwData = JSON.parse(data).data.cards;
        if (nuwData) {
          setTableData(nuwData);
        }
        if (JSON.parse(data).data.abit) {
          setPrimary(!primary);
        }
      });
    }
  }, [primary]);

  const getNewArr = (index) => {
    if (index < 6) {
      const amount = JSON.stringify({
        index: cardData.length < 6 ? 6 - cardData.length : 0,
        cardData: cardData,
      });
      const allCards = JSON.stringify({
        cardData: allCard,
      });

      socket.emit("RECEIVE:CARDS", { roome, amount, allCards });
    }
  };
  useEffect(() => {
    if (allCard.length > 6) {
      getNewArr(cardData.length);
    }
  }, [allCard]);

  useEffect(() => {
    if (tableData.length === 0 && cardData.length < 6) {
      getNewArr(cardData.length);
    }
  }, [tableData]);

  const tableClick = () => {
    if (selected && tableData.length !== 6) {
      socket.emit("TABLE:DATA", {
        roome,
        tableData: JSON.stringify({
          cards: [...tableData, { open: selected, closed: null }],
        }),
      });
      setCartData(cardData.filter((item) => item.name !== selected.name));
    }
    setSelectedCard(null);
  };
  useEffect(() => {
    socket.emit("SAY:SOMETHING", {
      roome,
      data: JSON.stringify({
        cardsLength: cardData.length,
      }),
    });
  }, [cardData]);

  const compare = (data, card) => {
    if (isCardsSuitable(data, selected, randomCard)) {
      return;
    }

    const newdb = tableData.map((item) => {
      if (data.open.name === item.open.name)
        return {
          open: item.open,
          closed: selected,
        };
      return item;
    });

    socket.emit("TABLE:DATA", {
      roome,
      tableData: JSON.stringify({ cards: [...newdb] }),
    });

    if (selected) {
      setCartData(cardData.filter((item) => item.name !== selected.name));
      setSelectedCard(null);
    }
  };

  const clickCard = (data) => {
    setSelectedCard(data);
  };

  const surrender = () => {
    let newData = [];
    tableData.forEach(
      (item) => (newData = [...newData, item.open, item.closed])
    );
    newData = newData.filter((item) => item);
    if (!primary) {
      setCartData([...cardData, ...newData]);
      getNewArr([...cardData, ...newData].length);
    } else {
      if (newData.length !== tableData.length * 2) {
        return;
      }
      // primary;/////////
      getNewArr(cardData.length);
      socket.emit("TABLE:DATA", {
        roome,
        tableData: JSON.stringify({ cards: [], abit: true }),
      });
      return;
    }
    socket.emit("TABLE:DATA", {
      roome,
      tableData: JSON.stringify({ cards: [] }),
    });
  };

  return (
    <div className={styles.gametable}>
      <div>
        <div className={styles.table}>
          {condition ? (
            loading ? (
              <Loading />
            ) : (
              <Form changeImput={changeImput} roome={roome} submit={submit} />
            )
          ) : (
            <>
              <img className={styles.imgTable} src={tableImg} />
              <Cards
                cartLength={cartLength}
                clickCard={clickCard}
                compare={compare}
                cardData={cardData}
                tableClick={tableClick}
                tableData={tableData}
                primary={primary}
                selected={selected}
                img={randomCard ? randomCard.img_id : randomCard}
              />
            </>
          )}
        </div>
        {!condition ? (
          <div className={styles.box}>
            <div onClick={surrender} className={styles.item}>
              {!primary ? "to collect" : "bita"}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ReverContext;
