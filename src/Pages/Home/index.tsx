import RestaurantesList from '../../components/ListagemRestaurantes'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

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
  const [restaurantes, setRestaurantes] = useState<RestauranteClass[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header home="home" />
      <RestaurantesList restaurantes={restaurantes} />
    </>
  )
}

export default Home
