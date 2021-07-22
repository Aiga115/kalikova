import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import i18next from "../i18n/index";
import { useRouter } from "next/router";
import { slide as Menu } from "react-burger-menu";
function Navbar() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  function handleChangeTr(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div className="navbar">
      <div className="navbar-box" outerContainerId={"outer-container"}>
        <div className="navbar-box-logo">
          <Link href="/">
            <img src="/logo.svg" alt="Logo" height="38" width="182" />
          </Link>
        </div>
        <div className="menu-list" pageWrapId={"page-wrap"}>
          <Menu>
            <Link href="/">
              <a className="navbar-box-links__elem">{t("navbar.main")}</a>
            </Link>
            <Link href="/about">
              <a className="navbar-box-links__elem">{t("navbar.about")}</a>
            </Link>
            <Link href="/employees">
              <a className="navbar-box-links__elem">{t("navbar.team")}</a>
            </Link>
            <Link href="/services__">
              <a className="navbar-box-links__elem">{t("navbar.services")}</a>
            </Link>
            <Link href="/publications">
              <a className="navbar-box-links__elem">{t("navbar.news")}</a>
            </Link>
            <div className="navbar-box-right-lang">
              <span onClick={() => handleChangeTr("ru")}>РУ</span>
              <span onClick={() => handleChangeTr("en")}>EN</span>
              <span>КР</span>
              <span>中國人</span>
            </div>
          </Menu>
        </div>

        <div className="navbar-box-links">
          <Link href="/">
            <a className="navbar-box-links__elem">{t("navbar.main")}</a>
          </Link>
          <Link href="/about">
            <a className="navbar-box-links__elem">{t("navbar.about")}</a>
          </Link>
          <Link href="/employees">
            <a className="navbar-box-links__elem">{t("navbar.team")}</a>
          </Link>
          <Link href="/services__">
            <a className="navbar-box-links__elem">{t("navbar.services")}</a>
          </Link>
          <Link href="/publications">
            <a className="navbar-box-links__elem">{t("navbar.news")}</a>
          </Link>
        </div>
        <div className="navbar-box-right">
          <div className="navbar-box-right-lang">
            <span onClick={() => handleChangeTr("ru")}>РУ</span>
            <span onClick={() => handleChangeTr("en")}>EN</span>
            <span>КР</span>
            <span>中國人</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

/*

<div className="navbar">
            <div className="navbar-box">
                <div className="navbar-box-logo">
                    <Link href="/">
                        <img src="/logo.svg" alt="Logo" height="38" width="182"/>
                    </Link>
                </div>
                <div className="menu-list">
                <div className="menu-navbar">
                </div>
                <div className="navbar-box-links">
                    <Link href="/">
                        <a className="navbar-box-links__elem">{t('navbar.main')}</a>
                    </Link>
                    <Link href="/about">
                        <a className="navbar-box-links__elem">{t('navbar.about')}</a>
                    </Link>
                    <Link href="/team">
                        <a className="navbar-box-links__elem">{t('navbar.team')}</a>
                    </Link>
                    <Link href="/services">
                        <a className="navbar-box-links__elem">{t('navbar.services')}</a>
                    </Link>
                    <Link href="/news">
                        <a className="navbar-box-links__elem">{t('navbar.news')}</a>
                    </Link>
                    <div className="navbar-box-right-lang">
                        <span onClick={()=>handleChangeTr('ru')}>РУ</span>
                        <span onClick = {()=>handleChangeTr('en')}>EN</span>
                        <span>КР</span>
                        <span>中國人</span>
                    </div>
                </div>
                </div>
                <div className="navbar-box-links">
                    <Link href="/">
                        <a className="navbar-box-links__elem">{t('navbar.main')}</a>
                    </Link>
                    <Link href="/about">
                        <a className="navbar-box-links__elem">{t('navbar.about')}</a>
                    </Link>
                    <Link href="/team">
                        <a className="navbar-box-links__elem">{t('navbar.team')}</a>
                    </Link>
                    <Link href="/services">
                        <a className="navbar-box-links__elem">{t('navbar.services')}</a>
                    </Link>
                    <Link href="/news">
                        <a className="navbar-box-links__elem">{t('navbar.news')}</a>
                    </Link>
                </div>
                <div className="navbar-box-right">
                    <div className="navbar-box-right-lang">
                        <span onClick={()=>handleChangeTr('ru')}>РУ</span>
                        <span onClick = {()=>handleChangeTr('en')}>EN</span>
                        <span>КР</span>
                        <span>中國人</span>
                    </div>
                </div>
            </div>
        </div>
    );


*/
