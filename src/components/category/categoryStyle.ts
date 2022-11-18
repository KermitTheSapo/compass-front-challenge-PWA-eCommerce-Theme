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
    @media (min-width: 768px) {
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

export const GridSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ParagraphShow = styled.p``
export const ToShow = styled.div``
export const SortBy = styled.div``
export const GridDiv = styled.div``
export const ImgGrid = styled.img``

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
`

export const FooterBar = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 56px;
    background-color: var(--Bright);
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
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
    border: solid red;
`
export const MenuSideNav = styled.div`
    width: 70%;
    border: solid;
`

