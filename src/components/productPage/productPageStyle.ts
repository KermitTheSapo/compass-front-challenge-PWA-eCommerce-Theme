import styled from "styled-components";

export const ProductPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    padding: 0 16px;
    display: flex;
    align-items: center;
    height: 56px;
    position: fixed;
    top: 0;
    background-color: var(--Bright);
    width: 100%;
    @media (min-width: 768px) { 
        display: none;
    }
`

export const BreadCrumb = styled.div`
    display: flex;
    align-items: center;
    margin-top: 70px;
    padding: 0 22px;
    margin-bottom: 19px;
    @media (max-width: 768px) {
        display: none;
    }
`
export const ArrowRightMini = styled.img``
export const BreadCrumbRouteOn = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Primary);
`
export const BreadCrumbRouteOff = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const LinkArrow = styled.a`

`

export const ImgArrow = styled.img`

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-evenly;
    margin-top: 56px;
    width: 100%;
    @media (min-width: 768px) {
        width: 50%;
        align-self: flex-start;
        margin-top: 0px;
    }
`
export const FooterNav = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--Bright);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 66px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const heartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Accent);
`

export const ImgHeart = styled.img``

export const ButtonAdd = styled.button`
    width: 272px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--Bright);
    border: none;
    outline: none;
`

export const Separator = styled.div`
    width: 100%;
    height: 8px;
    background-color: var(--Grey);
    @media (min-width: 768px) {
        display: none;
    }
`

export const ProductsPics = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    gap: 24px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const PicsContent = styled.div`
    display: flex;
    @media (max-width: 768px) {
        margin-bottom: 80px;
    }
`

export const ImgPics = styled.img`

`

export const ProductPhotos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
`

export const ImgSmallPic = styled.img`
    height: 75px;
    width: 75px;
`

export const ImgSmallDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
`
export const ProductArrow = styled.div`

`