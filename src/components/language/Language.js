import LanguageIcon from "@material-ui/icons/Language";
import { IconButton } from "@material-ui/core";
import styles from './Language.module.css'


export default function Language() {
  return (
    <>
      <IconButton>
        <LanguageIcon className={styles.icon} />
      </IconButton>
    </>
  );
}
