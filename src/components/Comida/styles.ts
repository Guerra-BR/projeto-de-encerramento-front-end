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
`
