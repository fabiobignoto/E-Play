import { useParams } from 'react-router-dom'

import { useGetGameQuery } from '../../services/api'

import Hero from '../../assets/components/Hero'
import Section from '../../assets/components/Section'
import Gallery from '../../assets/components/Gallery'
import Loader from '../../assets/components/Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
          <br /> As opções de áudio e legendas podem ser ajustadas nas
          configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCoverImage={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
export default Product
