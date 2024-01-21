import React from 'react'
import ItemCartVisibility from './ItemCartVisibility'
import { useContext } from 'react'
import { TestContext } from '../../context/TestContext'

const ItemBuyCartContainer = ({calculateTotalPrice, buyCart}) => {
    const {ordenDeCompra, setOrdenDeCompra } = useContext(
        TestContext
      );
    const handleCartVisibility=()=>{
        
        if(buyCart&&calculateTotalPrice>0){
            return(
                <div>

                    <ItemCartVisibility calculateTotalPrice={calculateTotalPrice}/>

                </div>
            )
        }
    }
    return (
        <div>{
            handleCartVisibility()
        }
        </div>
    )
}

export default ItemBuyCartContainer