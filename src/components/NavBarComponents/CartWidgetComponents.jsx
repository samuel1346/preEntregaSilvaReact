import { useContext } from "react";
import { TestContext } from "../../context/TestContext";
import { Link } from "react-router-dom";



const CartWidgetComponents = () => {
  const{count, newCountLength} = useContext(TestContext);
  return (
    <Link to={`/carrito`} >🛒{newCountLength||count.length}</Link>
  )
}

export default CartWidgetComponents