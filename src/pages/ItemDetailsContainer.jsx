import React, { useState, useEffect } from 'react'
import { getProductId } from '../services';
import { useParams } from 'react-router-dom';
import CountComponents from '../components/CountComponents/CountComponents';
import {collection, getDocs,doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailsContainer = () => {
    
  const {id} = useParams();
  const [productId, setProductId] = useState([])
    useEffect(()=>{
      const db= getFirestore()
      const docRef= doc(db,"products", id)
      getDoc(docRef).then((doc)=>{
        console.log(doc)
        setProductId({id:doc.id, ...doc.data()})
      })
    },[id])
  
  
  
  return (
    <div key={productId.id} className="ItemListContainer">
      <div className='propsCard'>
        <p>{productId.wine}</p>
        <img src={productId.image}  alt={productId.wine} />
        <p>{productId.location} </p>
        <p>{productId.winery} </p>
        <div><CountComponents productId={productId} /></div>
      </div>
    </div>
  )
}


export default ItemDetailsContainer