import styled from "styled-components"

export const BottomSheetHomeContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40vh;
    width: 100vw;
    background-color: var(--Bright);
    z-index: 3;
    border-radius: 20px 20px 0 0;
    padding: 24px 16px 0px 16px;
    justify-content: space-between;
    @media (min-width: 768px) {
        display: none;
    }
`

export const SheetHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%; 
    gap: 20px;
`


export const Img = styled.img`
    height: 75px;
    width: 75px;
`
export const ContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 4px;
`
export const Title = styled.h3`
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--TypeHighEmphasis);
`
export const Description = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const Price = styled.h4`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const AverageDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
`
export const ImgStar = styled.img`

`
export const AverageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const AverageTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const AverageParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const Arrow = styled.img`

`

export const SelectSize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 10vh;
`
export const SizeContent = styled.div`
    display: flex;
    align-items: center;
`
export const SelectSizeTitle = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const SelectSizeParagraph = styled.div`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const SizeTabs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`
export const Tab = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--Bright);
    border: 1px solid var(--LightText);
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
    &:hover {
        background-color: #D9EFF1;
        border: 2px solid var(--Primary);
    }
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
`
export const ImgPlaceHolderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--Accent);
`

export const BottomSheetHomeDark = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--DarkShadow);
  z-index: 2;
  @media (min-width: 768px) {
    display: none;
  }
`
