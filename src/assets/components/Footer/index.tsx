import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar os jogos de ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#sport"
                title="Clique aqui para acessar os jogos de esportes"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#fight"
                title="Clique aqui para acessar os jogos de luta"
              >
                Luta
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#rpg"
                title="Clique aqui para acessar os jogos de RPG"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#simulation"
                title="Clique aqui para acessar os jogos de simulação"
              >
                Simulação
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar os futuros lançamentos"
                to="/#coming-soon"
              >
                Em Breve
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar os jogos em promoção"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <p>{currentYear} - &copy; E-PLAY. Todos os direitos reservados.</p>
        </S.FooterSection>
      </div>
    </S.Container>
  )
}

export default Footer
