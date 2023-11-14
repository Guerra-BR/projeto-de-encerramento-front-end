import RestaurantesList from '../../components/ListagemRestaurantes'
import Header from '../../components/Header'
import { useGetRestaurantesListQuery } from '../../services/api'

export type ComidaClass = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestauranteClass = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ComidaClass[]
}

function Home() {
  const { data: restaurantes } = useGetRestaurantesListQuery()

  if (!restaurantes) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header home="home" />
      <RestaurantesList restaurantes={restaurantes} />
    </>
  )
}

export default Home
