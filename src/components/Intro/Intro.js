import { Link } from 'react-router-dom';
import styles from './Intro.module.css';
import modules from '../../lib/modules';

function Intro() {
  return (
    <main className={styles.container}>
      <section className={styles.info}>
        <h1 className={styles.title}>A11y Workshop</h1>
        <h2 className={styles.subtitle}>Ejercicios disponibles:</h2>
        <ol className={styles.outerList}>
          {modules.map((module) => (
            <li className={styles.outerItem} key={module.topic}>
              <h3>{module.topic}</h3>
              <ol className={styles.innerList}>
                {module.exercises.map((exercise) => (
                  <li
                    className={styles.innerItem}
                    key={exercise.title}
                  >
                    <Link to={exercise.path} className={styles.link}>
                      {exercise.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <img
          className={styles.img}
          alt="Mesa con cuadernos y lapiceros"
          src="https://images.pexels.com/photos/5905443/pexels-photo-5905443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </section>
    </main>
  );
}

export default Intro;
