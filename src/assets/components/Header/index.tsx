import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../images/logo.svg'
import cart from '../../images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const dispatcher = useDispatch()

  const openCart = () => {
    dispatcher(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="Logo da EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a seção de categorias de jogos"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar os futuros lançamentos"
                  to="/#coming-soon"
                >
                  Em Breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span> &nbsp;- produto(s)</span>{' '}
          <img src={cart} alt="Carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a seção de categorias de jogos"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar os futuros lançamentos"
              to="/#coming-soon"
            >
              Em Breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              onClick={() => setIsMenuOpen(false)}
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
