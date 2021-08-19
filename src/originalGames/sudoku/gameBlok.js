import styles from "./style.module.css";

const CreateBlok = ({ arrMtr }) => {
  const blok = arrMtr.map((item, index) =>
    item ? (
      <div key={index} className={styles.numberBlok}>
        {item}
      </div>
    ) : (
      <div key={index} className={styles.quantity}>
        <input className={styles.number} type="number" min="1" max="9" />
      </div>
    )
  );
  return <div className={styles.bigNumberBlok}>{blok}</div>;
};
export default CreateBlok;
