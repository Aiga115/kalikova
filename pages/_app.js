import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import '../styles/components/navbar.css'
import '../styles/globals.css'
import '../styles/components/footer.css'
import './../styles/home.css'
import './../styles/about.css'
import '../styles/components/newsCard.css'
import '../styles/components/lawyerCard.css'
import './../styles/team.css'
import './../styles/profile.css'

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
