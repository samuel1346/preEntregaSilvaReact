import './ItemListContainerComponent.css'

const ItemListContainerComponents = ({greeting}) => {
    console.log({greeting})
  return (
    <div className="ItemListContainer">{greeting}</div>
  )
}

export default ItemListContainerComponents