import React from 'react'
import { useState, useContext } from 'react'
import { TestContext } from '../../context/TestContext'

const CountComponents = ({productId}) => {
  const [item, setItem]= useState(1);
  const {setCount} = useContext(TestContext);
  const {count} = useContext(TestContext);
  const handleAdd = ()=>{
    setItem(item+1)
  }
  const handleRemove = ()=>{
    item > 1 ? setItem(item-1): setItem(item);
  }
  const handleCart = ()=>{
    const cartProduct = {
      id: productId.id,
      quantity: item,
      image: productId.image,
      wine: productId.wine,
      winery: productId.winery,
    }
    if(count.length===0){
      setCount([cartProduct])
    }else{
      const newCountMap = count.map((i)=>{
        if(i.id===productId){
          return{
            
            id: i.id,
            quantity: i.quantity+item
          }
        }
        else{
            setCount([...count, cartProduct])
        }
      })
    }

    setItem(1)
    const comparedCount = count.map((e)=>{
      if(e.id=== cartProduct.id){
        const newQuantity = e.quantity+cartProduct.quantity
        return console.log(newQuantity)
      }
    })
  }

  return (
    <div className='CountComponents'>
      <div className='handleAdd btnCart'>
        <button  onClick={handleAdd}>+</button>
          {item}
        <button  onClick={handleRemove}>-</button>
      </div>
      <div className='handleCart btnCart'>
        <button   onClick={handleCart}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default CountComponents