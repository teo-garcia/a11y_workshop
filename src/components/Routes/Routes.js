import { Route, Routes } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Home from '../Home/Home';
import HomeSolution from '../Home/Home.solution';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/solution/dashboard" element={<HomeSolution />} />
    </Routes>
  );
}

export default Pages;
