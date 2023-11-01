import Header from '../../components/Header'
import ListaComidas from '../../components/ListaComidas'
import ComidaClass from '../../Models/Comida'
import imagem from '../../assets/images/pizza.png'

const comidas: ComidaClass[] = [
  {
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1,
    imagem: imagem
  },
  {
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2,
    imagem: imagem
  },
  {
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3,
    imagem: imagem
  },
  {
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4,
    imagem: imagem
  },
  {
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5,
    imagem: imagem
  },
  {
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6,
    imagem: imagem
  }
]

function Perfil() {
  return (
    <>
      <Header home="perfil" />
      <ListaComidas comidas={comidas} />
    </>
  )
}

export default Perfil
