import logo from './logo.svg';
import './App.css';
import GreatingText from './components/firstComponetPops';
import GreatingTextChild from './components/secondComponentsChild';
import CountingState from './components/countingComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreatingText userName="User" />
        <GreatingTextChild>UserTwo</GreatingTextChild>
        <CountingState />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
