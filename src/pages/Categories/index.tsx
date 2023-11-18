import ProductsList from '../../assets/components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesSports, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesFight, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRPGGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesRPG}
        background="black"
        title="RPG"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={gamesAction}
        background="gray"
        title="Ação"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesSports}
        background="black"
        title="Esportes"
        id="sport"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={gamesFight}
        background="gray"
        title="Luta"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesSimulation}
        background="black"
        title="Simulacao"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
