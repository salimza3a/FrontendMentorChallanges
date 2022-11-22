import styles from "./Main.module.css";
import Card from "../Card";
import { Dna } from "react-loader-spinner";
function Main({ countriesData, loadingData }) {
  return (
    <>
      {loadingData ? (
        <div className={styles.cardContainer}>
          {countriesData?.map((item) => {
            return (
              <div className={styles.cardItem}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.loader}>
          <Dna />
        </div>
      )}
    </>
  );
}

export default Main;
