import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Home from './Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import WrongAddres from './components/WrongAddress/WrongAddress';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<WrongAddres />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
