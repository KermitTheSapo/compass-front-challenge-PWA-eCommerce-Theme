import styled from 'styled-components'

import search from '../../assets/imgs/home/header/search.svg'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Bright);
  height: 56px;
  padding: 0 19px;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 101px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuImg = styled.img``

export const TitlePage = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--Primary);
`

export const TrailingIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavCategory = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ImgLogo = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const UlCategory = styled.ul`
  display: flex;
  align-items: center;
  height: 18px;
  gap: 20px;
`
export const LiCategory = styled.li`
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
`

export const Input = styled.input`
  height: 44px;
  width: 322px;
  border-radius: 4px;
  background-color: var(--Grey);
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--TypeLowEmphasis);
  background-image: url(${search});
  background-repeat: no-repeat;
  padding-left: 40px;
  background-position: 10px;
  border: none;
  outline: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const IconImgMobile = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const IconImg = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
