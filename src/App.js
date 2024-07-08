import './App.css';
import Navbar from './components/Navbar';
import Upper from './components/Upper';
import { Route, Routes } from 'react-router-dom';
import All from './components/All';
import Tshirt from './components/Tshirt';
import Joggers from './components/Joggers';
import Shirts from './components/Shirts';
function App() {
  return (
    <div className="App">
      <Upper/>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<All/>}/>
          <Route exact path='/tshirt' element={<Tshirt />}/>
          <Route exact path='/joggers' element={<Joggers/>}/>
          <Route exact path='/shirts' element={<Shirts />}/>
        </Routes>
    </div>
  );
}

export default App;
