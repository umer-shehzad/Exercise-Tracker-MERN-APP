import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Profile from './components/home/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/RegisterForm';
import Header from './components/home/Header';
import PrivateCom from './components/PrivateCom';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route element={ <PrivateCom /> }>
            <Route path="/Profile" element={ <Profile /> } />
            <Route path="/Logout" element={ <h2>LogOut Functionality</h2> } />
            </Route>
            <Route path='/' element={ <Home /> } />
            <Route path="/SignUp" element={ <RegisterForm /> } />
            <Route path="/Login" element={ <LoginForm /> } />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
