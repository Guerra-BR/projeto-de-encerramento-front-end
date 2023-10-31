import Logo from '../../assets/images/logo.png'
import { Container, Disclaimer, RedesSociais } from './styles'
import insta from '../../assets/images/instagram-round-svgrepo-co1.svg'
import face from '../../assets/images/facebook-round-svgrepo-.svg'
import twi from '../../assets/images/twitter-2-svgrepo-co.svg'

const Footer = () => (
  <Container>
    <img src={Logo} alt="" />

    <RedesSociais>
      <li>
        <a href="">
          <img src={insta} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={face} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={twi} alt="" />
        </a>
      </li>
    </RedesSociais>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </Container>
)

export default Footer
