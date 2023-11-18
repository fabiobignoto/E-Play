import { useState } from 'react'

import Section from '../Section'
import * as S from './styles'

import zoom from '../../images/zoom.png'
import play from '../../images/play.png'
import close from '../../images/fechar.png'

type Props = {
  name: string
  defaultCoverImage: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ name, defaultCoverImage, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCoverImage
  }

  const getMediaIconAlt = (item: GalleryItem) => {
    if (item.type === 'image') return 'Clique aqui para ampliar a imagem.'
    return 'Clique aqui para reproduzir o vídeo.'
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={index}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} do ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} alt={getMediaIconAlt(media)} />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'isVisible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Clique aqui para fechar a imagem"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={`Cena do jogo ${name}`} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
