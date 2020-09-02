import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ShopProvider from "../context/shopContext";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
