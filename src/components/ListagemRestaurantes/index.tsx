import Restaurante from '../Local'
import { Container, Listagem } from './styles'

type Props = {
  restaurantes: RestauranteClass[]
}

const RestaurantesList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <Listagem>
          {restaurantes.map((r) => (
            <li key={r.id}>
              <Restaurante
                titulo={r.titulo}
                id={r.id}
                capa={r.capa}
                avaliacao={r.avaliacao}
                tipo={r.tipo}
                destacado={r.destacado}
                descricao={r.descricao}
              />
            </li>
          ))}
        </Listagem>
      </div>
    </Container>
  )
}

export default RestaurantesList
