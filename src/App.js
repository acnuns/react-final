import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Chicago" />
      <footer>
        This project was coded by 
        <a href="https://github.com/acnuns/react-final" target="_blank" rel="noreferrer"> Amanda Nunley</a>
      </footer>    
      </div>
    </div>
  );
}

export default App;
