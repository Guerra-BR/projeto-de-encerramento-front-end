import { Tag, Card, Content, Infos, Tags } from './styles'
import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
  nome: string
  avaliacao: number
  infos: string[]
  descricao: string
  to: string
  imagem: string
}

const Restaurante = ({
  nome,
  to,
  imagem,
  avaliacao,
  infos,
  descricao
}: Props) => (
  <Card>
    <img src={imagem} alt="" />
    <Tags>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Tags>
    <Content>
      <Infos className="sobre">
        <h3>{nome}</h3>
        <div className="center">
          <h3>{avaliacao}</h3>
          <img src={star} alt="" />
        </div>
      </Infos>

      <p>{descricao}</p>

      <Link to={to}>
        <Tag as="a" href="">
          Saiba mais
        </Tag>
      </Link>
    </Content>
  </Card>
)

export default Restaurante
