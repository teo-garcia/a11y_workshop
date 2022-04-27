import './JobsBoard.css';
import { Link } from 'react-router-dom';

function JobsBoard() {
  return (
    //🔴 1. Establece el contenido principal de la pagina usando la region main
    <div className="jobs-board">
      <div className="jobs-message">
        {/* 🔴 2. Utiliza etiquetas de titulo, respetando la jerarquia */}
        <p className="jobs-title">
          La mejor forma de encontrar tu siguiente empleo como Web
          Developer
        </p>
        <p className="jobs-description">
          Con Frontend Jobs puedes encontrar las mejores ofertas de
          empleo, comparar los salarios en el mercado y además,
          suscribirte para recibir las ofertas en tiempo real. No te
          {/* 🔴 3. Usa enlaces que sean claros, (aqui ❌, suscribete aquí ✅) */}
          lo pierdas suscribete <Link to="/subscribe">aquí</Link>{' '}
        </p>
      </div>
      <div className="jobs-offers">
        <p className="jobs-subtitle">Lorem ipsum dolor sit</p>
        <div className="jobs-list">
          {Array.from(Array(9).keys()).map((blog) => (
            /* 🔴 4. Usa la etiqueta de item de lista para ser contado por el narrador de voz */
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
    </div>
  );
}

export default JobsBoard;
