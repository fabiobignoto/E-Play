import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './assets/components/Header'

import Rotas from './routes'
import Footer from './assets/components/Footer'
import { store } from './store'

import { GlobalCSS } from './styles'
import Cart from './assets/components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
