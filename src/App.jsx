import './App.css'
import './components/ItemListContainer/ItemListContainerComponent.css'
import './components/CountComponents/ChargeComponents.css'
import './components/CountComponents/CountComponents.css'
import './components/NavBarComponents/NavBarComponents'
import MainRouter from './router/MainRouter'
import { TestProvider } from './context/TestContext'


function App() {
  
    return (
      <TestProvider>
        <MainRouter/>
      </TestProvider>
    )
}

export default App
