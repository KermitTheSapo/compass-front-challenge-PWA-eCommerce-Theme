import styled from "styled-components";

export const MyCartContainer = styled.div`
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    min-height: 53.2vh;
`

export const BreadCrumbs = styled.div`
    display: flex;
    align-items: center;
`
export const LabelBreadCrumbOn = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Primary);
`
export const LabelBreadCrumbOff = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const PageTitleDiv = styled.div`         
    display: flex;
    align-items: center;
    height: 10vh;
`

export const PageTitle = styled.h1`
    font-weight: 600;
    font-size: 2.125rem;
    color: var(--Primary);
`

export const MyCartContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ProductDetails = styled.div`
    width: 60%;
`

export const TableHeading = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--Separator);
`

export const ContentDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TableHeadingText = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    margin-bottom: 8px;
`

export const ContentValueDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`

export const ProductsDiv = styled.div``

export const OrderSummary = styled.div`
    width: 30%;
`

export const OrderSummaryTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
    margin-bottom: 8px;
`

export const OrderSummaryContent = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    height: 30vh;
`
export const Summary = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    height: 15vh;
`


export const ListSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SummaryLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const SummaryPrice = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const SummaryTotal = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const SummaryPriceTotal = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const ButtonsActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BtnOrder = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    color: var(--Bright);
    font-size: 1rem;
    font-weight: 500;
`
export const BtnContinue = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    color: var(--Primary);
    font-size: 1rem;
    font-weight: 500;
`

export const ApplyCoupon = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`
export const ApplyCouponTitle = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Dark);
`
export const ApplyHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const ArrowModal = styled.img``
export const CouponDiv = styled.div`
  height: 12vh;
  width: 60%;
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
  background-color: var(--Grey);
  border-radius: 4px 0px 0px 4px;
`
export const ButtonCheck = styled.button`
  width: 20%;
  height: 56px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--Primary);
  background-color: var(--Grey);
  border-radius: 0px 4px 4px 0px;
`

export const EmptyCart = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const EmptyTitle = styled.h2`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`
export const EmptyParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark);
`