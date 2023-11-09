import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import {
  Banner,
  Blur,
  Cabecalho,
  Container,
  Idem,
  ResCabecalho,
  Slogan
} from './styles'
import { RestauranteClass } from '../../Pages/Home'

type Props = {
  home: 'home' | 'perfil'
  restaurante?: RestauranteClass
}

const Header = ({ home, restaurante }: Props) => {
  if (home === 'home') {
    return (
      <Cabecalho>
        <img src={Logo} alt="EFood" />
        <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
      </Cabecalho>
    )
  } else {
    if (!restaurante) return <h3>Carregando...</h3>

    return (
      <ResCabecalho>
        <Container className="container">
          <h2>Restaurantes</h2>
          <Link to={'/'}>
            <img src={Logo} alt="EFood" />
          </Link>
          <p>0 produtos no carrinho</p>
        </Container>
        <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <Blur className="blur">
            <Idem className="container">
              <p>{restaurante.tipo}</p>
              <h1>{restaurante.titulo}</h1>
            </Idem>
          </Blur>
        </Banner>
      </ResCabecalho>
    )
  }
}

export default Header
