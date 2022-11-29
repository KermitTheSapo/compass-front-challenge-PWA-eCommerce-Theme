import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 56px;
    background-color: var(--Bright);
    padding: 0 23px;
    gap: 29px;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
    @media (min-width: 769px) {
        display: none;
    }
`

export const Poster = styled.div`
    margin-top: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const ImgPoster = styled.img`
    width: 100%;
`

export const LinkArrow = styled.a`

`

export const ImgArrow = styled.img`

`
export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
    @media (min-width: 768px) {
        font-size: 2.125rem;
    }
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 56px;

`
export const ProductHeader = styled.div`
    display: flex;
    justify-content: space-evenly;

`

export const ListingOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        display: none;
    }
`
export const GridSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ParagraphShow = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const ToShow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;
`


export const SelectToShow = styled.select`
    background-color: var(--Grey);
    border: none;
    outline: none;
    -webkit-appearance: none;
    padding: 16px;
`
export const OptionToShow = styled.option`

`
export const SortTitle = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const SelectSort = styled.select`
    background-color: var(--Grey);
    border: none;
    outline: none;
    border: 0;
    height: 56px;
    width: 206px;
    -webkit-appearance: none;
    padding: 10px;
`
export const OptionSort = styled.option`

`

export const ToShowTitle = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const SortBy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`
export const GridDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    padding: 3px;
`
export const ImgGrid = styled.img`

`

export const ProductsCount = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    @media (min-width: 768px) {
        display: none;
    }
`
export const Products = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (width: 768px) {
        gap: 20px;        
    }
    @media (max-width: 425px) {
        margin-bottom: 80px;
    }
`

export const FooterBar = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 56px;
    background-color: var(--Bright);
    display: flex;
    justify-content: space-between;
    @media (min-width: 769px) {
        display: none;
    }
`

export const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 50%;
`

export const ImgIcon = styled.img``
export const FooterName = styled.span`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    text-transform: uppercase;
`

export const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0 20px;
    height: 10vh;
    @media (max-width: 768px) {
        display: none;
    }
`

export const BreadcrumbHorizontal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10%;
`
export const Label = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Primary);
`
export const LabelPage = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const CategoryDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
export const MenuSideNav = styled.div`
    width: 70%;
`


export const NumberPageTabs = styled.div`
    margin-top: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const BottomSheet = styled.div`
 @media (min-width: 768px) {
    display: none;
 }
`

export const BottomSheetDark = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--DarkShadow);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
`

export const BottomSheetContent = styled.div`
    background-color: var(--Bright);
    height: 300px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3;
    border-radius: 16px 16px 0 0;
`

export const BottomSheetHeader = styled.div`
    padding: 19px 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 8vh;
`
export const BottomSheetTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const BottomSheetBody = styled.div`
    padding: 0px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
`

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Separator);
`


export const InputRadio = styled.input`

`

export const LabelBottomSheet = styled.label`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    &:active{
        color: var(--TypeHighEmphasis);
    }
`

export const RadioDiv = styled.div`
    display: flex;
    align-items: center;
`
export const DivPage = styled.div`
    min-width: 955px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LeadingIcon = styled.div`
    display: flex;
    align-items: center;
`
export const TrailingIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
`