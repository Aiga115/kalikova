import {LawyerCard} from "../components/lawyerCard";
import Link from 'next/link'


function Team() {
    const id = 1

    return (
        <div className="team">
            <div className="team-info container">
                <p className="team-info__title">команда</p>
                <div className="team-info-cont">
                    <p className="team-info-cont__text">Фундаментом успешного развития фирмы являются наши сотрудники.
                        Юристы нашей фирмы имеют богатый опыт юридической практики в различных отраслях права,
                        до прихода в K&A многие из них получили опыт работы в государственных, международных
                        организациях, в частных коммерческих компаниях и некоммерческих организациях.
                        Наша команда имеет широкие профессиональные связи и контакты с представителями государственного
                        и частного сектора.
                    </p>
                    <img src="/sliderBackground.jpeg" alt="picture" className="team-info-cont__img"/>
                    <p className="team-info-cont__text">
                        Наши юристы получили образование в ведущих учебных заведениях Кыргызстана и зарубежных
                        юридических школ, являются членами Ассоциации Юристов Кыргызстана, Международной Ассоциации Юристов и
                        Американской Ассоциации Юристов, арбитрами Международного третейского суда при
                        Торгово-промышленной палате Кыргызской Республики. Наша команда включает лицензированных адвокатов
                        и патентных поверенных.
                    </p>
                </div>
            </div>
            <div className="team-lawyerList">

                <LawyerCard />
                <LawyerCard />
                <LawyerCard />
            </div>
        </div>
    );
}

export default Team;