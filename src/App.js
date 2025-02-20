import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exam from './pages/exam';
import About from './pages/About';
import Avals from './pages/avals';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Exam/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/avals' element={<Avals/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
