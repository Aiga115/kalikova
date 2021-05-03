import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import './../styles/navbar.css'
import '../styles/globals.css'
import './../styles/footer.css'
import './../styles/home.css'
import './../styles/about.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Kalikova</title>
        </Head>
          <Navbar />
          <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
          <Footer />
      </>
  )
}

export default MyApp
