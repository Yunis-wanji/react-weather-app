import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather defaultCity="Nairobi"/>
      </div>
      <footer className='m-4'>
      <p>
        This Project
     <a href="https://reliable-jalebi-7602ca.netlify.app/" target="_blank" rel='noreferrer'>{""}open-source code</a> {" "}
    coded by Eunice Kimani
     </p>
     </footer>
    
    </div>
  );
}

export default App;
