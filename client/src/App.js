import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
