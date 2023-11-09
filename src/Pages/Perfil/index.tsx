import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ListaComidas from '../../components/ListaComidas'
import { useEffect, useState } from 'react'
import { RestauranteClass } from '../Home'

function Perfil() {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteClass>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <Header restaurante={restaurante} home="perfil" />
      <ListaComidas cardapio={restaurante.cardapio} />
    </>
  )
}

export default Perfil
