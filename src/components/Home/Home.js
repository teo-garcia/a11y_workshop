import './Home.css';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';
import HomePic from './Home.png';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/alt-text */
function Home() {
  useDocumentTitle('Home');
  return (
    <>
      <Navigation />
      <JobsBoard />
      <Footer />
    </>
  );
}

function Navigation() {
  return (
    /* 🔴 1. Usa a tu favor regiones predefinidas por HTML5 */
    <div className="navigation">
      {/* 🔴 2. Define los encabezados usando etiquetas de titulo */}
      <p className="navigation-title centered">Frontend Jobs</p>
    </div>
  );
}

function Footer() {
  /* 🔴 3. Usa a tu favor regiones predefinidas por HTML5 */
  return <div className="footer" />;
}

function JobsBoard() {
  return (
    /* 🔴 4. Establece el contenido principal de la pagina usando la region main */
    <div className="jobs-board centered">
      {/* 🔴 5.1 Utiliza contenedores semanticos como section  */}
      <div className="jobs-section">
        {/* 5.2 y article para darle estructura a la pagina */}
        <div className="jobs-message">
          {/* 🔴 6. Utiliza etiquetas de titulo, respetando la jerarquia */}
          <p className="jobs-title">
            La mejor forma de encontrar tu siguiente empleo como Web
            Developer
          </p>
          <p className="jobs-description">
            Con Frontend Jobs puedes encontrar las mejores ofertas de
            empleo, comparar los salarios en el mercado y además,
            suscribirte para recibir las ofertas en tiempo real. No te
            {/* 🔴 7. Usa enlaces que sean claros, (aqui ❌, suscribete aquí ✅) */}
            lo pierdas suscribete <Link to="/subscribe">aquí</Link>{' '}
          </p>
        </div>
        {/* 🔴 8. Usa la etiqueta de lista para relacionar multiples elementos en comun */}
        <div className="jobs-list">
          {Array.from(Array(8).keys()).map((blog) => (
            /* 🔴 9. Usa la etiqueta de item de lista para ser contado por el narrador de voz */
            <div key={blog}>
              <Link to="/detail/1" className="jobs-item">
                <p className="jobs-item-title">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="jobs-item-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* 🔴 10. Utiliza contenedores semanticos como section */}
      <div className="background-section">
        {/* 🔴 11. Proporciona siempre textos alternativos para las imagenes */}
        <img src={HomePic} className="picture" />
      </div>
    </div>
  );
}

export default Home;
