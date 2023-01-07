import './App.css'
import { Header } from './components/layout/Header'
import { ProductsList } from './components/products/ProductsList'
import { ProductProvider } from './context/products/ProductState'

function App() {
  
  return (
    <ProductProvider>
      <div className="App">
        <Header/>
        <ProductsList />        
      </div>
    </ProductProvider>
  )
}

export default App
