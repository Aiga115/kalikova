import React from 'react';
 import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch(`http://188.166.40.167/ru/publications/`);
  const data = await res.json();
  return {
    props: { publications: data },
  }; 
};
function NewsCard({publications}) {
    return (
        <div className="cards container">
          {publications.map((item)=>(<>
            <div key={item.id} className="card">
            <img className="card__img" src={item.image} alt="" />
            <div className="card__texts">
              <div className="card__text-top">
                <p className="card__title">{item.title}</p>
                <p className="card__date">{item.pub_date}</p>
              </div>
              <p class="card__description">
               {item.description}
              </p>
              <div className="card__btn">далее</div>
            </div>
            </div>
          </>))}
        </div>

    );
}

export default NewsCard;


{/*

<div class="cards container">
          <div class="card">
            <img class="card__img" src="./images/card-img.jpg" alt="" />
            <div class="card__texts">
              <div class="card__text-top">
                <p class="card__title">События</p>
                <p class="card__date">Май 1, 2021</p>
              </div>
              <p class="card__description">
                В связи с распространением вируса Covid-19 в Кыргызской
                Республике и в мире, наши юристы подготовили подборку
                нормативных правовых…
              </p>
              <div class="card__btn">далее</div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" src="./images/card-img.jpg" alt="" />
            <div class="card__texts">
              <div class="card__text-top">
                <p class="card__title">События</p>
                <p class="card__date">Май 1, 2021</p>
              </div>
              <p class="card__description">
                В связи с распространением вируса Covid-19 в Кыргызской
                Республике и в мире, наши юристы подготовили подборку
                нормативных правовых…
              </p>
              <div class="card__btn">далее</div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" src="./images/card-img.jpg" alt="" />
            <div class="card__texts">
              <div class="card__text-top">
                <p class="card__title">События</p>
                <p class="card__date">Май 1, 2021</p>
              </div>
              <p class="card__description">
                В связи с распространением вируса Covid-19 в Кыргызской
                Республике и в мире, наши юристы подготовили подборку
                нормативных правовых…
              </p>
              <div class="card__btn">далее</div>
            </div>
          </div>
          <div class="cards__btn mb">Посмотреть все<span></span></div>
        </div>



        // <div className="card">
        //     <div className="card-img">
        //         <img src="./newsCardBackground.png" alt="photo"/>
        //     </div>
        //     <div className="card-info">
        //         <div className="card-info-title">
        //             <p className="card-info-title__elem">
        //                 События
        //             </p>
        //             <span className="card-info-title__date">
        //                 Май 1, 2021
        //             </span>
        //         </div>
        //         <div className="card-info-subtitle">
        //             <p className="card-info-subtitle__text">
        //                 В связи с распространением вируса Covid-19 в Кыргызской Республике и в мире,
        //                 наши юристы подготовили подборку нормативных правовых ...
        //             </p>
        //         </div>
        //         <div className="card-info-next">
        //             <Link href="/">
        //                 Далее
        //             </Link>
        //         </div>
        //     </div>
        // </div>

*/}