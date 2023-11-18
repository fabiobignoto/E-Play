import Banner from '../../assets/components/Banner'
import ProductsList from '../../assets/components/ProductsList'
import {
  useGetOnSaleGamesQuery,
  useGetSoonGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: onSale, isLoading: isLoadingSale } = useGetOnSaleGamesQuery()
  const { data: comingSoon, isLoading: isLoadingSoon } = useGetSoonGamesQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSale}
        background="gray"
        title="Promoções"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={comingSoon}
        background="black"
        title="Em breve"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
