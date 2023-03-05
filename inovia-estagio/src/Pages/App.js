//import logo from './logo.svg';
import './Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/index'
import Data from './Data/index';
import Cadastro from './Cadastro/index'
import Search from './Search';
import Table from './Table';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>

          <Route exact path="/data" element={<Data />} > </Route>

          <Route exact path="/cadastro" element={<Cadastro />} > </Route>

          <Route exact path="/search" element={<Search />} > </Route>

          <Route exact path="/tabela" element={<Table />} > </Route>
        </Routes>
      </Router>
  );
}

export default App;
