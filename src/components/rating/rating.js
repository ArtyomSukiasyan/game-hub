import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import styles from "./style.module.css";

const url = "https://shavarshgame.herokuapp.com/api/rating/";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const { request } = useHttp();

  const getData = async () => {
    const get = await request(url);

    const reting = get.data
      .filter((item, index) => index < 9)
      .map((item, index) => (
        <div className={styles.rBox} key={index}>
          <p style={{ marginTop: "12px" }}>{item.name}</p>
          <div style={{ marginTop: "20px" }}>
            {"win " + Math.round(item.rating * 100) + "%"}
          </div>
          <div>{"points " + item.rating_2048}</div>
        </div>
      ));
    setRating(reting);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {rating ? (
        <div>
          <div className={styles.flex_center}>
            <div className={styles.contener}>
              <p className={styles.gameName}>Rating</p>
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.container}>{rating}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Rating;
