import { useEffect, useState, Suspense, lazy } from 'react'
import  {getProducts}  from '../services';
import ChargeComponents from '../components/CountComponents/ChargeComponents';
import ItemListContainerComponents from '../components/ItemListContainer/ItemListContainerComponents';
import {collection, getDocs, getFirestore} from "firebase/firestore"

const Home = () => {

const [productData, setProductData]= useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            const db= getFirestore();
            const productColections= collection(db,"products");
            getDocs(productColections).then((snapshot)=>{
                setProductData(snapshot.docs.map(doc=>({id:doc.id, ...doc.data()})))
            })
        },2000)
    }, [])

    return (
        <div>
            {
               productData.length<=0?
               <ChargeComponents/>: 
               <ItemListContainerComponents productData={productData} />
            }
        </div>
    )
}

export default Home