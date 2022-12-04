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
        <Route path="/ecommerce-app" element={<Home />}/>
        <Route path='/ecommerce-app/product/:id' element={<ProductDetail/>}/>
        <Route path='/ecommerce-app/auth/login' element={<Auth/>}/>
        <Route path='/ecommerce-app/menu' element={<MenuAdmin/>}/>
        <Route path='/ecommerce-app/menu/agregar-producto' element={<AddProduct/>}/>
        <Route path='/ecommerce-app/menu/editar-producto/:id' element={<AddProduct/>}/>
        <Route path='/ecommerce-app/category/:categoryName' element={<AllProducts />}/>
        <Route path='/ecommerce-app/moda/search/:productSearch' element={<MenuAdmin />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
