import React from 'react';
import {useTranslation} from "react-i18next";
import Link from "next/link";

function Navbar() {
    const {t, i18n} = useTranslation()

    return (
        <div className="navbar">
            <div className="navbar-box">
                <div className="navbar-box-logo">
                    <Link href="/">
                        <img src="/logo.svg" alt="Logo" height="38" width="182"/>
                    </Link>
                </div>
                <div className="navbar-box-links">
                    <Link href="/">
                        <a className="navbar-box-links__elem">Главная</a>
                    </Link>
                    <Link href="/about">
                        <a className="navbar-box-links__elem">О нас</a>
                    </Link>
                    <Link href="/team">
                        <a className="navbar-box-links__elem">Команда</a>
                    </Link>
                    <Link href="/services">
                        <a className="navbar-box-links__elem">Услуги</a>
                    </Link>
                    <Link href="/news">
                        <a className="navbar-box-links__elem">Новости</a>
                    </Link>
                </div>
                <div className="navbar-box-right">
                    <div className="navbar-box-right-lang">
                        <span>РУ</span>
                        <span>EN</span>
                        <span>КР</span>
                        <span>中國人</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;