import styles from "./style.module.css";
const png = ".png";
const imgUrl = "https://www.dcode.fr/tools/playing-cards/images/";
const closImg =
  "https://cdn-ru.bitrix24.ru/b16851/landing/822/822886adc607e9b079415036c2b14f60/Sinie_rombiki_1x.jpg";
export const CartClosed = (img_id) => {
  return (
    <div>
      <div className={styles.ImgesBox}>
        <img className={styles.cartImg2} src={imgUrl + img_id + png} />
        <img className={styles.cartClosedImg2} src={closImg} />
      </div>
    </div>
  );
};

export const MainTableCards = (data, compare, primary, selected) => {
  return data.map((item, index) => (
    <div className={styles.ImgesBox} key={index}>
      <img
        onClick={() => {
          item.closed === null && !primary
            ? compare(item, selected)
            : (function () {})();
        }}
        className={styles.cartImg2}
        src={imgUrl + item.open.img_id + png}
      />

      {item.closed ? (
        <img
          className={styles.cartClosedImg2}
          src={imgUrl + item.closed.img_id + png}
        />
      ) : (
        <div></div>
      )}
    </div>
  ));
};
export const rival = (length = 6, left) => {
  let newData = [];
  for (let index = 0; index < length; index++) {
    const img = (
      <img
        key={index}
        className={styles.backImg}
        style={{ left: -index * left + "px" }}
        src={closImg}
      />
    );
    newData = [...newData, img];
  }
  return newData;
};

export const PleyerCards = (data, left, clickCard) => {
  return data.map((item, index, arr) => (
    <img
      key={index}
      onClick={() => {
        clickCard(item);
      }}
      className={styles.cartImg}
      style={{ left: -index * left + "px" }}
      src={imgUrl + item.img_id + png}
    />
  ));
};
