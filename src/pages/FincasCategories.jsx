import CategorysComponents from "../components/NavBarComponents/CategorysComponents";
import { useEffect, useState } from 'react'
import { getProductsCategorys } from "../services";

const FincasCategories = ({handleDisplayCategories}) => {
    const [categoryDisplay, setCategoryDisplay]= useState([])

    useEffect(()=>{
        getProductsCategorys()
        .then(res=> setCategoryDisplay(res.data))
        .catch(err=> console.log(err))
    },[])
    return(
        <div onClick={handleDisplayCategories}>
        <CategorysComponents categoryDisplay={categoryDisplay}/>
        </div>
        
    )
  
}

export default FincasCategories