import styled from "styled-components";


export const CardVertical = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 15vh;
  margin-bottom: 30px;
`


export const CardVerticalImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardImg = styled.img`
  height: 80px;
  width: 72px;
`
export const ProductDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 70%;
  gap: 5px;
  width: 40%;
`
export const PriceDeleteDiv = styled.div`
  display: flex;
  flex-direction:column;
  height: 70%;
  justify-content: space-between;
  align-items: flex-end;
`
export const BtnDelete = styled.img`
  height: 24px;
  width: 24px;
`
export const PriceText = styled.p`

`
export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  color: var(--TypeHighEmphasis);
  text-transform: capitalize;
`
export const ProductParagraph = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: var(--TypeLowEmphasis);
`