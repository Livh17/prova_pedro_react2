import { useState } from 'react'
import './Multiplicar.scss'

function App() {
  const [resultado, setResultado] = useState(0)
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()




  function Somar(){
    let total = Number(num1) + Number(num2)

    setResultado(total)
  }
  

  return (
    <>
    <div className='caixa-mae'>
        
      <h1>Calcule a soma dos numeros</h1>

      <div className="card">

        <input value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input value={num2} onChange={(e) => setNum2(e.target.value)} />

        <button onClick={Somar}>
          Somar
        </button>

        <h2>{resultado}</h2>

      </div>


    </div>
    </>
  )
}

export default App
