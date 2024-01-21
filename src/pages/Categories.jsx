
import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import {collection, getDocs,doc, getDoc, getFirestore, query, where} from "firebase/firestore"

const Categories = () => {
    const [category, setCategory]= useState([])
    const {id}= useParams();
    const [filteredCategory, setFilteredCategory] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const productCollection = collection(db, "products");
      const q = query(productCollection, where("winery", "==", id));
  
      getDocs(q).then((snapshot) => {
        setFilteredCategory(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }, [id]); 
  return (
    <div className='childContainer'>{
      filteredCategory.map(i=>{
        return (
          
            <div key={i.id} className="ItemListContainer">
              <div className='propsCard'>
                <p>{i.wine}</p>
                <Link to={`/item/${i.id}`}><img src={i.image}  alt={i.descripcion} /></Link>
                <p>{i.location} </p>
                <p>{i.winery} </p>
              </div>
            </div>
          
        )
      })
      } 
    </div>
  )
}

export default Categories