import { Cabecalho, Slogan } from './styles'
import Logo from '../../assets/images/logo.png'

const Header = () => (
  <Cabecalho>
    <img src={Logo} alt="EFood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </Cabecalho>
)

export default Header
