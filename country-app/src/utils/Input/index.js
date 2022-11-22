import styles from "../Input/Input.module.css";
import { BiSearch } from "react-icons/bi";
function Input() {
  return (
    <>
      <div className={styles.input}>
        <label htmlFor="find" className={styles.searchIcon}>
          <BiSearch />
        </label>
        <input
          id="find"
          className={styles.inputValue}
          type="search"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}

export default Input;
