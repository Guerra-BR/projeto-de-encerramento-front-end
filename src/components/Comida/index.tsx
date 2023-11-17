import { useState } from 'react'
import { add, open } from '../../store/reducers/Cart'
import {
  Botao,
  Card,
  Desricao,
  Imagem,
  Modal,
  ModalContent,
  Nome
} from './styles'

import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { ComidaClass } from '../../Pages/Home'

type Props = {
  comida: ComidaClass
}

type Modal = {
  aberta: boolean
  img: string
  descricao: string
  nome: string
  porcao: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Comida = ({ comida }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)
  const dispatch = useDispatch()

  const getDesricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 170) + '...'
    }
  }

  const addToCart = () => {
    dispatch(add(comida))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <Imagem src={comida.foto} alt="" />
        <Nome>{comida.nome}</Nome>
        <Desricao>{getDesricao(comida.descricao)}</Desricao>
        <Botao onClick={() => setModalAberta(true)}>
          Adicionar ao carrinho
        </Botao>
      </Card>

      <Modal className={modalAberta ? 'visivel' : ''}>
        <ModalContent>
          <img src={comida.foto} alt="" />
          <div>
            <h4>{comida.nome}</h4>
            <p>
              {comida.descricao} <br />
              <br />
              Serve de {comida.porcao}
            </p>
            <Botao onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(comida.preco)}
            </Botao>
          </div>
          <img
            className="close-icon"
            src={close}
            onClick={() => {
              setModalAberta(false)
            }}
            alt=""
          />
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
