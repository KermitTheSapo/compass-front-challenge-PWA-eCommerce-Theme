import styled from "styled-components";

export const HandbagsContainer = styled.div`
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
`

export const LinkArrow = styled.a`

`

export const ImgArrow = styled.img`

`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 56px;

`
export const ProductsCount = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
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