import './App.css';
import CounterGroup from './Component/CounterGroup';
import MultiCounter from './Component/MultiCounter';
function App() {
  const size = 10;
  return (
    <div className="App">
      <header className="App-header">
        <MultiCounter />
      </header>
    </div>
  );
}

export default App;
