import "./App.css";
import {useState,useEffect} from 'react';

function App() {
  const [can, setCan] = useState(0)
  const [oguz, setOguz] = useState(0)
  useEffect(()=>{
    console.log('İlk kez render edildiğinde çalışır daha da çalışmaz')
   },[])

   useEffect(()=>{
    console.log('Her zaman Çalısır')
   })


   useEffect(()=>{
    console.log('İlk kez render edildiğinde çalışır + can değerinde bir değişiklik oldugunda')
   },[can])

   useEffect(()=>{
    console.log('İlk kez render edildiğinde çalışır + oguz değerinde bir değişiklik oldugunda')
   },[oguz])

   useEffect(()=>{
    console.log('İlk kez render edildiğinde çalışır + can veya oguz değerinde bir değişiklik oldugunda')
   },[can,oguz])
 
  return <div className="App">
    <div className="first-div">
      <button onClick={()=>setCan(can + 1)}> Can ++</button>
      <div>Can: {can}</div>
    </div>
    <div>
      <button onClick={()=>setOguz(oguz + 1)}> Oguz ++</button>
      <div>Oguz: {oguz}</div>
    </div>
  </div>;
}

export default App;
