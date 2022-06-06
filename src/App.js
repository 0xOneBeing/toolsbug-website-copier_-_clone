import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Main />
      </div>
    </div>
  );
}

export default App;
