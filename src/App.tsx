import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProductProvider } from './context/products/ProductState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductProvider>
      <div className="App">
     
      </div>
    </ProductProvider>
  )
}

export default App
