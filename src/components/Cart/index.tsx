import { close, remove, clear } from '../../store/reducers/Cart'
import trash from '../../assets/images/lixeira.png'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { formataPreco } from '../Comida'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  CartContainer,
  CartItem,
  Overlay,
  SideBar,
  Qtty,
  Botao,
  Conteudo,
  Row,
  InputGroup
} from './styles'
import { useEffect, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const [isCheckouting, setIsCheckouting] = useState(false)
  const [isPaying, setIsPaying] = useState(false)
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numeroCasa: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVenc: '',
      anoVenc: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatorio'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatorio'),
      cidade: Yup.string()
        .min(5, 'O nome da cidade precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatorio'),
      cep: Yup.string()
        .min(8, 'Insira um CEP válido')
        .max(8, 'Insira um CEP válido')
        .required('Este campo é obrigatorio'),
      numeroCasa: Yup.string()
        .min(1, 'Insira o numero da casa')
        .required('Este campo é obrigatorio'),
      nomeCartao: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Este campo é obrigatorio'),
      numeroCartao: Yup.string().required('Este campo é obrigatorio'),
      cvv: Yup.string()
        .min(3, 'Insira um CVV válido')
        .max(3, 'Insira um CVV válido')
        .required('Este campo é obrigatorio'),
      mesVenc: Yup.string()
        .min(2, 'Insira um mês válido')
        .max(2, 'Insira um mês válido')
        .required('Este campo é obrigatorio'),
      anoVenc: Yup.string()
        .min(4, 'Insira um ano válido')
        .max(4, 'Insira um ano válido')
        .required('Este campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: itens.map((i) => ({
          id: i.id,
          price: i.preco
        })),
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numeroCasa),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVenc),
              year: Number(values.anoVenc)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const hasError = estaAlterado && estaInvalido

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay
        onClick={() => {
          setIsPaying(false)
          setIsCheckouting(false)
          dispatch(close())
        }}
      />
      <SideBar>
        {!isSuccess && !data ? (
          <>
            {!isCheckouting ? (
              <>
                {itens.length > 0 ? (
                  <>
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
                      <span>{formataPreco(getTotalPrice())}</span>
                    </Qtty>
                    <Botao onClick={() => setIsCheckouting(true)}>
                      Continuar com a entrega
                    </Botao>
                  </>
                ) : (
                  <p className="center">
                    Adicione um item no carrinho para prosseguir com seu pedido
                  </p>
                )}
              </>
            ) : (
              <Conteudo onSubmit={form.handleSubmit}>
                {!isPaying ? (
                  <>
                    <h3>Entrega</h3>
                    <Row>
                      <InputGroup>
                        <label htmlFor="nome">Quem irá receber</label>
                        <input
                          name="nome"
                          id="nome"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('nome') ? 'error' : ''}
                          value={form.values.nome}
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="endereco">Endereço</label>
                        <input
                          name="endereco"
                          id="endereco"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('endereco') ? 'error' : ''
                          }
                          value={form.values.endereco}
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cidade">Cidade</label>
                        <input
                          name="cidade"
                          id="cidade"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cidade') ? 'error' : ''
                          }
                          value={form.values.cidade}
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cep">CEP</label>
                        <ReactInputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                          value={form.values.cep}
                          mask="99999-99"
                          name="cep"
                          id="cep"
                          type="text"
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="numeroCasa">Número</label>
                        <ReactInputMask
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('numeroCasa') ? 'error' : ''
                          }
                          value={form.values.numeroCasa}
                          mask="99999"
                          name="numeroCasa"
                          id="numeroCasa"
                          type="text"
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="complemento">
                          Complemento (opcional)
                        </label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('complemento') ? 'error' : ''
                          }
                          value={form.values.complemento}
                          name="complemento"
                          id="complemento"
                          type="text"
                        />
                      </InputGroup>
                    </Row>
                    <Botao
                      className="margin-top"
                      type="button"
                      onClick={() => setIsPaying(true)}
                    >
                      Continuar com o pagamento
                    </Botao>
                    <Botao
                      type="button"
                      onClick={() => setIsCheckouting(false)}
                    >
                      Voltar para o carrinho
                    </Botao>
                  </>
                ) : (
                  <>
                    <h3>
                      Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                    </h3>
                    <Row>
                      <InputGroup>
                        <label htmlFor="nomeCartao">Nome no cartão</label>
                        <input
                          name="nomeCartao"
                          id="nomeCartao"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('nomeCartao') ? 'error' : ''
                          }
                          value={form.values.nomeCartao}
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="numeroCartao">Número do cartão</label>
                        <ReactInputMask
                          mask="9999 9999 9999 9999"
                          name="numeroCartao"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('numeroCartao') ? 'error' : ''
                          }
                          value={form.values.numeroCartao}
                          id="numeroCartao"
                          type="text"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="88px">
                        <label htmlFor="cvv">CVV</label>
                        <ReactInputMask
                          mask="999"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cvv') ? 'error' : ''}
                          value={form.values.cvv}
                          name="cvv"
                          id="cvv"
                          type="text"
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="mesVenc">Mês de vencimento</label>
                        <ReactInputMask
                          mask="99"
                          name="mesVenc"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('mesVenc') ? 'error' : ''
                          }
                          value={form.values.mesVenc}
                          id="mesVenc"
                          type="text"
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="anoVenc">Ano de vencimento</label>
                        <ReactInputMask
                          mask="9999"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('anoVenc') ? 'error' : ''
                          }
                          value={form.values.anoVenc}
                          name="anoVenc"
                          id="anoVenc"
                          type="text"
                        />
                      </InputGroup>
                    </Row>
                    <Botao
                      disabled={isLoading}
                      className="margin-top"
                      type="submit"
                    >
                      {isLoading
                        ? 'Finalizando pagamento'
                        : 'Finalizar pagamento'}
                    </Botao>
                    <Botao type="button" onClick={() => setIsPaying(false)}>
                      Voltar para a edição de endereço
                    </Botao>
                  </>
                )}
              </Conteudo>
            )}
          </>
        ) : (
          <>
            <h3>Pedido realizado - {data?.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br /> Lembre-se da importância de higienizar as mãos após o
              recebimento do pedido, garantindo assim sua segurança e bem-estar
              durante a refeição. <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica.
              <br />
              <br />
              Bom apetite!
            </p>
            <Botao
              className="margin-top"
              onClick={() => {
                setIsPaying(false)
                setIsCheckouting(false)
                dispatch(close())
              }}
            >
              Concluir
            </Botao>
          </>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
