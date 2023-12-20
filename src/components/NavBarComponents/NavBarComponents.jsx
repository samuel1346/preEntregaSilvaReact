import './NavBarComponents.css'
import './CartWidgetComponents'
import CartWidgetComponents from './CartWidgetComponents'
import CountComponents from '../CountComponents/CountComponents'
import BurgerBtnComponents from './BurgerBtnComponents'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FincasCategories from '../../pages/fincasCategories'

const NavBarComponents= ()=> {

  const [displayBar, setDisplayBar] = useState(true)
  console.log(displayBar)
  function handleDisplayBar(){
    setDisplayBar(!displayBar)
  }
  const [displayCategories, setDisplayCategories] = useState(true)
  console.log(displayCategories)
  function handleDisplayCategories(){
    setDisplayCategories(!displayCategories)
  }

    return (
      <>
        <nav className='navBar'>
          <h1><a href="#">Cup coffy roasters</a></h1>
          <div className={`${displayBar?`navBarUl`:`navBarUlDisplay`}`}id='navBarUl'>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              <Link to="/">Home</Link>
            </div>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              <a href="/BaristaTools">barista tools</a>
            </div>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              <CartWidgetComponents/><CountComponents/>
            </div>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              <div>
                <FincasCategories displayCategories = {displayCategories} handleDisplayCategories={handleDisplayCategories}/>
              </div>
            </div>
            </div>
            <section className='burgerBtn' id='burgerBtn'>
              <a href="#"><BurgerBtnComponents displayBar = {displayBar} handleDisplayBar={handleDisplayBar}/></a>
            </section>
        </nav>
      </>
    )
}

export default NavBarComponents