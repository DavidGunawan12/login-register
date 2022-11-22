import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="Register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
