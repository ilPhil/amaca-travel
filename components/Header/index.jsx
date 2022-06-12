import styles from "./style.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.text}>Amaca Travel</h1>
        <span className={styles.links}>
          <Link href={"/"}>
            <a>🏠</a>
          </Link>
          <div></div>
          <Link href={"/Cart"}>
            <a>🛒</a>
          </Link>
        </span>
      </div>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </div>
  );
};

export default Header;
