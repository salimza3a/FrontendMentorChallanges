import styles from "./Mode.module.css";
import { BsMoon } from "react-icons/bs";
function Mode() {
  return (
    <>
      <div className={styles.modeContainer}>
        <span className={styles.moonIcon}>
          <BsMoon />
        </span>
        <span className={styles.modeText}>Dark Mode</span>
      </div>
    </>
  );
}

export default Mode;
