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
     <a href="https://github.com/Yunis-wanji/react-weather-app" target="_blank" rel='noreferrer'>{" "} open-source code</a> {" "} on Github
    coded by Eunice Kimani and hosted on Netlify
     </p>
     </footer>
    
    </div>
  );
}

export default App;
