import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
function Industries() {
  const router = useRouter();
  const [industry, setIndustry] = useState({});
  const industryId = router.query.id;

  useEffect(() => {
    axios
      .get(`http://188.166.40.167/ru/industries/${industryId}/`)
      .then((res) => {
        setIndustry(res.data);
      });
  }, [industryId]);

  return (
    <>
      <main className="main">
        <section className="services__hero" style={{backgroundImage:`url(${industry.image})`}}>
          <div className="container">
            <h2 className="services__hero-title">{industry.title}</h2>
          </div>
        </section>
        <section className="services__text container">
          <p className="text mb55">{industry.description}</p>
        </section>
        <section className="services__team container">
          <h3 className="subtitle">Команда</h3>
          <ul className="services__list">
            {industry.industries_people == undefined ? (
              <></>
            ) : (
              industry.industries_people.map((item)=>(
                <li className="services__item">
                {item.name} {item.surname}
              </li>
              ))
            )}
          </ul>
        </section>
        <section className="services__industries container">
          <h3 className="subtitle">Услуги</h3>
          <ul className="services__list">
            {industry.services == undefined ? (
              <></>
            ) : (
              industry.services.map((item) => (
                <li className="services__item">{item.title}</li>
              ))
            )}
          </ul>
        </section>
        <Link href="/services__">
          <div className="cards__btn mb">
            все отрасли<span></span>
          </div>
        </Link>
      </main>
    </>
  );
}
export default Industries;
// Industries.getInitialProps = async () => {
//   const { query } = ctx;
//   const response = await fetch(
//     "http://188.166.40.167/ru/industries?id=" + query.id
//   );
//   const industry = await response.json();
//   return {
//     industry: industry,
//   };
// };

/*
<main className="main">
        <section className="services__hero">
          <div className="container">
            <h2 className="services__hero-title">
              Антимонопольное регулирование и вопросы конкуренции
            </h2>
          </div>
        </section>
        <section className="services__text container">
          <p className="text mb55">
            Юридическая фирма «Каликова энд Ассошиэйтс» имеет опыт в сфере
            оказания услуг по вопросам антимонопольного регулирования. Наши
            юристы предоставляют следующие виды услуг:
          </p>
          <p className="text mb55">
            — консультирование клиентов по вопросам слияний и поглощений с точки
            зрения соблюдения законодательства об антимонопольном регулировании;
          </p>
          <p className="text mb55">
            — подготовка и подача в антимонопольный орган необходимых документов
            для получения предварительного согласия антимонопольного органа
            в случае реорганизации (слияния, присоединения, преобразования)
            хозяйствующих субъектов (их объединений), представление интересов
            клиентов в антимонопольном органе при получении таких согласий;
          </p>
          <p className="text mb55">
            — подготовка и подача в антимонопольный орган необходимых документов
            для получения предварительного согласия антимонопольного органа
            при ликвидации субъектов естественных и разрешённых монополий,
            представление интересов клиентов в антимонопольном органе
            при получении таких согласий;
          </p>
          <p className="text mb55">
            — подготовка и подача в антимонопольный орган необходимых документов
            для получения предварительного согласия антимонопольного органа
            при приобретении хозяйствующим субъектом, занимающим доминирующее
            положение, акций, паев, долей участия в уставном капитале другого
            хозяйствующего субъекта, работающего на рынок того же товара,
            представление интересов клиентов в антимонопольном органе
            при получении таких согласий;
          </p>
          <p className="text mb55">
            — участие в рассмотрении гражданских дел, связанных
            с антимонопольным законодательством, в судах, в том числе
            по обжалованию решений и предписаний антимонопольного органа;
          </p>
          <p className="text">
            — консультирование клиентов по различным вопросам антимонопольного
            регулирования и защиты прав потребителей.
          </p>
        </section>
        <section className="services__team container">
            <h3 className="subtitle">Команда</h3>
            <ul className="services__list">
                <li className="services__item">Айчолпон Алиева</li>
                <li className="services__item">Гульнара Каликова</li>
                <li className="services__item">Александр Ан</li>
                <li className="services__item">Марина Лим</li>
            </ul>
        </section>
        <section className="services__industries container">
            <h3 className="subtitle">Услуги</h3>
            <ul className="services__list">
                <li className="services__item">Банковское дело, микрофинансы и страхование</li>
                <li className="services__item">ИТ и телекоммуникации</li>
                <li className="services__item">Разведка и разработка полезных ископаемых</li>
                <li className="services__item">Табачная и алкогольная промышленность</li>
                <li className="services__item">Гидроэнергетика</li>
            </ul>
        </section>
        <div className="cards__btn mb">все отрасли<span></span></div>
      </main>

 */
