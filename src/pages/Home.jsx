import { useEffect, useState } from 'react'
import ItemListContainerComponents from '../components/ItemListContainer/ItemListContainerComponents'
import  {getProducts}  from '../services';

const Home = () => {

const [productData, setProductData]= useState([]);
    useEffect(()=>{
        getProducts()
        .then(res=>{
            setProductData(res.data)
        })
        .catch(rej=>{console.log(rej)})
    }, [])

    return (
    <ItemListContainerComponents productData={productData} />
    )
}

export default Home