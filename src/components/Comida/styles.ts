import styled from 'styled-components'
import { cores } from '../../style'

export const Card = styled.div`
  max-width: 320px;
  padding: 8px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
`

export const Imagem = styled.img`
  height: 160px;
  width: 304px;
`

export const Nome = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  color: ${cores.rosaClaro};
  font-weight: bold;
`

export const Desricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${cores.rosaClaro};
`

export const Botao = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${cores.rosaClaro};
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  padding: 32px;
  background-color: ${cores.rosa};

  max-width: 1024px;
  display: flex;

  h4 {
    font-size: 18px;
    color: ${cores.branco};
  }

  p {
    color: ${cores.branco};
    font-size: 14px;
    line-height: 22px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  img {
    margin-right: 24px;
    object-fit: cover;
    width: 280px;
    height: 280px;
  }

  ${Botao} {
    width: max-content;
    padding: 4px 6px;
  }
`
