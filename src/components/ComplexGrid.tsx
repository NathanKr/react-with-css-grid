import styles from "../styles/ComplexGrid.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import Right from "./Right";

const ComplexGrid = () => {
  return (
    <div>
      <div className={styles.grid_container}>
        <div className={styles.item1}>
          <Header />
        </div>
        <div className={styles.item2}>
          <Menu />
        </div>
        <div className={styles.item3}>
          <Main />
        </div>
        <div className={styles.item4}>
          <Right />
        </div>
        <div className={styles.item5}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ComplexGrid;
