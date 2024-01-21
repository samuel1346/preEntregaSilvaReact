import CategorysComponents from "../components/NavBarComponents/CategorysComponents";
import { useEffect, useState} from 'react'
import { getProductsCategorys } from "../services";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const FincasCategories = () => {
    const [categoryDisplay, setCategoryDisplay]= useState([])

    const [displayCategories, setDisplayCategories] = useState(true)
    
    function handleDisplayCategories(){
        setDisplayCategories(!displayCategories)
    }
    useEffect(()=>{
        const db= getFirestore();
        const productColections= collection(db,"products" );
        getDocs(productColections).then((snapshot)=>{
            setCategoryDisplay(snapshot.docs.map(doc=>({id:doc.id, ...doc.data()})))
        })
    },[])
    return(
        
            <CategorysComponents 
            categoryDisplay={categoryDisplay}
            displayCategories = {displayCategories} 
            handleDisplayCategories={handleDisplayCategories}/>
        
        
    )
  
}

export default FincasCategories