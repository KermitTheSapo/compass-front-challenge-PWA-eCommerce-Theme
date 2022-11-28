import styled from "styled-components";


export const BagContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;
    background-color: var(--Accent);
`

export const BagHeaderNav = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background-color: var(--Bright);
    height: 8vh;
    padding: 0 22px;
`
export const ImgBack = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 20px;
`

export const BagTitle = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--Primary);
`
export const CardsContainers = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9vh;
    align-items: center;
    max-height: 45vh;
    overflow: auto;
    &::-webkit-scrollbar { 
      display: none;
    }
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
  font-weight: 500;
  font-size: 1rem;
  color: var(--TypeLowEmphasis);
  border: none;
  outline: none;
  height: 56px;
  padding: 0px 16px;
  background-color: var(--TypeBright);
  border-radius: 4px 0px 0px 4px;
`
export const ButtonCheck = styled.button`
  width: 20%;
  height: 56px;
  background-color: var(--TypeBright);
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--Primary);
  background-color: var(--TypeBright);
  border-radius: 0px 4px 4px 0px;
`

export const OrderDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
`
export const OrderTitle = styled.h2`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
    padding: 0 16px;
`

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-evenly;
    padding: 0 16px;
`

export const DivList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ListTitle = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const ListPrice = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ListResult = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ListResultValue = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
`
export const TotalBag = styled.div`
    display: flex;
    flex-direction: column;

`

export const ButtonPlaceOrder = styled.button`
    width: 60%;
    height: 44px;
    background-color: var(--Primary);
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 0.875rem;
    color: var(--Bright);
`
export const TotalTitle = styled.h3`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const TotalPrice = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const DivBagEmpty = styled.div`
    margin-top: 9vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 91vh;
    gap: 15px;
`
export const ImgBag = styled.img`

`
export const DivBagTitle = styled.h1`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`  
export const DivBagParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark);
    text-align: center;
    width: 80%;
`

export const ButtonContinue = styled.button`
    height: 44px;
    border-radius: 8px;
    border: none;
    background-color: var(--Primary);
    width: 90%;
    position: fixed;
    bottom: 10px;
    left: 20px;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);

`