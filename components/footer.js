import React from 'react';
import Image from "next/image";

function Footer() {

    return (
        <div className="footer">
            <div className="footer-social">
                <div className="footer-social-text">
                    <a href="#">Контакты</a>
                    <br/>
                    <a href="#">Правила пользования и соглашение</a>
                </div>
                <div className="footer-social-links">
                    <a href="#">
                        <img className="footer-social-links__img" src="/socials/twitter.svg" width="50" height="50" alt="twitter" />
                    </a>
                    <a href="#">
                        <img className="footer-social-links__img" src="/socials/linkedin.svg" width="50" height="50" alt="linkedin" />
                    </a>
                    <a href="#">
                        <img className="footer-social-links__img" src="/socials/facebook.svg" width="50" height="50" alt="facebook" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2021 Copyright Kalikova & Associates</p>
            </div>
        </div>
    );
}

export default Footer;