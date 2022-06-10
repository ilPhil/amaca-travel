import styles from "./style.module.scss";
import { RiShoppingCart2Line } from "react-icons/Ri";

const Header = () => {
  return (
    <div className={styles.container}>
      <title>Pixel Travel</title>
      <div className={styles.box}>
        <h1 className={styles.text}>Pixel Travel</h1>

        <h3 className={styles.shop}>
          <RiShoppingCart2Line />
        </h3>
      </div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </div>
  );
};

export default Header;
