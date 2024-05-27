import logo from './logo.svg';
import './App.css';
import { MyFristComponents } from './components/MyFristComponents';
import { SecondComponents } from './components/SecondComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hook UseState</h2>
        <MyFristComponents/>
        <hr />
        <SecondComponents/>
      </header>
    </div>
  );
}

export default App;
