// export const getStaticProps = async () => {
//   const res = await fetch(`http://188.166.40.167/ru/guide/`);
//   const data = await res.json();
//   console.log(data)
//   return {
//     props: { guide: data },
//   };
// };
import i18next from "../i18n/index";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DoingBusiness() {
  const { t, i18n } = useTranslation();

  const [initlanguage, setInitLanguage] = useState("ru");
  const [guide, setGuide] = useState([]);

  useEffect(() => {
    setGuide(localStorage.getItem("i18nextLng"));
    axios.get(`http://188.166.40.167/${initlanguage}/guide`).then((res) => {
      setGuide(res.data);
    });
  }, []);

  useEffect(() => {
    let res = t("navbar.about") == "About us" ? "en" : "ru";
    setInitLanguage(res);
    axios.get(`http://188.166.40.167/${res}/guide`).then((res) => {
      setGuide(res.data);
    });
  }, [t]);

  return (
    <>
      <main className="main">
        <section
          className="container doingbusiness__hero"
          style={{ backgroundImage: `url(${guide.image})` }}
        >
          <div className="doingbusiness__circle">
            <p className="doingbusiness__circle-text doingbusiness__circle-text_big">
              &
            </p>
            <p
              className="
                doingbusiness__circle-text doingbusiness__circle-text_width
              "
            >
              Doing Business Guide in Kyrgyzstan
            </p>
          </div>
        </section>
        <section className="doingbusiness container">
          <p className="text mb40">{guide.title}</p>
          <p className="text mb40">{guide.description}</p>
        </section>
        <section className="doingbusiness__cards container">
          {guide.guide_docs.map((item) => (
            <div key={item.id} className="doingbusiness__card">
              <div className="doingbusiness__card-inner">
                <p className="doingbusiness__card-title">
                  Doing business guide
                </p>
                <p className="doingbusiness__card-text">{item.title}</p>
              </div>
              <div className="doingbusiness__card-icon">
              <a href={`/${item.doc}`} download></a>
              </div>
            </div>
          ))}

          <div className="cards__btn mb">
            {t("index-page-related.more")}
            <span></span>
          </div>
        </section>
      </main>
    </>
  );
}
