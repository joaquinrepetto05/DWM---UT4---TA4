import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>UT4 - TA4</h2>
      <div>
          <Button  onClickHandler={() => setCount(count + 1)}>Incrementar</Button>
          <Button  onClickHandler={() => setCount(count - 1)}>Decrementar</Button>
        <p>Contador: {count}</p>
      </div>
    </>
  )
}

export default App