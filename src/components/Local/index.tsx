import { Tag, Card, Content, Infos, Tags } from './styles'
import star from '../../assets/images/estrela.svg'

type Props = {
  nome: string
  avaliacao: number
  infos: string[]
  descricao: string
  imagem: string
}

const Restaurante = ({ nome, imagem, avaliacao, infos, descricao }: Props) => (
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

      <Tag as="a" href="">
        Saiba mais
      </Tag>
    </Content>
  </Card>
)

export default Restaurante
