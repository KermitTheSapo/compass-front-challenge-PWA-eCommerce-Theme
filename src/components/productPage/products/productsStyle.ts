import styled from "styled-components";

export const Products = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    min-width: 100%;
    padding: 0 16px;
    &::-webkit-scrollbar { 
      display: none;
    }
    @media (min-width: 768px) {
        display: none;
    } 
`

export const ProductImage = styled.img`
    /* min-width: 95%;   
    height: 100%; */
    height: 340px;
    width: 328px; 
    
`

export const DivProductImage = styled.div`
    width: 95%;
`

export const DivSimilarProduct = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--Grey);
    box-shadow: 0px 0px 10px 0px #0000000F;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50px;
    left: 275px;
`
export const ImgSimilar = styled.img``

export const BottomSheetContainer = styled.div`
    @media (min-width: 768px) {
        dispay: none;
    }
`
export const BottomSheetDark = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    background-color: #0000004D;
    z-index: 3;
`
export const BottomSheetContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 35vh;
    width: 100vw;
    background-color: var(--Bright);
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 4;
    border-radius: 10px 10px 0px 0px;
`

export const BottomSheetHeader = styled.div`
    padding: 19px 16px;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BottomSheetTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const SeparatorDiv = styled.div`
    height: 1px;
    width: 100%;
    background: var(--Separator);
    `
export const BottomSheetBody = styled.div`
    display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  overflow: auto;
  height: 30vh;
  gap: 16px;
  padding: 0 16px;
  &::-webkit-scrollbar { 
  display: none;
  }
`
