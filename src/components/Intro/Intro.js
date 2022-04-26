import './Intro.css';
import { Link } from 'react-router-dom';
import routes from '../../lib/data/routes';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

function Intro() {
  // Establish page title
  useDocumentTitle('Intro');

  return (
    <main className="container">
      <section className="info">
        <h1 className="title">Accessibility Workshop</h1>
        <h2 className="subtitle">Challenges:</h2>
        <ol className="list">
          {routes.map((exercise) => (
            <li className="item" key={exercise.title}>
              <Link to={exercise.path} className="link">
                {exercise.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <img
          className="img"
          alt="Mesa con cuadernos y lapiceros"
          src="https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg"
        />
      </section>
    </main>
  );
}

export default Intro;
