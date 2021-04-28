import styles from '../styles/Home.module.css'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

    const cardStyle1 = {
        backgroundColor: "#C68866"
    }
    const cardStyle2 = {
        backgroundColor: "#A7BED3"
    }

    const relative = {
        width: "420px",
        height: "483px",
        position: "relative",
        margin: "0px 165px 178px 80px",
    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    return (
        <div className="home">
            <div className="home-background">
                <img className="home-background__img" src="/Background.png" alt="background" width="100%"
                     height="600px"/>
                <div className="home-background-title">
                    Kalikova & <br/>
                    Associates <br/>
                    Law Firm
                </div>
            </div>


            <div className="home-slider">
                <Slider {...settings}>
                    <div className="home-slider-elem">
                    </div>
                    <div className="home-slider-elem">
                    </div>
                    <div className="home-slider-elem">
                    </div>
                </Slider>
            </div>


            <div className="home-cards">
                <div style={relative} className="home-relative">
                    <img src="/Rectangle23.png" alt="#" width="420" height="483"/>
                    <div className="home-cards-elem" style={{
                        position: "absolute",
                        top: "40px",
                        right: "45px",
                        margin: "0px"

                    }}>
                        <p className="home-cards-elem__title">
                            События
                        </p>
                        <p className="home-card-elem__text">
                            В связи с распространением вируса Covid-19 в Кыргызской Республике и в мире,
                            наши юристы подготовили подборку нормативных правовых ...
                        </p>
                    </div>
                </div>

                <div className="home-cards-elem" style={cardStyle1}>
                    <p className="home-cards-elem__title">
                        E-Knowledge
                    </p>
                    <p className="home-card-elem__text" style={{color: "white"}}>
                        Практика K&A в сфере трудовых отношений
                    </p>
                </div>
                <div className="home-cards-elem" style={cardStyle2}>
                    <p className="home-cards-elem__title">
                        Подкасты
                    </p>
                    <p className="home-card-elem__text" style={{color: "white"}}>
                        Юристы Kalikova & Associates провели семинар для клиентов
                    </p>
                </div>

                <div style={relative} className="home-relative">
                    <img src="/Rectangle24.png" alt="#" width="420" height="483"/>

                    <div className="home-cards-elem"
                         style={{position: "absolute", top: "40px", right: "45px", margin: "0px"}}>
                        <p className="home-cards-elem__title">
                            новости
                        </p>
                        <p className="home-card-elem__text">
                            Мы рады пригласить Вас принять участие в международном IBA Европа
                            – Кавказ – Азия Форуме (IBA EKA Форум), который пройдет ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
