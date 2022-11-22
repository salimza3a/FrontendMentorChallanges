import styles from "./Card.module.css";
function Card({ item }) {
  console.log(item.name, "item data");
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <img src={`${item.flags.svg}`} alt={`${item.name.common}`} />
          <div className={styles.textContainer}>
            <h3> Germany</h3>
            <p>
              Population:{" "}
              <span className={styles.population}>{item.population}</span>
            </p>
            <p>
              Region: <span className={styles.region}>{item.region}</span>
            </p>
            <p>
              Capital: <span className={styles.capital}>{item.capital}</span>
              {/* item.capital[0] ? */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
