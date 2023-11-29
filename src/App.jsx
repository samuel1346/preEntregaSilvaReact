import './App.css'
import './components/NavBarComponents/NavBarComponents'
import NavBarComponents from './components/NavBarComponents/NavBarComponents'
import ItemListContainerComponents from './components/ItemListContainer/ItemListContainerComponents'

function App() {
    return (
      <>
        <NavBarComponents/>
        <ItemListContainerComponents greeting = "hola mundo"/>
      </>
    )
}

export default App
