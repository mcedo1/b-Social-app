import './App.css';
import Footer from './components/footer.component/Footer';
import Login from './components/log_reg.component/Login';
import Registration from './components/log_reg.component/Registration';
import MainPage from './components/main.pagecomponent/MainPage';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <div className="Main">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </div>
      <Footer/>
     </div>
  );
}

export default App;
