import './NavBarComponents.css'
import './CartWidgetComponents'
import CartWidgetComponents from './CartWidgetComponents'
import CountComponents from '../CountComponents/CountComponents'
import BurgerBtnComponents from './BurgerBtnComponents'
import { useState, useContext } from 'react'
import { TestContext } from '../../context/TestContext'
import { Link } from 'react-router-dom'
import FincasCategories from '../../pages/fincasCategories'

const NavBarComponents= ()=> {

  const [displayBar, setDisplayBar] = useState(true);
  
  const {count} = useContext(TestContext);
  
  function handleDisplayBar(){
    setDisplayBar(!displayBar)
  }

    return (
      <>
        <nav className='navBar'>
          <Link to='/'><h1>Wine for luxury</h1></Link>
          <div className={`${displayBar?`navBarUl`:`navBarUlDisplay`}`}id='navBarUl'>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              <Link to="/Home">Home</Link>
            </div>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              <CartWidgetComponents/>
            </div>
            <div className={`${displayBar?`navBarUlList`:`navBarUlListDisplay`}`}>
              
                <FincasCategories />
              
            </div>
            </div>
            <section className='burgerBtn' id='burgerBtn'>
              <Link><BurgerBtnComponents displayBar = {displayBar} handleDisplayBar={handleDisplayBar}/></Link>
            </section>
        </nav>
      </>
    )
}

export default NavBarComponents