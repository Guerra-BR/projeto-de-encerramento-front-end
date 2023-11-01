import {
  Banner,
  Blur,
  Cabecalho,
  Container,
  Idem,
  ResCabecalho,
  Slogan
} from './styles'
import Logo from '../../assets/images/logo.png'
import banner from '../../assets/images/image22.png'
import { Link } from 'react-router-dom'

type Props = {
  home: 'home' | 'perfil'
}

const Header = ({ home }: Props) => {
  if (home === 'home') {
    return (
      <Cabecalho>
        <img src={Logo} alt="EFood" />
        <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
      </Cabecalho>
    )
  } else {
    return (
      <ResCabecalho>
        <Container className="container">
          <h2>Restaurantes</h2>
          <Link to={'/'}>
            <img src={Logo} alt="EFood" />
          </Link>
          <p>0 produtos no carrinho</p>
        </Container>
        <Banner bannerImg={banner}>
          <Blur className="blur">
            <Idem className="container">
              <p>Tipo</p>
              <h1>La Dolce Vita Trattoria</h1>
            </Idem>
          </Blur>
        </Banner>
      </ResCabecalho>
    )
  }
}

export default Header
