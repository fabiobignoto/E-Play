import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'

import { getTotalPrice, parseToBRL } from '../../../utils'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatcher = useDispatch()

  const closeCart = () => {
    dispatcher(close())
  }

  const removeItem = (id: number) => {
    dispatcher(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? `is-open` : ``}>
      <S.Overlay onClick={closeCart} />

      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBRL(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBRL(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="emptyText">O carrinho está vazio.</p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
