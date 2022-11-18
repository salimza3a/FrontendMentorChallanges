import styles from "./Layouts.module.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
function Layouts() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Navbar />
        </header>
        <main>
          <Main />
        </main>
      </div>
    </>
  );
}

export default Layouts;
