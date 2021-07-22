import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import i18next from "../i18n/index";
import { useTranslation } from "react-i18next";

export const getStaticProps = async () => {
  
  const res = await fetch(`http://188.166.40.167/ru/industries/`);
  const data = await res.json();
  return {
    props: { industries: data },
  };
};

function Services__({industries}) {
  const router = useRouter()
   
  const { t, i18n } = useTranslation();

  const [active, setActive] = useState(true);
  const [services, setServices] = useState([]);
  const [initlanguage, setInitLanguage] = useState("ru")
  
  useEffect(()=>{
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios.get(`http://188.166.40.167/${initlanguage}/services/`).then((res) => {
      setServices(res.data);
    })
  },[])

  useEffect(() => {
    let res = t("navbar.about")=="About us"?"en":"ru";
    setInitLanguage(res);
    axios.get(`http://188.166.40.167/${res}/services/`).then((res) => {
      setServices(res.data)
    })
  }, [t]);
  return (
    <main className="main">
      <section className="servicesAndIndustries container">
        <h3 className="subtitle mt70">{t("services-industries-related.subtitle")}</h3>
        <p className="text mb50">
          {t("services-industries-related.text1")}
        </p>
        <p className="text">
          {t("services-industries-related.text2")}
        </p>
        <div className="servicesAndIndustries__nav">
          {active ? (
            <>
              <p
                className="servicesAndIndustries__nav-item servicesAndIndustries__nav-item_active"
              >
                {t("services-industries-related.subtitle-particle1")}
              </p>
              <p
                className="servicesAndIndustries__nav-item"
                onClick={() => setActive(false)}
              >
               {t("services-industries-related.subtitle-particle2")}
              </p>
            </>
          ) : (
            <>
              <p
                className="servicesAndIndustries__nav-item"
                onClick={() => setActive(true)}
              >
                {t("services-industries-related.subtitle-particle1")}
              </p>
              <p
                className="servicesAndIndustries__nav-item servicesAndIndustries__nav-item_active"
              >
                {t("services-industries-related.subtitle-particle2")}
              </p>
            </>
          )}
        </div>
        {active ? (
          <>
            {" "}
            {services.map((service) => (
              <div className="links">
                <Link
                  href={`/service/${service.id}`}
                  key={service.id}
                  className="link"
                >
                  {service.title}
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            {industries.map((industry) => (
              <div className="links">
                <Link
                  href={`/industry/${industry.id}`}
                  key={industry.id}
                  className="link"
                >
                  {industry.title}
                </Link>
              </div>
            ))}
          </>
        )}
      </section>
    </main>
  );
}

export default Services__;

/*


{industries.map((industry) => (
              <div className="links">
                <Link
                  href={`/industries/${industry.id}`}
                  key={industry.id}
                  className="link"
                >
                  {industry.title}
                </Link>
              </div>
            ))}





<Link href="#" className="link">Контракты</Link>
            <Link href="#" className="link">Интеллектуальная собственность</Link>
            <Link href="#" className="link">Корпоративные вопросы и рынок капиталов</Link>
            <Link href="#" className="link">Международная торговля, таможенные вопросы и техническое
              регулирование</Link>
            <Link href="#" className="link">Ответственность производителя</Link>
            <Link href="#" className="link">Налогообложение</Link>
            <Link href="#" className="link">Охрана окружающей среды и безопасность</Link>
            <Link href="#" className="link">Проектное финансирование</Link>
            <Link href="#" className="link">Слияния и поглощения, структурирование и реорганизация бизнеса</Link>
            <Link href="#" className="link">Судебное представительство и арбитраж</Link>
            <Link href="#" className="link"
              >Трудовые, миграционные вопросы и охрана персональных данных</Link>
            <Link href="#" className="link">Государственно-частное партнёрство</Link>
            <Link href="#" className="link">Законодательная политика и регуляторная практика</Link>
  

*/
