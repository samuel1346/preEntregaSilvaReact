import { TestContext } from "../../context/TestContext";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getProductsPrice } from "../../services";
import ItemBuyCartContainer from "./ItemBuyCartContainer";

import { CSSTransition, SwitchTransition } from "react-transition-group";

const ItemCartContainer = () => {
  const { count, setCount, newCountLength, setNewCountLength, ordenDeCompra, setOrdenDeCompra } = useContext(
    TestContext
  );

  const [priceData, setPriceData] = useState([]);
  const [finalizar, setFinalizar] = useState(true)
  const handleFinalizar=()=>{
      if(finalizar){
          setOrdenDeCompra("")
        }
  }

    useEffect(() => {
        getProductsPrice()
        .then((res) => {
            setPriceData(res.data);
        })
        .catch((rej) => {
            console.log(rej);
        });
    }, []);

    const handleEraseFromCart = (id) => {
        const filtered = count.filter((item) => item.id !== id);
        setCount(filtered);
        setNewCountLength(filtered.length);
    };
    const [buyCart, setBuyCart] = useState(false);
    const handleBuyCart = ()=>{
        setBuyCart(!buyCart)
    }
    

    const calculateTotalPrice = () => {
        return count.reduce((total, item) => {
          return total + item.quantity * (priceData.venta * 10);
        }, 0);
    };

    if(ordenDeCompra){
        return(
            <div className="cartVisibility">
                <div>Compra realizada. Numero de orden de compra: {ordenDeCompra}</div>
                <div onClick={handleFinalizar}><Link to={"/Home"}><button>volver al inicio</button></Link></div>
            </div>
        )
    }
    return (
        <div className="container">
        <p className="carritoParraf">Carrito de compras</p>
        <div className="childContainer">
            {count.map((item) => (
                <div key={item.id} className="ItemListContainer">
                <div className="propsCard">
                <p>{item.wine}</p>
                <Link to={`/item/${item.id}`}>
                    <img src={item.image} alt={item.wine} />
                </Link>
                <p>{item.location}</p>
                <p>{item.winery}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: {item.quantity * (priceData.venta * 10)}</p>
                <button onClick={() => handleEraseFromCart(item.id)}>
                    Borrar del carrito
                </button>
                </div>
            </div>
            ))}
        </div>
            <button className="btnCartBuy" onClick={handleBuyCart}>
                Comprar carrito ${calculateTotalPrice()}
            </button>
            <div>
                <ItemBuyCartContainer buyCart={buyCart}
                calculateTotalPrice= {calculateTotalPrice()}/>
            </div>
    </div>
    );
};

export default ItemCartContainer;
