import React, { useState } from 'react';
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title"> Servicios</h2>
        <span className="section__subtitle">Lo que ofrezco</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Diseñador <br/> de Productos </h3>
                </div>
                <span className="span services__button" onClick={()=>toggleTab(1)}> 
                    Ver más
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Diseñador de productos</h3>
                        <p className="services__modal-description"> Apasionado por el diseño centrado en el usuario y en constante búsqueda de crecimiento. Dispuesto a aportar ideas frescas y colaborar en proyectos para crear experiencias impactantes. </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desarrollo la interfaz de usuario</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desarrollo de páginas webs funcionales y responsivas</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creación interacciones de elementos ux</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño y maquetas de productos</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Diseñador <br/> Ui/Ux </h3>
                </div>
                <span onClick={()=> toggleTab(2)} className="span services__button">Ver más
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title"> Diseñador Ui/Ux</h3>
                        <p className="services__modal-description"> Diseño interfaces digitales intuitivas y atractivas, enfocándome en las necesidades de los usuarios para crear experiencias gratificantes. Mi enfoque se basa en una cuidadosa arquitectura de información, diseño de interacciones y pruebas de usabilidad </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño de interfaces de usuario atractivas y funcionales</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño de prototipos interactivos</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Investigación de usuarios y análisis de datos para mejorar la usabilidad</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño de elementos visuales coherentes, como iconos, botones y tipografía</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">diseñador <br/> Visual</h3>
                </div>
                <span onClick={()=> toggleTab(3)} className="span services__button">Ver más
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Diseñador visual</h3>
                        <p className="services__modal-description">Creo experiencias visuales impactantes que transmiten la identidad de marca de forma cautivadora, a través de diseños atractivos y elementos personalizados</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño de interfaces de usuario (UI) atractivas y intuitivas</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creación de diseños responsivos y adaptables a diferentes dispositivos y tamaños de pantalla</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Diseño de elementos gráficos personalizados, como logotipos, iconos y botones</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Optimización de la experiencia de usuario a través de una arquitectura de información efectiva</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services