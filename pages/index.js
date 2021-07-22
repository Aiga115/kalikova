import Link from "next/link";
import Slider from "react-slick";
import SVGDoingBusiness from "../components/SVG/SVGDoingBusiness";
import { useState, useEffect } from "react";
import axios from "axios";
import i18next from "../i18n/index";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export const getStaticProps = async () => {
//   const res = await fetch(`http://188.166.40.167/ru/sliders/`);
//   const data = await res.json();
//   return {
//     props: { sliders: data },
//   };
// };

export default function Home() {


  const { t, i18n } = useTranslation();
  const [publications, setPublications] = useState([]);
  const [sliders,setSliders] = useState([]);

  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const [initlanguage, setInitLanguage] = useState("ru")
  
  useEffect(()=>{
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios.get(`http://188.166.40.167/${initlanguage}/publications/`).then((res) => {
      setPublications(res.data);
    })
    axios.get(`http://188.166.40.167/${initlanguage}/sliders/`).then((res) => {
      setSliders(res.data);
    })
  },[])
  useEffect(() => {
    let res = t("navbar.about")=="About us"?"en":"ru";
    console.log("Result is: "+res)
    setInitLanguage(res);
    console.log("init "+initlanguage)
    axios.get(`http://188.166.40.167/${res}/publications/`).then((res) => {
      setPublications(res.data);
    });
    axios.get(`http://188.166.40.167/${res}/sliders/`).then((res) => {
      setSliders(res.data);
    });
  }, [t]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "red"}}
        onClick={onClick}
      >
        <img
          src="/arrow.svg"
          style={{ transform: "rotate(180deg)" }}
          alt="arrow"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <img src="/arrow.svg" alt="arrow" />
      </div>
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="home">
      <div className="home-background">
        <img
          className="home-background__img"
          src="/mainBackground.png"
          alt="background"
          width="100%"
          height="600px"
        />
        <div className="home-background-title">
          Kalikova & <br />
          Associates <br />
          Law Firm
        </div>
      </div>

      <Slider {...settings}>
        {sliders.map((slider) => (
          <>
            <div
              className="home-slider-elem"
              style={{backgroundImage:`url(${slider.image})`}}
            >
              <div className="home-slider-elem-info">
                <p className="home-slider-elem-info__title">{slider.title}</p>
                <p className="home-slider-elem-info__subtitle">
                  Times of Сentral Asia, 23 ноября 2011 г.
                </p>
              </div>
            </div>
          </>
        ))}
      </Slider>

      <div className="home-guide">
        <img
          className="home-guide__img"
          src="/guideBackground.png"
          alt="guide"
        />
        <div className="home-guide-elem">
          <SVGDoingBusiness />
          <Link href="/doingbusiness" className="home-guide-elem__link">
            {t("business-guide.more")}
          </Link>
        </div>
      </div>
      <div className="news">
        <div className="cards container">
          {publications.map((item) => (
            <>
              <div key={item.id} className="card">
                <img className="card__img" src={item.image} alt="" />
                <div className="card__texts">
                  <div className="card__text-top">
                    <p className="card__title">{item.title}</p>
                    <p className="card__date">
                      {t("navbar.about")=="About us"?new Date(item.pub_date).toLocaleDateString(
                        "en-EN",
                        DATE_OPTIONS
                      ):new Date(item.pub_date).toLocaleDateString(
                        "ru-RU",
                        DATE_OPTIONS
                      )}
                    </p>
                  </div>
                  <p class="card__description">{item.description}</p>
                  <Link href={`/publications/${item.id}/`}>
                    <div className="card__btn">{t("index-page-related.next")}</div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
        <Link href="/news">
          <span className="news-next">{t("index-page-related.more")}</span>
        </Link>
      </div>

      <div className="home-facts">
      <section class="counter">
          <div class="container">
            <div class="counter__boxs">
              <div class="counter__box">
                <div class="counter-text lawyers"><span>385</span>385</div>
                <p class="counter__box-text">Lawyers</p>
              </div>
              <div class="counter__box">
                <div class="counter-text rating"><span>#1</span>#1</div>
                <p class="counter__box-text">Law Firm</p>
              </div>
              <div class="counter__box">
                <div class="counter-text deals"><span>65%</span>65%</div>
                <p class="counter__box-text">Cross-Border Deals</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/*
<div className="home-slider-elem">
                        <div className="home-slider-elem-info">
                            <p className="home-slider-elem-info__title">
                                Каковы гарантии иностранных инвестиций в Кыргызской Республике?
                            </p>
                            <p className="home-slider-elem-info__subtitle">
                                Times of Сentral Asia, 23 ноября 2011 г.
                            </p>
                        </div>
                    </div>
                    <div className="home-slider-elem">
                        2
                    </div>
                    <div className="home-slider-elem">
                        2
                    </div>


*/
