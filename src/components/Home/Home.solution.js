import { Link } from 'react-router-dom';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';
import './Home.css';
import HomePic from './Home.png';

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
    <nav className="navigation">
      <h1 className="navigation-title centered">Frontend Jobs</h1>
    </nav>
  );
}

function Footer() {
  return <footer className="footer" />;
}

function JobsBoard() {
  return (
    <main className="jobs-board centered">
      <section className="jobs-section">
        <article className="jobs-message">
          <p className="jobs-title">
            La mejor forma de encontrar tu siguiente empleo como Web
            Developer
          </p>
          <p className="jobs-description">
            Con Frontend Jobs puedes encontrar las mejores ofertas de
            empleo, comparar los salarios en el mercado y además,
            suscribirte para recibir las ofertas en tiempo real. No te
            lo pierdas <Link to="/subscribe">suscribete aquí</Link>
          </p>
        </article>
        <ul className="jobs-list">
          {Array.from(Array(8).keys()).map((blog) => (
            <li key={blog}>
              <Link to="/detail/1" className="jobs-item">
                <p className="jobs-item-title">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="jobs-item-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="background-container">
        <img
          src={HomePic}
          className="picture"
          alt="Mujer revisando curriculum vitaes"
        />
      </section>
    </main>
  );
}

export default Home;
