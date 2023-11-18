import { useDispatch } from 'react-redux'

import { add, open } from '../../../store/reducers/cart'

import { parseToBRL } from '../../../utils'

import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatcher = useDispatch()

  const addToCart = () => {
    dispatcher(add(game))
    dispatcher(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBRL(game.prices.old)} </span>
            )}
            {game.prices.current && <>Por {parseToBRL(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              title="Clique aqui para adicionar ao carrinho"
              $variant="primary"
              type="button"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero
