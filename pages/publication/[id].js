import Link from "next/link";
import {useRouter} from "next/router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";


function Publication() {
  const router = useRouter();
  const publicationId = router.query.id;
  const [publication, setPublication] = useState({});
  
  const { t, i18n } = useTranslation();

  const [initlanguage, setInitLanguage] = useState("ru")
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  useEffect(()=>{
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios.get(`http://188.166.40.167/${initlanguage}/publications/${publicationId}`).then((res) => {
      setPublication(res.data);
    })
  },[])
  useEffect(() => {
    let res = t("navbar.about")=="About us"?"en":"ru";
  setInitLanguage(res);
    axios
      .get(`http://188.166.40.167/${res}/services/${publicationId}/`)
      .then((res) => {
        setPublication(res.data);
      });
  }, [t]);

  return (
    <>

        <main className="main">
          <section className="news__hero min-height">
            <div className="container">
              <div className="news__hero-inner min-height">
                <p className="news__title">
                  {publication.title}
                </p>
                <p className="news__date">
                {t("navbar.about")=="About us"?new Date(publication.pub_date).toLocaleDateString(
                        "en-EN",
                        DATE_OPTIONS
                      ):new Date(publication.pub_date).toLocaleDateString(
                        "ru-RU",
                        DATE_OPTIONS
                      )}
                </p>
              </div>
            </div>
          </section>
          <section className="news__texts container">
            <p className="text mb55">
              {publication.text}
            </p>
            <div className="news__btns">
              <a href="#" className="news__btn">
                {t("news-related.version")}
              </a>
              <a href="#" className="news__btn_red">
                {t("news-related.download")}<span></span>
              </a>
            </div>
          </section>
        </main>
    </>
  );
}
export default Publication;
