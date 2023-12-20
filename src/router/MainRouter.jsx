import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "../pages/Home"
import NavBarComponents from "../components/NavBarComponents/NavBarComponents"
import ItemDetailsContainer from "../pages/ItemDetailsContainer"
import Categories from "../pages/Categories"

const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponents/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/item/:id' element={<ItemDetailsContainer/>} />
            <Route path='/category/:id' element={<Categories/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter