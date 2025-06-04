import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function name(){
    const user = prompt(`Masukan Nama Kamu`);
    alert(`Heloo ${user}`)
    return user;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={()=> setCount((count) => count + 1)}>
            count is {count}
        </button> */}


        <button onClick={() => name()}>
            Menyapa User
        </button>

        {/* button Menyapa */}
        {/* <button onClick={() => {
          alert(`Hello ${name}`)
        }}>
          Menyapa User
        </button> */}
        <h1>
          "Hello Wordl"
        </h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
