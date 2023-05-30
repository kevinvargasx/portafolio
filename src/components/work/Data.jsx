import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
export const projectsData = [

    {
      id: 1,
      image: Work1,
      title: "Sitio web de aventuras y tours ",
      category: "demo",
      url:"https://deadkevinx.github.io/travel/",
      description: 
      (
        <div>
          
          <p>
          Mi sitio web demo de aventuras y tours es una muestra interactiva de una plataforma virtual que ofrece una amplia variedad de destinos y experiencias emocionantes.
          </p> <br />
          <p>
          Esta diseñado con HTML, CSS, SCSS y JavaScript, este demo presenta una interfaz intuitiva y atractiva, brindando a los usuarios la oportunidad de explorar y reservar aventuras simuladas, desde excursiones en la naturaleza hasta actividades extremas.
          </p><br />
          <p>
          Es una demostración de cómo podría lucir y funcionar un sitio web real para viajes y tours de aventura
          </p>
        </div>
      ),
      
    },
    {
      id: 2,
      image: Work2,
      title: "Sistema de recomendación",
      category: "prototype",
      url:"http://srturistico.42web.io/sistemarecomendacion/",
      description:(
        <div>
            <p>
            El proyecto es un prototipo de sistema de recomendación de atractivos turísticos.
            </p><br />
            <p>
            El objetivo principal es proporcionar a los usuarios recomendaciones personalizadas de lugares turísticos basadas en sus preferencias y características individuales.
            </p><br />
            <p>El módulo de recomendación se ha implementado utilizando el algoritmo k-Nearest Neighbors (k-NN). Este algoritmo utiliza la fórmula de la distancia euclidiana para calcular la similitud entre los perfiles de los usuarios y los perfiles de los atractivos turísticos.
            </p><br />
            <p>
            La tecnología utilizada en la implementación de la aplicación web incluye PHP para la lógica del servidor, MySQL como base de datos para almacenar la información de los usuarios y atractivos turísticos, HTML para la estructura y presentación de la página web, y Bootstrap como framework de diseño para asegurar una interfaz atractiva y responsiva.
            </p>
        </div>
      ),
    },
    {
      id: 3,
      image: Work3,
      title: "Boletines",
      category: "miniproject",
      url:"http://boletin.42web.io/",
      description:(
        <div>
            <p>
            Boletines es un mini proyecto de sitio web moderno y atractivo que presenta una colección destacada de atractivos turísticos en la región amazónas.
            </p><br />
            <p>Fue desarrollado utilizando HTML, CSS y JavaScript. 
            </p><br/>
            <p>
            Este proyecto ofrece una plataforma para compartir boletines informativos de manera fácil y rápida, tiene un diseño responsivo y atractivo,  el sitio se adapta a diferentes dispositivos y tamaños de pantalla.
            </p><br />
            <p>
            Boletines es un ejemplo de la combinación efectiva de tecnologías web para crear una experiencia interactiva y agradable para los usuarios.
            </p><br />
            <p>
            
            </p>
        </div>
      ),
    },
    /*
    {
      id: 4,
      image: Work4,
      title: "App movil",
      category: "app",
      url:"https://deadkevinx.github.io/travel/",
      description: "es una gran app",
    },
    {
      id: 5,
      image: Work5,
      title: "Web design",
      category: "web",
      url:"https://deadkevinx.github.io/travel/",
      description: "es una gran app",
    },*/
  ];

  export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'demo',
    },
    {
        name: 'prototype',
    },
    {
        name: 'miniproject'
    },
  ]