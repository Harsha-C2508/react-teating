import './App.css';
import { useState } from 'react';
import Button1 from './component/Button1';
import Button2 from './component/Button2';

function App() {
  const [count,setCount] = useState(0)

  const handleInc=()=>{
    setCount(count+5);
  }

  const handleDec=()=>{
    setCount(count-5);
  }
  return (
    <div className="App">
      <h2>The Count is {count}</h2>
      <Button1 inc={handleInc}>Add</Button1>
      <Button2 dec={handleDec}>Reduce</Button2>
    </div>
  );
}

export default App;
