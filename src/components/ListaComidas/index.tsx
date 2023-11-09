import Comida from '../Comida'
import { Container, Listagem } from './styles'
import { ComidaClass } from '../../Pages/Home'

type Props = {
  cardapio: ComidaClass[]
}

const ListaComidas = ({ cardapio }: Props) => {
  return (
    <Container>
      <div className="container">
        <Listagem>
          {cardapio.map((r) => (
            <li key={r.id}>
              <Comida
                foto={r.foto}
                descricao={r.descricao}
                nome={r.nome}
                id={r.id}
                porcao={r.porcao}
              />
            </li>
          ))}
        </Listagem>
      </div>
    </Container>
  )
}
export default ListaComidas
