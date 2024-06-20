import React, { useState } from 'react';

import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Formación Académica</h2>
        <span className="section__subtitle">Mi Trayectoria Personal</span>

        <div className="qualification__container container">
            <div className="qualification__taps">
                <div className={toggleState ===1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Educación
                </div>

                <div className={toggleState ===2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experiencia
                </div>

                <div className={toggleState ===3 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={()=>toggleTab(3)}>

                    <i className="uil uil-award qualification__icon"></i>Certificados
                
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Ingenieria de Sistemas</h3>
                            <span className="qualification__subtitle">Universidad - Católica Sedes Sapientiae</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2023
                            </div>
                        </div>

                        <div>
                            
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div></div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Desarrollo web autodidacta </h3>
                            <span className="qualification__subtitle">cursos en línea, tutoriales y proyectos prácticos</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Presente
                            </div>
                    </div>

                        
                    </div>

                </div>

                <div className={toggleState === 2 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Operador de Sistemas </h3>
                            <span className="qualification__subtitle">CANVIA </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - Presente
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Desarrollo Web </h3>
                            <span className="qualification__subtitle">Independiente</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - Presente
                            </div>
                        </div>                        
                    </div>    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Analista de Soporte y Datos</h3>
                            <span className="qualification__subtitle">Consultores integrales Nova S.A.C </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Diciembre 2022 - Marzo 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    

                </div>

                <div className={toggleState === 3 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"}>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachiller</h3>
                            <span className="qualification__subtitle">Ingeniería de Sistemas</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Marzo 2023  
                            </div>
                            <a href="https://portal.ucss.edu.pe/gt/doc-request.aspx?p1=blDR2XtsJeeWBb8ttwWovA==" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div> 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Principiante en Programación G6 – ONE</h3>
                            <span className="qualification__subtitle">Alura Latam – One Oracle</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Marzo 2024
                            </div>
                            
                            <a href="https://app.aluracursos.com/user/kvargasdev/fullCertificate/706fd05bbeefbfb1730d00292134d7c0" className="qualification__ver" target="-blank">
                                ver
                            </a>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Lógica de programación con JavaScript</h3>
                            <span className="qualification__subtitle">Alura Latam – One Oracle</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Marzo 2023  
                            </div>
                            <a href="https://app.aluracursos.com/user/kvargasdev/fullCertificate/706fd05bbeefbfb1730d00292134d7c0" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div> 

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Desarrollo Personal G6 – ONE</h3>
                            <span className="qualification__subtitle">Alura Latam – One Oracle</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Marzo 2024
                            </div>
                            
                            <a href="https://app.aluracursos.com/user/kvargasdev/fullCertificate/706fd05bbeefbfb1730d00292134d7c0" className="qualification__ver" target="-blank">
                                ver
                            </a>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Introdución a las Habilidades en Análisis de Datos</h3>
                            <span className="qualification__subtitle">Linkedin Learning</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Junio 2023  
                            </div>
                            <a href="https://www.linkedin.com/learning/certificates/1e679602f928e566675a6c5ee35779a1e0bed9ad7f969e76d57cd9b39511ee0e" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div>    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Curso de noSQL con MongoDB</h3>
                            <span className="qualification__subtitle">CódigoFacilito</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Junio 2023 
                            </div>
                            
                            <a href="https://codigofacilito.com/certificates/82844" className="qualification__ver" target="-blank">
                                ver
                            </a>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Curso a fondo de GitHub </h3>
                            <span className="qualification__subtitle">CódigoFacilito</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Mayo 2023  
                            </div>
                            <a href="https://codigofacilito.com/certificates/80352" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Taller crear tu primera app con React</h3>
                            <span className="qualification__subtitle">CódigoFacilito</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Abril 2023 
                            </div>
                            
                            <a href="https://codigofacilito.com/certificates/73728" className="qualification__ver" target="-blank">
                                ver
                            </a>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Curso profesional de React </h3>
                            <span className="qualification__subtitle">CódigoFacilito</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Abril 2023  
                            </div>
                            <a href="https://codigofacilito.com/certificates/74545" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div>

                    <div className="qualification__data">                        
                        <div>
                            <h3 className="qualification__title">Curso profesional desarrollo web </h3>
                            <span className="qualification__subtitle">CódigoFacilito</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Abril 2023 
                            </div>
                            <a href="https://codigofacilito.com/certificates/72758" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Python 3: Curso completo de cero a experto</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Abril 2023 
                            </div>
                            <a href="http://ude.my/UC-614df036-bd3d-4df4-856c-73c86f119ad6" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div>

                    <div className="qualification__data">
                        
                        <div>
                            <h3 className="qualification__title">Curso profesional de python</h3>
                            <span className="qualification__subtitle">CódigoFacilito</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Marzo 2023
                            </div>
                            <a href="https://codigofacilito.com/certificates/68987" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>                        
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">SQL: Desarrollo y géstion de base de datos</h3>
                            <span className="qualification__subtitle">Cheana</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Marzo 2023 
                            </div>
                            <a href="https://s3.amazonaws.com/public-lessons.crehana.com/images/certificate/participation-pdf/f3936e8a/f1247fea.pdf?source_page=User%20Dashboard&source_detail=Diploma%20Card" className="qualification__ver" target="-blank">
                                ver
                            </a>
                        </div>                        
                    </div>

                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Qualification