import { styled } from 'styled-components'
import { cores } from '../../style'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  width: 100%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  color: ${cores.rosaClaro};
  background-color: ${cores.rosa};
  z-index: 1;
  width: 360px;
  padding: 32px 16px 0 16px;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  margin-bottom: 16px;
  padding: 8px;

  & > img {
    margin-right: 8px;
    margin-bottom: 4px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  p {
    margin: 16px 0 8px 0;
  }

  div {
    img {
      cursor: pointer;
      position: absolute;
      bottom: 12px;
      right: 8px;
    }
  }
`

export const Qtty = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;

  span {
    font-weight: bold;
    color: ${cores.rosaClaro};
  }
`
