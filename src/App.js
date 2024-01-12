//import logo from './logo.svg';
//import './App.css';
//import YourComponent from './YourComponent';
import Login from './components/login  page/Login';
import Registration from './components/registration/Registration';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
