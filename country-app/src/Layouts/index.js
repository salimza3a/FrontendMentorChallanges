import styles from "./Layouts.module.css";
import Main from "../components/Main";
import Input from "../utils/Input";
import Filter from "../utils/Filter";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const API_URL = "https://restcountries.com/v3.1/";

function Layouts() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const countries = async () => {
      try {
        const data = await fetch(API_URL + "all");
        const values = await data.json();
        setData(values);
        setLoading(true);
      } catch {
        console.log("error");
      }
    };
    countries();
  }, []);

  console.log(data, "country data");
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main>
          <section className={styles.searchAndFilterPart}>
            <Input />
            <Filter />
          </section>
          <section className={styles.mainPart}>
            <Main countriesData={data} loadingData={loading} />
          </section>
        </main>
      </div>
    </>
  );
}

export default Layouts;
