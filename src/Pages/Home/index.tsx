import RestauranteClass from '../../Models/Restaurante'
import RestaurantesList from '../../components/ListagemRestaurantes'
import imagem from '../../assets/images/image.png'
import imagem1 from '../../assets/images/imagem.png'
import Header from '../../components/Header'

const restaurantes: RestauranteClass[] = [
  {
    nome: 'Burguer King',
    avaliacao: 9.4,
    infos: ['Fast Food', 'Melhores'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 1,
    imagem: imagem1,
    to: '/perfil'
  },
  {
    nome: 'Mac King',
    avaliacao: 5.4,
    infos: ['Fast Food'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2,
    imagem: imagem,
    to: '/perfil'
  },
  {
    nome: 'Burguer King',
    avaliacao: 5.4,
    infos: ['Fast Food'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3,
    imagem: imagem,
    to: '/perfil'
  },
  {
    nome: 'Burguer King',
    avaliacao: 5.4,
    infos: ['Fast Food'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4,
    imagem: imagem,
    to: '/perfil'
  }
]

function Home() {
  return (
    <>
      <Header home="home" />
      <RestaurantesList restaurantes={restaurantes} />
    </>
  )
}

export default Home
