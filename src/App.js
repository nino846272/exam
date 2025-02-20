import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exam from './pages/exam';
import About from './pages/About';
import Avals from './pages/avals';
import One from './pages/one';
import TemperatureConverter from './pages/work';
import Unishop from './pages/unishop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Exam/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/avals' element={<Avals/>}/>
          <Route path='/one' element={<One/>}/>
          <Route path='/work' element={<TemperatureConverter/>}/>
          <Route path='/shop' element={<Unishop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
