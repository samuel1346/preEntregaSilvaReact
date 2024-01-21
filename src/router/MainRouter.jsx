import { BrowserRouter, Routes, Route  } from "react-router-dom"
import NavBarComponents from "../components/NavBarComponents/NavBarComponents"
import { Suspense, lazy, React, useState } from "react"
import ChargeComponents from "../components/CountComponents/ChargeComponents";
const Brief = lazy(()=>import("../pages/Brief"))
const Home = lazy(()=> import("../pages/Home"));
const ItemDetailsContainer = lazy(()=> import("../pages/ItemDetailsContainer"));
const Categories = lazy(()=> import("../pages/Categories"));
const Carrito = lazy(()=> import("../pages/Carrito"));


const MainRouter = () => {
  const [state, setState]= useState(true)
  return (
    <BrowserRouter>
    <NavBarComponents/>
        <Routes>
            <Route path="/" element={<Suspense><Brief/></Suspense>}></Route>
            <Route path='/Home' element={<Suspense><Home/></Suspense>} />
            <Route path='/item/:id' element={<Suspense fallback={<ChargeComponents/>}><ItemDetailsContainer/></Suspense>} />
            <Route path='/category/:id' element={<Suspense fallback={<ChargeComponents/>}><Categories/></Suspense>} />
            <Route path='/carrito' element={<Suspense fallback={<ChargeComponents/>}><Carrito/></Suspense>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter