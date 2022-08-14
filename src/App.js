import './App.css';
import {useState} from 'react'
import Slider from './component/Slider';

const data = [
  {
    id: 1,
    question:"What is Your Name?",
    answer:"My name is Harsha"
  },
  {
    id: 2,
    question:"What is age?",
    answer:"I am 10vyears"
  },
  {
    id: 3,
    question:"Where you are from?",
    answer:"I am from Malappuram"
  }
]
function App() {
   const [pages,setPages] = useState(0)

   const next=()=>{
    setPages(pages+1);
   }
   const prev=()=>{
    setPages(pages-1)
   }
  return (
    <div className="App">
      <h1>Page {pages}</h1>
      <Slider data={data[pages]}>Data</Slider>
      <button onClick={prev} data-testid="prev">Prev</button>
      <button onClick={next} data-testid="next">Next</button>
    </div>
  );
}

export default App;
