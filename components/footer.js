import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import i18next from "../i18n/index";

function Footer() {

  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const onSubmit = (data) => {
    let res = t("navbar.about") == "About us" ? "en" : "ru";

    axios.post(`http://188.166.40.167/${res}/application/`,data)
    .then((res)=>{
      console.log(res);
    })
  }
  const name = watch("name");

  console.log(name);
  console.log(errors);

  return (
    <div>
      <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="footer__inner">
              <div className="footer__column">
                <p className="footer__title">{t("footer.office")}</p>
                {t("footer.office")=="Наш офис"?<p className="footer__text">
                  ул. Игембердиева 1А
                  <br />
                  Бизнес-центр «АВРОРА», 7 этаж
                  <br />
                  720005, Кыргызская Республика
                </p>:<p className="footer__text">
                  st. Igemberdieva 1A
                  <br />
                  Business center «АВРОРА», 7th floor
                  <br />
                  720005, Kyrgyz Republic
                </p>}
              </div>
              <div className="footer__column">
                <p className="footer__title">{t("footer.contacts")}</p>
                <a href="tel:996312666060" className="footer__text">
                  (+996 312) 66–60–60;
                </a>
                <a href="tel:996312976843" className="footer__text">
                  (+996 312) 97–68–43;
                </a>
                <a href="mailto:lawyer@k-a.kg" className="footer__text">
                  lawyer@k-a.kg
                </a>
              </div>
              <div className="footer__column">
                <button className="btn footer__btn" onClick={handleShow}>
                  {t("footer.call-us")}
                </button>
                <div className="social">
                  <a href="#" className="social__item">
                    <img src="/socials/twitter.svg" alt="twitter" />
                  </a>
                  <a href="#" className="social__item">
                    <img src="/socials/linkedin.svg" alt="in" />
                  </a>
                  <a href="#" className="social__item">
                    <img src="/socials/facebook.svg" alt="facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-inner">
              <p className="copyright">
                <span></span>2021 Copyright Kalikova & Associates
              </p>
              <a href="#" className="rules">
                {t("footer.rights")}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header closeButton>
              <Modal.Title>{t("footer.call-us")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ display: "flex" }}>
                <div>
                  <div className="input-container">
                    <label className="modal-labels" htmlFor="name">
                    {t("footer-modal.name")}<span className="modal-span">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t("footer-modal.insert-name")}
                      id="name"
                      className="modal-inputs"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <i style={{ color: "red", marginTop: "-40px" }}>
                        {t("footer-modal.required")}
                        <br />
                      </i>
                    )}
                  </div>
                  {/*{errors.name?.type === 'required' && "First name is required"}*/}
                  <div className="input-container">
                    <label className="modal-labels" htmlFor="company">
                      {t("footer-modal.company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("footer-modal.company")}
                      id="company"
                      className="modal-inputs"
                      {...register("company")}
                    />
                  </div>
                </div>
                <div>
                  <div className="input-container">
                    <label className="modal-labels" htmlFor="surname">
                    {t("footer-modal.surname")}<span className="modal-span">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t("footer-modal.insert-surname")}
                      id="surname"
                      className="modal-inputs"
                      {...register("surname", { required: true })}
                    />
                  </div>
                  <div className="input-container">
                    <label className="modal-labels" htmlFor="email">
                      Email<span className="modal-span">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder={t("footer-modal.insert-email")}
                      id="email"
                      className="modal-inputs"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label className="modal-labels" htmlFor="question">
                  {t("footer-modal.comment")}
                </label>
                <textarea
                  name="question"
                  id="question"
                  cols="10"
                  rows="10"
                  placeholder={t("footer-modal.insert-comment")}
                  {...register("question")}
                ></textarea>
                {/*<p>{question.value.length} / 250</p>*/}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-primary" onClick={handleClose}>
                {t("footer-modal.reject")}
              </Button>
              <Button variant="primary" type="submit">
                {t("footer-modal.submit")}
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    </div>
  );
}

export default Footer;

{
  /* <div className="footer">
            <div className="footer-social">
                <div className="footer-social-address">
                    <p className="footer-social-address__title">
                        Наш офис 
                    </p>
                    <p className="footer-social-address__subtitle">ул. Игембердиева 1А</p>
                    <p className="footer-social-address__subtitle">Бизнес-центр «АВРОРА», 7 этаж</p>
                    <p className="footer-social-address__subtitle">720005, Кыргызская Республика</p>
                </div>
                <div className="footer-social-contacts">
                    <p className="footer-social-address__title">Контакты</p>
                    <p className="footer-social-address__subtitle">(+996 312) 66-60-60;</p>
                    <p className="footer-social-address__subtitle">(+996 312) 97-68-43;</p>
                    <p className="footer-social-address__subtitle">lawyer@k-a.kg</p>
                </div>
                <div className="footer-social-links">
                    <button className="footer-social-links__connect" onClick={handleShow}>
                        Свяжитесь с нами
                    </button>
                    <div>
                        <a href="#">
                            <img className="footer-social-links__img" src="/socials/twitter.svg" width="50" height="50"
                                 alt="twitter"/>
                        </a>
                        <a href="#">
                            <img className="footer-social-links__img" src="/socials/linkedin.svg" width="50" height="50"
                                 alt="linkedin"/>
                        </a>
                        <a href="#">
                            <img className="footer-social-links__img" src="/socials/facebook.svg" width="50" height="50"
                                 alt="facebook"/>
                        </a>
                    </div>

                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2021 Copyright Kalikova & Associates</p>
                <Link href="/">Правила пользования и соглашение</Link>
            </div>
  */
}
