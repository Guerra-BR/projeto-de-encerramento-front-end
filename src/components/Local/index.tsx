import { Tag, Card, Content, Infos, Tags } from './styles'
import { Link } from 'react-router-dom'

import star from '../../assets/images/estrela.svg'

type Props = {
  titulo: string
  avaliacao: number
  destacado: boolean
  tipo: string
  descricao: string
  id: number
  capa: string
}

const Restaurante = ({
  titulo,
  id,
  capa,
  avaliacao,
  tipo,
  destacado,
  descricao
}: Props) => (
  <Card>
    <img src={capa} alt="" />
    <Tags>
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </Tags>
    <Content>
      <Infos className="sobre">
        <h3>{titulo}</h3>
        <div className="center">
          <h3>{avaliacao}</h3>
          <img src={star} alt="" />
        </div>
      </Infos>

      <p>{descricao}</p>

      <Link to={`/restaurantes/${id}`}>
        <Tag as="a" href="">
          Saiba mais
        </Tag>
      </Link>
    </Content>
  </Card>
)

export default Restaurante
