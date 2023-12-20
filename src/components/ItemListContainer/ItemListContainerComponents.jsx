import './ItemListContainerComponent.css'
import { Link } from 'react-router-dom'

const ItemListContainerComponents = ({productData}) => {
  return (
      <div className='container'>{
        productData.map(i=>{
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

export default ItemListContainerComponents