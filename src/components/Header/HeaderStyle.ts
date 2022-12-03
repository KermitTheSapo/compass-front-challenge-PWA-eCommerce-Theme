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

export const CartInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  @media (max-width: 769px) {
    display: none;
  }
`
export const CarInfoDark = styled.div`
  position: fixed;
  background-color: #00000022;
  right: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
`

export const CartInfoDiv = styled.div`
  background-color: var(--Bright);
  height: 50vh;
  width: 50vw;
  position: fixed;
  display: flex;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 697px;
  width: 394px;
  top: 80px;
  right: 10px; 
  padding: 28px 0px 0px 8px;
`


export const AppBar = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 25px;
`

export const ImgBackArrow = styled.img`
  height: 24px;
  width: 24px;
`

export const TitleAppBar = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--Primary);
`

export const CardVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`


export const OrderDetailsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 12vh;
`
export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const OrderTitle = styled.h3`
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
`
export const OrderPrice = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
`
export const OrderResultTitle = styled.h3`
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
`
export const OrderResultValue = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--TypeHighEmphasis);
`
export const CouponDiv = styled.div`
  height: 12vh;
  width: 100%;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  color: var(--TypeLowEmphasis);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InputCode = styled.input`
  width: 80%;
  background-color: transparent;
  font-weight: 500;
  font-size: 1rem;
  color: var(--TypeLowEmphasis);
  border: none;
  outline: none;
  height: 56px;
  padding: 0px 16px;
  background-color: var(--Grey);
  border-radius: 4px 0px 0px 4px;
`
export const ButtonCheck = styled.button`
  width: 20%;
  height: 56px;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--Primary);
  background-color: var(--Grey);
  border-radius: 0px 4px 4px 0px;
`


export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  height: 12vh;
`

export const PlaceOrderBtn = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background-color: var(--Primary);
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--Bright);
`
export const LinkContinue = styled.div`
  color: var(--Primary);
`
export const ParagraphContinue = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--Primary);
  text-decoration: underline;
`

export const Separator = styled.div`
  width: 100%;
  background-color: #0000001F;
  height: 1px;
`


export const DivCardProducts = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  overflow: auto;
  width: 90%;
  &::-webkit-scrollbar { 
      display: none;
    }
`

export const DivBagEmpty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchDiv = styled.div`
  background-color: var(--Bright);
`