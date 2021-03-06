import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "../i18n/index";
import {useState,useEffect} from "react"
import axios from "axios";
// export const getStaticProps = async () => {
//   const res = await fetch(`http://188.166.40.167/ru/about-us/`);
//   const data = await res.json();
//   return {
//     props: { abouts: data },
//   };
// };

function About() {
  const { t, i18n } = useTranslation();

  const [abouts,setAbouts] = useState([]);
  const [initlanguage, setInitLanguage] = useState("ru")
  
  useEffect(()=>{
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios.get(`http://188.166.40.167/${initlanguage}/about-us/`).then((res) => {
      setAbouts(res.data);
    })
  },[])

  useEffect(() => {
    let res = t("navbar.about")=="About us"?"en":"ru";
    console.log("Result is: "+res)
    setInitLanguage(res);
    console.log("init "+initlanguage)
    axios.get(`http://188.166.40.167/${res}/about-us/`).then((res) => {
      setAbouts(res.data)
    })
  }, [t]);


  return (
    <div className="about">
      <div className="about-background"></div>
      {abouts.map((about) => (
        <>
          <div className="about-background" style={{backgroundImage:`url(${about.image})`}}>
          </div>
          <div className="about-us container">
            <div className="about-us-title">
              <p>{about.title}</p>
            </div>
            <div className="about-us-text">
              <p>{about.text}</p>
            </div>

            <div className="about-mission-quot container">
              <div className="about-mission-quot-box">
                <img src="/Vector.svg" alt="#" />
                <p className="about-mission-quot-box__elem">{about.comment}</p>
                <p className="about-mission-quot-box__team">{about.author}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default About;

/*

<div className="about-us container">
        <div className="about-us-title">
          <p>{t("navbar.about") === "About us" ? "About us" : "О нас"}</p>
        </div>
        <div className="about-us-text">
          <p>
            Юридическая фирма «Каликова & Ассошиэйтс» образована в 2002 году.
            Сегодня Каликова & Ассошиэйтс - одна из лидирующих юридических фирм
            в Кыргызстане, специализирующихся в области юридического
            сопровождения бизнеса. За годы работы нами реализованы тысячи
            проектов, накоплен богатый профессиональный опыт, сформирована
            надежная профессиональная команда. Мы работаем с компаниями и
            международными организациями, ведущими деятельность в различных
            секторах экономики Кыргызстана – банковском, финансовом,
            горнодобывающем, телекоммуникационном, фармацевтическом,
            гостиничном, табачном и других секторах экономики.
          </p>
        </div>
      </div>
      <div className="about-mission">
        <div className="about-mission-title container">
          <p className="about-mission-title-p">Наша миссия</p>
        </div>
        <div className="about-mission-quot container">
          <div className="about-mission-quot-box">
            <img src="/Vector.svg" alt="#" />
            <p className="about-mission-quot-box__elem">
              “Каликова & Ассошиэйтс содействует развитию бизнеса в Кыргызстане,
              предоставляя высокопрофессиональные юридические услуги.”
            </p>
            <p className="about-mission-quot-box__team">
              Команда Kalikova & Associates
            </p>
          </div>
        </div>
      </div>
      <div className="about-us container">
        <div className="about-us-title">
          <p>Ценности</p>
        </div>
        <div className="about-us-text">
          <p>
            В нашей команде люди разных возрастов, национальностей, характеров и
            специализаций. Нас объединяют единые ценности, которыми мы дорожим и
            которых мы придерживаемся. Командная работа -основа построения нашей
            работы. Мы считаем, что добиться эффективного и позитивного решения
            вопросов для наших клиентов возможно, изучив вопрос под разными
            углами зрения. По каждому клиентскому запросу мы формируем проектные
            команды, соответствующие запросу клиента. Понимание целей и
            деятельности клиента, ответственность и эффективность – важнейшие
            принципы работы нашей команды.
          </p>
        </div>
      </div>

      <div className="about-team">
        <div className="about-team-background"></div>
        <div className="about-team-text">
          <p>
            Командное и индивидуальное профессиональное лидерство - обязательное
            условие нашей деятельности. Мы добиваемся успеха через
            профессиональный успех каждого члена нашей команды. Мы стремимся к
            тому, чтобы каждый член команды стал уникальным и востребованным
            профессионалом в своей области. Чем выше квалификация каждого из нас
            – тем сильнее наша команда.
          </p>
        </div>
      </div>

      <div className="about-trust">
        <p>
          Доверие - основная цель в нашей работе с клиентами и внутри команды.
          Мы стремимся добиться доверия через понимание целей и деятельности
          наших клиентов, высокий уровень ответственности, надежности и
          стабильности, высокие стандарты качества, соблюдение профессиональной
          этики и использование современных информационных технологий.
        </p>
      </div>

      <div className="about-team">
        <div className="about-team-text">
          <p>
            Командное и индивидуальное профессиональное лидерство - обязательное
            условие нашей деятельности. Мы добиваемся успеха через
            профессиональный успех каждого члена нашей команды. Мы стремимся к
            тому, чтобы каждый член команды стал уникальным и востребованным
            профессионалом в своей области. Чем выше квалификация каждого из нас
            – тем сильнее наша команда.
          </p>
        </div>
        <div className="about-team-background"></div>
      </div>

      <div className="about-trust">
        <p>
          Социальная ответственность - наш принцип взаимоотношений с обществом,
          в котором мы живем и за которое мы несем ответственность. Мы считаем,
          что помощь нашим согражданам – наш гражданский долг и проявление наших
          лучших человеческих качеств.
        </p>
      </div>

      <div className="about-profession">
        <div className="about-profession-title">
          <p className="about-profession-title__elem">
            профессиональное признание
          </p>
        </div>
        <div className="about-profession-global">
          <div className="about-profession-global-img">
            <img src="/WWL-logo 1.svg" alt="wwl" />
            <img src="/unnamed 1.svg" alt="global" />
          </div>
          <div className="about-profession-global-text">
            <p>
              Каликова & Ассошиэйтс отмечена в ряде международных справочников
              ведущих юридических фирм и юристов мира таких как: Chambers
              Global, Chambers Asia Pacific, Who's Who Legal, Best Lawyers и
              другие. Начиная с 2003 года, Гульнара Каликова, старший партнер,
              ежегодно номинируется и включается в список ведущих юристов в
              области бизнеса и проектного финансирования WhoIsWhoLegal.com
            </p>
          </div>
        </div>
      </div>

*/
