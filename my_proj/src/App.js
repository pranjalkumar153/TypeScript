import logo from './logo.svg';
import './App.css';

import Hello from './component/Hello';
import Location from './component/Location'

// button with functionality

function App() {
  return (
      <div className="App">
          <Hello />
          <Location/>
      </div>
  );
}

export default App;
