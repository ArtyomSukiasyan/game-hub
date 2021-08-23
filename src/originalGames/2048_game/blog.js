import styles from "./style.module.css";
const blok = {
  color2: 2,
  color4: 4,
  color8: 8,
  color16: 16,
  color32: 32,
  color64: 64,
  color128: 128,
  color256: 256,
  color512: 512,
  color1024: 1024,
  color2048: 2048,
  color4096: 4096,
  color8192: 8192,
};

const Blog = ({ isBlack }) => {
  let color = styles.blokchilth2;
  switch (isBlack) {
    case blok.color2:
      color = styles.blokchilth22;
      break;
    case blok.color4:
      color = styles.blokchilth8;
      break;
    case blok.color8:
      color = styles.blokchilth16;
      break;
    case blok.color16:
      color = styles.blokchilth32;
      break;
    case blok.color32:
      color = styles.blokchilth64;
      break;
    case blok.color64:
      color = styles.blokchilth128;
      break;
    case blok.color128:
      color = styles.blokchilth256;
      break;
    case blok.color256:
      color = styles.blokchilth512;
      break;
    case blok.color512:
      color = styles.blokchilth1024;
      break;
    case blok.color1024:
      color = styles.blokchilth2048;
      break;
    case blok.color2048:
      color = styles.blokchilth4096;
      break;
    case blok.color4096:
      color = styles.blokchilth2;
      break;
    case blok.color8192:
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
