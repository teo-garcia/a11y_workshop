import './Home.css';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';
import Navigation from '../Navigation/Navigation';
import JobsBoard from '../JobsBoard/JobsBoard';
import Subscribe from '../Subscribe/Subscribe';

function Home() {
  useDocumentTitle('Home');
  return (
    <>
      <Navigation />
      <JobsBoard />
      <Subscribe />
    </>
  );
}

export default Home;
