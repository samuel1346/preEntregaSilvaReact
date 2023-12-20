import { getProductCategory } from "../services"
import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const Categories = () => {
    const [category, setCategory]= useState([])
    const {id}= useParams();

    useEffect(()=>{
        getProductCategory(id)
        .then(res=>{
            console.log(res)
            setCategory(res.data)
        })
        .catch(rej=>{console.log(rej)})
    }, [id])
  return (
    <div className='container'>{
      category.map(i=>{
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