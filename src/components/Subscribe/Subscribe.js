import './Subscribe.css';
import { useId } from 'react';

function Subscribe() {
  const id = useId();
  const firstNameId = `${id}-firstName`;
  const lastNameId = `${id}-lastName`;
  const frameworkId = `${id}-framework`;

  return (
    <main className="main-wrapper">
      <article className="subscribe-info">
        <p className="subscribe-title">
          Recibe las ultimas ofertas en tu correo electronico
        </p>
        <p className="subscribe-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Sit quae rem commodi accusantium eligendi aut, error a
          excepturi, corporis, suscipit delectus.
        </p>
      </article>
      <form className="form">
        <fieldset className="fieldset-text">
          <label className="label-text" htmlFor={firstNameId}>
            First name:
          </label>
          <input
            className="input-text"
            id={firstNameId}
            name="firstName"
          />
        </fieldset>
        <fieldset className="fieldset-text">
          <label className="label-text" htmlFor={lastNameId}>
            Last name:
          </label>
          <input
            className="input-text"
            id={lastNameId}
            name="lastName"
          />
        </fieldset>
        <fieldset className="fieldset-checkbox">
          <legend className="legend-checkbox">
            Select your skils:
          </legend>
          <input id={frameworkId} type="checkbox" />
          <label className="label-checkbox" htmlFor={frameworkId}>
            Vanilla
          </label>

          <input id={frameworkId} type="checkbox" />
          <label className="label-checkbox" htmlFor={frameworkId}>
            React
          </label>

          <input id={frameworkId} type="checkbox" />
          <label className="label-checkbox" htmlFor={frameworkId}>
            Vue
          </label>

          <input id={frameworkId} type="checkbox" />
          <label className="label-checkbox" htmlFor={frameworkId}>
            Svelte
          </label>
        </fieldset>
        <button className="form-button" type="submit">
          Submit
        </button>
        <button className="form-button" type="reset">
          Reset
        </button>
      </form>
    </main>
  );
}

export default Subscribe;
