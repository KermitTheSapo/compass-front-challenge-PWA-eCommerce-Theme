import styled from 'styled-components'

import arrow from '../../../assets/imgs/home/main/arrow.svg'
import funkDesktop from '../../../assets/imgs/home/main/funkDesktop.png'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
`

export const Banner = styled.img`
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlertDiv = styled.div`
  background-color: var(--alertBanner);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 21px;
  gap: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const AlertH3 = styled.h3`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  text-align: center;
  color: var(--TypeHighEmphasis);
`

export const AlertLink = styled.a`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 18px;
  text-align: center;
  color: var(--Primary);
`
export const BannerDesktop = styled.div`
  background-image: url(${funkDesktop});
  height: 514px;
  width: 99%;
  align-self: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const BtnBanner = styled.button`
  width: 180px;
  height: 44px;
  border-radius: 8px;
  background-color: var(--Primary);
  font-weight: 500;
  font-size: 1rem;
  color: var(--Bright);
  border: none;
  outline: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 15% 50%;
`

export const CarryDiv = styled.div`
  height: 316px;
  width: 759px;
  border-radius: 24px;
  background-color: var(--carryDiv);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 47px;
  border: none;
`
export const CarryTitle = styled.h1`
  font-weight: 800;
  font-size: 3.75rem;
  color: var(--Primary);
`
export const CarryParagraph = styled.p`
  font-size: 1.75rem;
  color: var(--Primary);
  font-weight: 500;
  line-height: 38px;
  width: 80%;
`
