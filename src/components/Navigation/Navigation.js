import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="navigation-title">
        Frontend Jobs
      </Link>
      <div className="navigation-links">
        <Link to="/about" className="navigation-link">
          Lorem
        </Link>
        <Link to="/about" className="navigation-link">
          Iipsum
        </Link>
        <Link to="/about" className="navigation-link">
          Lorem
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
