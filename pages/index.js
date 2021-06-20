import Link from "next/link";
import Slider from "react-slick";
import SVGDoingBusiness from "../components/SVG/SVGDoingBusiness";
import NewsCard from "../components/newsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "red"}}
                onClick={onClick}>
                <img src="/arrow.svg" style={{transform: "rotate(180deg)"}} alt="arrow"/>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}>
                <img src="/arrow.svg" alt="arrow"/>
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
        prevArrow: <SamplePrevArrow />
    }


    return (
        <div className="home">
            <div className="home-background">
                <img className="home-background__img" src="/mainBackground.png" alt="background" width="100%"
                     height="600px"/>
                <div className="home-background-title">
                    Kalikova & <br/>
                    Associates <br/>
                    Law Firm
                </div>
            </div>

                <Slider {...settings}>
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
                </Slider>


            <div className="home-guide">
                <img className="home-guide__img" src="/guideBackground.png" alt="guide"/>
                <div className="home-guide-elem">
                    <SVGDoingBusiness />
                    <Link href="/" className="home-guide-elem__link">Подробнее</Link>
                </div>
            </div>

            <div className="news">
                <NewsCard />
                <NewsCard />
                <NewsCard />

                <Link href="/">
                    <span className="news-next">Посмотреть все</span>
                </Link>
            </div>

            <div className="home-facts">
                <img src="/Triger_____.svg" alt="#"/>
            </div>
        </div>
    )
}

