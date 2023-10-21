import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const decrementar = () => {
    if (count > 0) {
      setCount(count -1);
    }
    
  };

  useEffect(()=> {
    console.log("useEffect")
  }, [count]);


  return (
    <>
      <p>Contador {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  )
};

export default App
