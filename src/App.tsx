import RestauranteClass from './Models/Restaurante'
import Footer from './components/Footer'
import Header from './components/Header'
import imagem from './assets/images/image.png'
import RestaurantesList from './components/ListagemRestaurantes'
import { GlobalCss } from './style'

const restaurantes: RestauranteClass[] = [
  {
    nome: 'Burguer King',
    avaliacao: 9.4,
    infos: ['Fast Food', 'Melhores'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 1,
    imagem: imagem
  },
  {
    nome: 'Mac King',
    avaliacao: 5.4,
    infos: ['Fast Food'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2,
    imagem: imagem
  },
  {
    nome: 'Burguer King',
    avaliacao: 5.4,
    infos: ['Fast Food'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3,
    imagem: imagem
  },
  {
    nome: 'Burguer King',
    avaliacao: 5.4,
    infos: ['Fast Food'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4,
    imagem: imagem
  }
]

function App() {
  return (
    <div>
      <GlobalCss />
      <Header></Header>
      <RestaurantesList restaurantes={restaurantes} />
      <Footer />
    </div>
  )
}

export default App
