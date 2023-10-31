import styled from 'styled-components'
import { cores } from '../../style'
import Vetor from '../../assets/images/Vector.png'

export const Cabecalho = styled.header`
  background-color: ${cores.rosa};
  background-image: url(${Vetor});
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;

  img {
    margin-bottom: 140px;
  }
`

export const Slogan = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weigth: bold;
  max-width: 540px;
`
