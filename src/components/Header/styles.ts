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

export const ResCabecalho = styled.header`
  background-color: ${cores.rosa};
  background-image: url(${Vetor});
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 64px;
  align-items: center;
`

export const Slogan = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weigth: bold;
  max-width: 540px;
`

export const Banner = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const Blur = styled.div`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Idem = styled.div`
  height: 280px;
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: bold;
  }

  p {
    color: ${cores.branco};
    font-size: 32px;
  }
`
