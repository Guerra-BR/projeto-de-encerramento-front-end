import ComidaClass from '../../Models/Comida'
import Comida from '../Comida'
import { Container, Listagem } from './styles'

type Props = {
  comidas: ComidaClass[]
}

const ListaComidas = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <Listagem>
        {comidas.map((r) => (
          <Comida
            key={r.id}
            imagem={r.imagem}
            descricao={r.descricao}
            nome={r.nome}
          />
        ))}
      </Listagem>
    </div>
  </Container>
)

export default ListaComidas
