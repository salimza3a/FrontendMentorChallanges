import styles from "./Navbar.module.css";
import Mode from "../../utils/Mode";
function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <h2 className={styles.h2Tag}>Where in the world?</h2>
        <Mode />
      </div>
    </>
  );
}

export default Navbar;
