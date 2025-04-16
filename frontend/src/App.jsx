import { Route, Routes } from 'react-router-dom';
import Home from './pages/UserPages/Home';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
