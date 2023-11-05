import { Botao, Card, Desricao, Imagem, Nome } from './styles'

type Props = {
  nome: string
  imagem: string
  descricao: string
}

const Comida = ({ nome, imagem, descricao }: Props) => (
  <Card>
    <Imagem src={imagem} alt="" />
    <Nome>{nome}</Nome>
    <Desricao>{descricao}</Desricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default Comida
