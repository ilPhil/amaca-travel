import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { CartContext } from "../store/provider";
import { useContext } from "react";

export default function Cart() {
  const router = useRouter();
  const { cart, deleteActivity } = useContext(CartContext);

  return (
    <>
      <Header />
      {cart.map(({title,retail_price,uuid}) => (
      <span key={uuid}>
        <li>{title}</li>
        <li>{retail_price.formatted_value}</li>
        <button
          onClick={() => {
            deleteActivity(uuid);
          }}
          
          >
          Rimuovi
        </button>
      </span>

      )
          

      )}

    
      <Footer />
    </>
  );
}
