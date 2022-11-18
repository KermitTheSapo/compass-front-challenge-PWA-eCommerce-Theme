import styled from 'styled-components'

import search from '../../assets/imgs/header/search.svg'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Bright);
  height: 56px;
  padding: 0 19px;
  position: fixed;
  top: 0;
  width: 100%;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 101px;
  height: 24px;
  @media screen and (min-width: 769px) {
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
  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const NavCategory = styled.nav`
  display: flex;
  gap: 32px;
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
  @media (max-width: 1090px){
    margin-right: 10px;
  }
`
export const LiCategory = styled.li`
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
`

export const Input = styled.input`
  height: 44px;
  /* width: 322px; */
  width: 22vw;
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
  gap: 26px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const IconImgMobile = styled.img`
  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const IconImg = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LinkCategory = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavList = styled.nav`
  @media (min-width: 769px) {
    display: none;
  }
`
export const ListUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: absolute;
  width: 25vw;
  height: 15vh;
  top: 50px;
  left: 0px;
  background-color: var(--carryDiv);
`
export const ListLi = styled.li``

export const DivInputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Bright);
  height: 44px;
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0px;
`

export const InputSearch = styled.input`
  width: 80%;
  border-radius: 4px;
  background-color: var(--Grey);
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 10px;
  border: none;
  outline: none;
  height: 34px;
  padding-left: 35px;
`