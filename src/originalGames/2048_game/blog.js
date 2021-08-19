import styles from "./style.module.css";

const Blog = ({ isBlack }) => {
  let color = styles.blokchilth2;
  switch (isBlack) {
    case 2:
      color = styles.blokchilth22;
      break;
    case 4:
      color = styles.blokchilth8;
      break;
    case 8:
      color = styles.blokchilth16;
      break;
    case 16:
      color = styles.blokchilth32;
      break;
    case 32:
      color = styles.blokchilth64;
      break;
    case 64:
      color = styles.blokchilth128;
      break;
    case 128:
      color = styles.blokchilth256;
      break;
    case 256:
      color = styles.blokchilth512;
      break;
    case 512:
      color = styles.blokchilth1024;
      break;
    case 1024:
      color = styles.blokchilth2048;
      break;
    case 2048:
      color = styles.blokchilth4096;
      break;
    case 4096:
      color = styles.blokchilth2;
      break;
    case 8192:
      color = styles.blokchilth8192;
      break;
    default:
      color = styles.blokchilth;
  }

  return (
    <div className={styles.namberBlok}>
      <div className={color}>{isBlack ? isBlack : <div></div>}</div>
    </div>
  );
};

export default Blog;
