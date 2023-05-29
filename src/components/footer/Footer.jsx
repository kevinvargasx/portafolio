import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kevin Vargas Salazar</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre Mi</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Proyectos</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/kevin-vargas-salazar-ab79b9227/" className="footer__social-link" target='_blank'>
                <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/deadkevinx/deadkevinx.github.com" className="footer__social-link" target='_blank'>
                <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://wa.me/message/W23YAHHXQLP2J1" className="footer__social-link" target='_blank'>
                <i className="uil uil-whatsapp"></i>
                </a>
            </div>

            <span className="footer__copy">
            &#169; 2023 Created By Ing. Kevin Vargas Salazar | All Rights Reserved!
            </span>

        </div>
    </footer>
  )
}

export default Footer