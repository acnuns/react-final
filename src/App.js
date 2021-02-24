import logo from './logo.svg';
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by 
        <a href="https://github.com/acnuns/react-final" target="_blank"> Amanda Nunley</a>
      </footer>    
      </div>
    </div>
  );
}

export default App;
