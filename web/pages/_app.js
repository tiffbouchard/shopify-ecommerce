import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import ShopProvider from "../context/shopContext";
import Layout from "../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
