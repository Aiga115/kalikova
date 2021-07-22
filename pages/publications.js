import Link from "next/link";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import i18next from "../i18n/index";
import { useTranslation } from "react-i18next";
import axios from "axios";
// export const getStaticProps = async () => {

//   const res = await fetch(`http://188.166.40.167/ru/publications/`);
//   const data = await res.json();
//   return {
//     props: { publications: data },
//   };

//   console.log("Our data: " + data);
// };

function News_() {
  const [publications, setPublications] = useState([]);

  const { t, i18n } = useTranslation();

  const [initlanguage, setInitLanguage] = useState("ru");
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  useEffect(() => {
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios
      .get(`http://188.166.40.167/${initlanguage}/publications/`)
      .then((res) => {
        setPublications(res.data);
      });
  }, []);

  useEffect(() => {
    let res = t("navbar.about") == "About us" ? "en" : "ru";
    console.log("Result is: " + res);
    setInitLanguage(res);
    console.log("init " + initlanguage);
    axios.get(`http://188.166.40.167/${res}/publications/`).then((res) => {
      setPublications(res.data);
    });
  }, [t]);

  return (
    <>
      <main className="main">
        <section className="news__hero">
          <div className="container">
            <div className="news__hero-inner">
              <div className="news__slider">
                <p className="news__title">
                  Сравнительный обзор антикоррупционного законодательства
                  в Экономическом пространстве СНГ, 2011, The CIS Leading
                  Council Network
                </p>
              </div>
              <div className="btn">Читать далее</div>
            </div>
          </div>
        </section>
        <div className="servicesAndIndustries__nav container">
          <p
            className="
              servicesAndIndustries__nav-item
              servicesAndIndustries__nav-item_active
            "
          >
            Новости
          </p>
          <p className="servicesAndIndustries__nav-item">События</p>
          <p className="servicesAndIndustries__nav-item">E-Knowledge</p>
        </div>
        {publications.map((item) => (
          <div className="cards container">
            <div key={item.id} className="card">
              <img className="card__img" src={item.image} alt="" />
              <div className="card__texts">
                <div className="card__text-top">
                  <p className="card__title">{item.title}</p>
                  <p className="card__date">
                    {t("navbar.about") == "About us"
                      ? new Date(item.pub_date).toLocaleDateString(
                          "en-EN",
                          DATE_OPTIONS
                        )
                      : new Date(item.pub_date).toLocaleDateString(
                          "ru-RU",
                          DATE_OPTIONS
                        )}
                  </p>
                </div>
                <p className="card__description">{item.description}</p>
                <Link href={`/publication/${item.id}/`}>
                  <div className="card__btn">
                    {t("index-page-related.next")}
                  </div>
                </Link>
              </div>
            </div>
            <Link href="/publications" className="cards__btn mb">
              {t("index-page-related.more")}
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
export default News_;

/*

<main className="main">
        <section className="news__hero">
          <div className="container">
            <div className="news__hero-inner">
              <div className="news__slider">
                <p className="news__title">
                  Сравнительный обзор антикоррупционного законодательства
                  в Экономическом пространстве СНГ, 2011, The CIS Leading
                  Council Network
                </p>
                <p className="news__title">
                  Сравнительный обзор антикоррупционного законодательства
                  в Экономическом пространстве СНГ, 2011, The CIS Leading
                  Council Network
                </p>
                <p className="news__title">
                  Сравнительный обзор антикоррупционного законодательства
                  в Экономическом пространстве СНГ, 2011, The CIS Leading
                  Council Network
                </p>
              </div>
              <div className="btn">Читать далее</div>
            </div>
          </div>
        </section>
        <div className="servicesAndIndustries__nav container">
          <p
            className="
              servicesAndIndustries__nav-item
              servicesAndIndustries__nav-item_active
            "
          >
            Новости
          </p>
          <p className="servicesAndIndustries__nav-item">События</p>
          <p className="servicesAndIndustries__nav-item">E-Knowledge</p>
        </div>
        <div className="cards container">
            <div className="card">
              <img className="card__img" src="./images/card-img.jpg" alt="" />
              <div className="card__texts">
                <div className="card__text-top">
                  <p className="card__title">События</p>
                  <p className="card__date">Май 1, 2021</p>
                </div>
                <p className="card__description">
                  В связи с распространением вируса Covid-19 в Кыргызской
                  Республике и в мире, наши юристы подготовили подборку
                  нормативных правовых…
                </p>
                <div className="card__btn">далее</div>
              </div>
            </div>
            <div className="card">
              <img className="card__img" src="./images/card-img.jpg" alt="" />
              <div className="card__texts">
                <div className="card__text-top">
                  <p className="card__title">События</p>
                  <p className="card__date">Май 1, 2021</p>
                </div>
                <p className="card__description">
                  В связи с распространением вируса Covid-19 в Кыргызской
                  Республике и в мире, наши юристы подготовили подборку
                  нормативных правовых…
                </p>
                <Link href="/onenews">
                <div className="card__btn">далее</div>
                </Link>
              </div>
            </div>
            <div className="card">
              <img className="card__img" src="./images/card-img.jpg" alt="" />
              <div className="card__texts">
                <div className="card__text-top">
                  <p className="card__title">События</p>
                  <p className="card__date">Май 1, 2021</p>
                </div>
                <p className="card__description">
                  В связи с распространением вируса Covid-19 в Кыргызской
                  Республике и в мире, наши юристы подготовили подборку
                  нормативных правовых…
                </p>
                <div className="card__btn">далее</div>
              </div>
            </div>
            <Link href = "/onenews" className="cards__btn mb">Смотреть ещё </Link>
          </div>
      </main>



*/
