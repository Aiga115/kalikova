import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Employees() {
  const [person, setPerson] = useState({});
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const employeeId = router.query.id;

  const [initlanguage, setInitLanguage] = useState("ru");

  useEffect(() => {
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios
      .get(`http://188.166.40.167/${initlanguage}/employees/${employeeId}`)
      .then((res) => {
        setPerson(res.data);
      });
  }, []);

  useEffect(() => {
    let res = t("navbar.about") == "About us" ? "en" : "ru";
    setInitLanguage(res);
    axios
      .get(`http://188.166.40.167/${res}/employees/${employeeId}/`)
      .then((res) => {
        setPerson(res.data);
      });
  }, [t]);
  return (
    <>
      <main className="main">
        <section className="personality container">
          <div className="personality__box">
            <div className="personality__box-left">
              <img src={person.image} alt="" className="personality__box-img" />
            </div>
            <div className="personality__box-right">
              <p className="personality__box-position"></p>
              <p className="personality__box-name">
                {person.name} {person.surname}
              </p>
              <div className="personality__box-links">
                <div className="personality__services">
                  <p className="personality__services-title">
                    {t("services-industries-related.text1")}
                  </p>
                  {person.services.map((item) => (
                    <Link
                      href={`/service/${item.id}`}
                      key={item.id}
                      className="personality-link"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="personality__industries">
                  <p className="personality__services-title">
                    {t("services-industries-related.text2")}
                  </p>
                  {person.industries.map(
                    (item = (
                      <Link
                        href={`/industry/${item.id}`}
                        key={item.id}
                        className="personality-link"
                      >
                        {item.title}
                      </Link>
                    ))
                  )}
                </div>
              </div>
              <a
                href="mailto:aicholponalieva@gmail.com"
                className="personality-email"
              >
                {person.email}
              </a>
              <a href="tel:996555242531" className="personality-tel">
                {person.phone}
              </a>
              <div className="personality__social">
                <a href="#" className="personality__social-link">
                  <img src="./images/linkedin.svg" alt="" />
                </a>
                <a href="#" className="personality__social-link">
                  <img src="./images/alpha-v-box.svg" alt="" />
                </a>
                <a href="#" className="personality__social-link">
                  <img src="./images/pdf.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <p className="text mb65 mt70">{person.description}</p>
        </section>
        <section className="experience container">
          <h3 className="subtitle">опыт работы</h3>
          {person.employee_experiences.map((item) => (
            <p className="text mb45">{item.title}</p>
          ))}
        </section>
        <section className="languages container">
          <h3 className="subtitle">языки</h3>
          <p className="text">Русский, Английский, Кыргызский</p>
        </section>
      </main>
    </>
  );
}
export default Employees;

// Employees.getInitialProps = async (ctx) => {
//   const response = await fetch(
//     `http://188.166.40.167/ru/employees/${ctx.query.id}/`
//   );
//   const person = await response.json();
//   return {
//     person
//   };
// };

/*

<p className="text mb65">
              С 2008 года преподаёт право в сфере пользования недрами и другими
              природными ресурсами в Американском Университете Центральной Азии.
            </p>
            <p className="text">
              С 2013 года, с момента открытия Посольства Великобритании
              в г. Бишкек, Айчолпон является Почётным Советником Посла
              Великобритании в Кыргызской Республике.
            </p>
 */
