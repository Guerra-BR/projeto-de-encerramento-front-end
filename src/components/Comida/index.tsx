import { Botao, Card, Desricao, Imagem, Nome } from './styles'

type Props = {
  nome: string
  foto: string
  id: number
  descricao: string
  porcao: string
}

const Comida = ({ nome, foto, descricao }: Props) => {
  return (
    <Card>
      <Imagem src={foto} alt="" />
      <Nome>{nome}</Nome>
      <Desricao>{descricao}</Desricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Card>
  )
}

export default Comida
