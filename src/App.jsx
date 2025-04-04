import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bg from './assets/first.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="fullscreen-bg">
      <div className='quote'>The more faithfully you listen to the voice within you, the better you hear what is sounding outside of you.
        - Dag Hammarskjold
        </div>
    </div>
  );
    </>
  )
}

export default App
