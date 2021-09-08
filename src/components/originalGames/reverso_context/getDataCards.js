import React, { useEffect, useState } from "react";
import { boxLeft } from "./boxLeft";
import { CartClosed, MainTableCards, PleyerCards, rival } from "./getjsx";
import styles from "./style.module.css";

const Cards = ({
  cartLength,
  clickCard,
  compare,
  cardData,
  tableClick,
  tableData,
  primary,
  selected,
  img,
}) => {
  const [playerData, setPlayerData] = useState("null");
  const [tableCards, setTableCards] = useState("null");
  const [rivalData, setRivalData] = useState(null);

  useEffect(() => {
    setTableCards(MainTableCards(tableData, compare, primary, selected));
    const left = boxLeft(cardData.length);
    setPlayerData(PleyerCards(cardData, left, clickCard));
  }, [tableData, cardData, selected]);

  useEffect(() => {
    const left2 = boxLeft(cartLength);
    setRivalData(rival(cartLength, left2));
  }, [cartLength]);

  const stackCards = img ? CartClosed(img) : <div></div>;

  return (
    <div className={styles.tableCards}>
      <div className={styles.cards}>{rivalData}</div>
      <div className={styles.flex}>
        <div className={styles.stackCards}>{stackCards}</div>
        <div
          onClick={primary ? tableClick : undefined}
          className={styles.mainTable}
        >
          {tableCards}
        </div>
      </div>
      <div className={styles.cards2}>{playerData}</div>
    </div>
  );
};

export default Cards;
