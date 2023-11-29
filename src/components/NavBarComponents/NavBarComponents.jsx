import './NavBarComponents.css'
import './CartWidgetComponents'
import CartWidgetComponents from './CartWidgetComponents'
import CountComponents from '../CountComponents/CountComponents'

const NavBarComponents= ()=> {
    return (
      <>
        <nav className='navBar'>
          <a href="#"><h1>Cup coffy roasters</h1></a>
          <ul className='navBarUl'>
            <li>
              <a href="#">cafes</a>
            </li>
            <li>
              <a href="#">barista tools</a>
            </li>
            <li>
              <CartWidgetComponents/><CountComponents/>
            </li>
            <section className='burgerBtn'>
              <a href="#">=</a>
            </section>
          </ul>
        </nav>
      </>
    )
}

export default NavBarComponents