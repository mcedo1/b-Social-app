import './App.css';
import Footer from './components/footer.component/Footer';
import Login from './components/log.reg.component/Login';
import Registration from './components/log_reg.component/Registration';
import MainPage from './components/mainPage.component/MainPage';
import WebSocket from 'websocket';
import { useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import AboutUsCommponent from './components/about.us.component/AboutUs';


function App() {
//   useEffect(() => {
//     // Establish a WebSocket connection
//     const ws = new WebSocket('wss://localhost:8080');

//     // Set up event listeners
//     ws.onopen = () => {
//       console.log('WebSocket connection opened');
//     };

//     ws.onmessage = (event) => {
//       console.log('Received message:', event.data);
//       // Handle the incoming message
//     };

//     ws.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     // Clean up the WebSocket connection when the component is unmounted
//     return () => {
//       ws.close();
//     };
//   }, []);


  return (
    <div className='App'>
      <div className="Main">
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/main" element={<MainPage />} />
          <Route path='aboutUs' element={<AboutUsCommponent/>}/>
        </Routes>
      </div>
      <Footer/>
     </div>
  );
}

export default App;
