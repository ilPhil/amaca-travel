import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";

export default function Cart() {
  const router = useRouter();

  return (
    <>
      <Header />

      <span>
        <li></li>
        <li></li>
        <button></button>
      </span>

      <Footer />
    </>
  );
}
