
import './App.css';
import Left from './left';
import Middle from './middle';
//import Right from './right';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='l'><Left/></div>
        <div className='m'><Middle/></div>
      </div>
    </div>
  );
}

export default App;
