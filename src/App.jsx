import './App.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/catalog/:id' element={<ProductPage/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
