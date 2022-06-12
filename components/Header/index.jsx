import Link from "next/link";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.box}>
      <div className={styles.amaca_travel}>
        <h1 className={styles.text}>Amaca Travel</h1>
        <Link href={"/"}>
          <img
            className={styles.amaca_logo}
            src="/amaca400x400.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className={styles.cart}>
        <Link href={"Cart"}>
          <img className={styles.cart_logo} src="/cart.png" alt="cart"/>
        </Link>
      </div>
    </div>
  );
};

export default Header;
