import { close, remove } from '../../store/reducers/Cart'
import { Botao } from '../Comida/styles'
import trash from '../../assets/images/lixeira.png'

import { formataPreco } from '../Comida'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { CartContainer, CartItem, Overlay, SideBar, Qtty } from './styles'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  // const getTotalPrice = () => {
  //   return items.reduce((acumulador, valorAtual) => {
  //     return (acumulador += valorAtual.prices.current!)
  //   }, 0)
  // }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <ul>
          {itens.map((i) => (
            <CartItem key={i.id}>
              <img src={i.foto} alt="" />
              <div>
                <h4>{i.nome}</h4>
                <p>{formataPreco(i.preco)}</p>
                <img
                  onClick={() => dispatch(remove(i.id))}
                  src={trash}
                  alt="Remover item do carrinho"
                />
              </div>
            </CartItem>
          ))}
        </ul>
        <Qtty>
          <span>Valor total</span>
          <span>{formataPreco()}</span>
        </Qtty>
        <Botao>Continuar com a entrega</Botao>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
