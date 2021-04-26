import React from 'react';
import {useTranslation} from "react-i18next";
import Image from 'next/image'
import Link from "next/link";

function Navbar() {
    const { t, i18n } = useTranslation()

    return (
        <div className="navbar">
            <div className="navbar-box container">
                <div className="navbar-box-logo">
                    <Image src="/logo.svg" alt="Logo" height="67" width="324" />
                </div>
                <div className="navbar-box-links">
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
                    <Link href="#">
                        <a className="navbar-box-links__elem">Doing Business</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;