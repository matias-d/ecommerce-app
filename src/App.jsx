import { Route, Routes } from "react-router-dom"
import { Auth } from "./pages/Auth"
import { Home } from "./pages/Home"
import { MenuAdmin } from "./pages/Admin/Home"
import { ProductDetail } from "./pages/ProductDetail"
import { AddProduct } from "./pages/Admin/AddProductPage"
import { AllProducts } from "./pages/AllProducts"
import { Error404 } from "./pages/Error404"


function App() {

  return (
    <div className=" h-screen scrollbar-thin scrollbar-thumb-base-ligth scrollbar-track-base-ligth/50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/auth/login' element={<Auth/>}/>
        <Route path='/menu' element={<MenuAdmin/>}/>
        <Route path='/menu/agregar-producto' element={<AddProduct/>}/>
        <Route path='/menu/editar-producto/:id' element={<AddProduct/>}/>
        <Route path='/category/:categoryName' element={<AllProducts />}/>
        <Route path='/moda/search/:productSearch' element={<MenuAdmin />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
