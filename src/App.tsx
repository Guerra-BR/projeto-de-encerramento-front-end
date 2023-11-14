import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { GlobalCss } from './style'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
