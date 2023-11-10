import { useState } from 'react'
import {
  Botao,
  Card,
  Desricao,
  Imagem,
  Modal,
  ModalContent,
  Nome
} from './styles'

type Props = {
  nome: string
  foto: string
  id: number
  descricao: string
  porcao: string
  preco: number
}

type Modal = {
  aberta: boolean
  img: string
  descricao: string
  nome: string
  porcao: string
}

const Comida = ({ nome, foto, descricao, porcao, preco }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Card>
        <Imagem src={foto} alt="" />
        <Nome>{nome}</Nome>
        <Desricao>{descricao}</Desricao>
        <Botao onClick={() => setModalAberta(true)}>
          Adicionar ao carrinho
        </Botao>
      </Card>

      <Modal className={modalAberta ? 'visivel' : ''}>
        <ModalContent>
          <img src={foto} alt="" />
          <div>
            <h4>{nome}</h4>
            <p>
              {descricao} <br />
              <br />
              Serve de {porcao}
            </p>
            <Botao>Adicionar ao carrinho - {formataPreco(preco)}</Botao>
          </div>
        </ModalContent>
        <div
          onClick={() => {
            setModalAberta(false)
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Comida
