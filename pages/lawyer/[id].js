import React from 'react';

export default function Lawyer(props) {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-container-info">
          <div className="profile-container-info-photo">
            <img src="/profilePhoto.png" alt="profile"/>
          </div>
          <div className="profile-container-info-text">
            <p className="profile-container-info-text__role">Управляющий партнер</p>
            <p className="profile-container-info-text__name">Айчолпон Алиева</p>
            <p className="profile-container-info-text__do">
              Разведка и разработка полезных ископаемых. Нефть и газ.
              Слияния и поглощения, структурирование и реорганизация бизнеса.</p>
            <span>lorem.ipsum@gmail.com</span>
            <span>+996 555 555 555</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="profile-skills">
        <div className="profile-skills-box">
          <p className="profile-skills-box__subtitle">
            Айчолпон имеет более пятнадцати лет опыта консультирования иностранных инвесторов, международных донорских
            организаций, исследовательских институтов и местных компаний
            по широкому кругу правовых вопросов в сфере горнодобывающей промышленности,
            консультирует клиентов по вопросам привлечения и
            защиты иностранных инвестиций, проектного финансирования, а также по вопросам слияния и поглощения.
            Айчолпон, представляет интересы бизнеса, активно участвует в работе официальных рабочих групп, комиссий
            и советов по реформированию законодательства Кыргызской Республики в сфере недропользования, инвестиций и
            предпринимательства.
          </p>
        </div>
        <div className="profile-skills-box">
          <p className="profile-skills-box__title">опыт работы</p>

        </div>
        <div className="profile-skills-box">
          <p className="profile-skills-box__title">Квалификация</p>

        </div>
        <div className="profile-skills-box">
          <p className="profile-skills-box__title">Членство в профессиональных организациях</p>

        </div>
        <div className="profile-skills-box">
          <p className="profile-skills-box__title">языки</p>

        </div>
      </div>
    </div>
  )
}

