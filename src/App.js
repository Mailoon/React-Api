import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/public/Navbar';
import Footer from './components/public/Footer'; 
import Main  from './components/public/Main';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/details/:id" element={<Detail/>} />
        <Route path="/user-form" element={<UserForm/>} />
      </Routes>
      <Footer />
    </div>
  );
}