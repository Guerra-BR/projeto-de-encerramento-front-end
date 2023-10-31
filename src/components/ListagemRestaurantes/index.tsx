import RestauranteClass from '../../Models/Restaurante'
import Restaurante from '../Local'
import { Container, Listagem } from './styles'

type Props = {
  restaurantes: RestauranteClass[]
}

const RestaurantesList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <Listagem>
        {restaurantes.map((r) => (
          <Restaurante
            key={r.id}
            imagem={r.imagem}
            avaliacao={r.avaliacao}
            descricao={r.descricao}
            infos={r.infos}
            nome={r.nome}
          />
        ))}
      </Listagem>
    </div>
  </Container>
)

export default RestaurantesList
