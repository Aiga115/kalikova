import React from 'react';
import Link from "next/link";

function NewsCard(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src="./cardPhoto.png" alt="photo"/>
            </div>
            <div className="card-info">
                <div className="card-info-title">
                    <p className="card-info-title__elem">
                        События
                    </p>
                    <span className="card-info-title__date">
                        Май 1, 2021
                    </span>
                </div>
                <div className="card-info-subtitle">
                    <p className="card-info-subtitle__text">
                        В связи с распространением вируса Covid-19 в Кыргызской Республике и в мире,
                        наши юристы подготовили подборку нормативных правовых ...
                    </p>
                </div>
                <div className="card-info-next">
                    <Link href="/">
                        Далее
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;