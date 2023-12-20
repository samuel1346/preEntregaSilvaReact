import React, { useState, useEffect } from 'react'
import { getProductId } from '../services';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = () => {
    
  const [productId, setProductId] = useState({});
  const {id} = useParams();
        
    useEffect(()=>{
        getProductId(id)
        .then(res=>{
            console.log(res)
            setProductId(res.data)
        })
        .catch(rej=>{console.log(rej)})
    }, [id])
    
  return (
    <div key={productId.id} className="ItemListContainer">
      <div className='propsCard'>
        <p>{productId.wine}</p>
        <img src={productId.image}  alt={productId.wine} />
        <p>{productId.location} </p>
        <p>{productId.winery} </p>
      </div>
    </div>
  )
    }


export default ItemDetailsContainer