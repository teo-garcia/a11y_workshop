import { Route, Routes } from 'react-router-dom';
import Intro from '../Intro/Intro';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}

export default Pages;
