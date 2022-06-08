import Link from "next/link";
import styles from "./style.module.scss";

export default function Activity() {
  return (
    <div>
      <div className={styles.wrapper}>
        {" "}
        Activity Page
        <Link href="/">
          <a>{"------> Home"}</a>
        </Link>
        <div>
          <h1>Activity Component Title </h1>
        </div>
        <div className={styles.wrapper__gallery}>
          <img></img>
        </div>
        <div>
          <h1>Activity Component Reviews </h1>
        </div>
        <div>
          <h1>Activity Component Info </h1>
        </div>
      </div>
    </div>
  );
}
