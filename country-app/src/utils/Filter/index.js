import styles from "../Filter/Filter.module.css";
function Filter() {
  return (
    <>
      <select className={styles.selectSection}>
        <option hidden selected>
          Filter by Region
        </option>
        <option className={styles.option} value="">
          Africa
        </option>
        <option value="">America</option>
        <option value="">Europe</option>
      </select>
    </>
  );
}
export default Filter;
