import "../styles/globals.css";
import { Provider } from "../store/provider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
