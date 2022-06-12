import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../store/provider";
import { useContext } from "react";
import styles from "../styles/cart.module.scss";

export default function Cart() {
  const { cart, deleteActivity } = useContext(CartContext);

  return (
    <>
      <Header />
      {cart.map(({ title, retail_price, uuid }) => (
        <span key={uuid} className={styles.cart_container}>
          <div className={styles.cart_title}>{title}</div>
          <div className={styles.cart_price}>{retail_price.formatted_value}</div>
          <button
            className={styles.cart_button}
            onClick={() => {
              deleteActivity(uuid);
            }}
          >
            Rimuovi
          </button>
        </span>
      ))}

      <Footer />
    </>
  );
}
