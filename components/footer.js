import { useState } from 'react';
import Link from "next/link";
import {Button, Modal} from "react-bootstrap";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {

    const [show, setShow] = useState(false)

    const { register, handleSubmit, formState:{errors}, watch } = useForm()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = data => console.log("Отправлено: ",data)
    const name = watch('name')

    console.log(name)
    console.log(errors)

    return (
        <div className="footer">
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
                            <Modal.Title >Свяжитесь с нами</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{display: "flex"}}>
                                <div>
                                    <div className="input-container">
                                    <label className="modal-labels" htmlFor="name">Имя<span className="modal-span">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Введите имя"
                                        id="name"
                                        className="modal-inputs"
                                        {...register('name', {required: true})}/>
                                    {errors.name && <i style={{color: "red", marginTop: "-40px"}}>Обязательное поле!<br/></i>}
                                    </div>
                                    {/*{errors.name?.type === 'required' && "First name is required"}*/}
                                    <div className="input-container">
                                    <label className="modal-labels" htmlFor="company">Компания</label>
                                    <input
                                        type="text"
                                        placeholder="Компания"
                                        id="company"
                                        className="modal-inputs"
                                        {...register('company')}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-container">
                                    <label className="modal-labels" htmlFor="surname">Фамилия<span className="modal-span">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Введите фамилию"
                                        id="surname"
                                        className="modal-inputs"
                                        {...register('surname', {required: true})}/>
                                    </div>
                                    <div className="input-container">
                                        <label className="modal-labels" htmlFor="email">Email<span className="modal-span">*</span></label>
                                        <input
                                        type="email"
                                        placeholder="Введите email"
                                        id="email"
                                        className="modal-inputs"
                                        {...register('email', {required: true})}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <label className="modal-labels" htmlFor="question">Вопрос / Коментарий</label>
                                <textarea
                                    name="question"
                                    id="question"
                                    cols="10"
                                    rows="10"
                                    placeholder="Что вы хотите задать?"
                                    {...register('question')}
                                >
                                </textarea>
                                {/*<p>{question.value.length} / 250</p>*/}
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-primary" onClick={handleClose}>
                                Отмена
                            </Button>
                            <Button variant="primary" type="submit">
                                Отправить
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        </div>
    );
}

export default Footer;