import GoogleFonts from "next-google-fonts";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ShopProvider from "../context/shopContext";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300&family=Shadows+Into+Light&display=block" />
      <ShopProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShopProvider>
    </React.Fragment>
  );
}

export default MyApp;
