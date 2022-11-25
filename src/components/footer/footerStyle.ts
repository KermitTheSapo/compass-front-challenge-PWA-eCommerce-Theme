import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin-bottom: 0px;
        width: 100vw;
    }
`

export const MoreInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--Bright);
    padding: 0 20px;
    height: 48px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const AboutTitle = styled.h4`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const Arrow = styled.img`

`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: var(--Primary);
    height: 70vh;
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 32px 60px;
        height: 40vh;
        justify-content: space-between;
    }
`


export const Category = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 193px;
    padding: 0 15px;
    @media (min-width: 1440px) {
        padding: 0px;
        height: 100%;
        width: 15%;
        justify-content: space-between;
    }
    @media (min-width: 768px) {
        padding: 0px;
        height: 100%;
        width: 35%;
        justify-content: space-between;        
    }
`
export const CategoryName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Bright);
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const CategoryList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 85%;
    gap: 7px;
    @media (min-width: 768px) {
        gap: 8px;
        height: 90%;
    }
`
export const CategoryItem = styled.li`
    font-weight: 500;
    font-size: 0.875rem;
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const LinkItem = styled.a`
    text-decoration: none;
    width: 25%;
    color: var(--LightText);
    @media (min-width: 768px) {
        width: 100%;
    }
`

export const Policy = styled.div`
    display: flex;
    flex-direction: column;
    height: 62px;
    justify-content: space-between;
    padding: 0 15px;
    @media (min-width: 768px) {
        padding: 0px;
        height: 100%;
        width: 35%;
        justify-content: flex-start;
        order: 2;
    }
`
export const PolicyName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Bright);
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const PolicyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    @media (min-width: 768px) {
        gap: 8px;
        flex-direction: column;
        height: 80%;
        justify-content: space-evenly;
    }
`
export const PolicyItem = styled.li`
    font-weight: 500;
    font-size: 0.875rem;   
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const Border = styled.div`
    border-right: 1px solid var(--LightText);
    @media (min-width: 768px) {
        display: none;
    }
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    height: 44px;
    justify-content: space-between;
    padding: 0 15px;
    @media (min-width: 1440px) {
        padding: 0px;
        height: 100%;
        width: 15%;
        order: 1;
        justify-content: flex-start;
    }
    @media (min-width: 768px) {
        padding: 0px;
        height: 100%;
        width: 25%;
        order: 1;
        justify-content: flex-start;
    }
`

export const AboutName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Bright);
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const AboutList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    @media (min-width: 768px) {
        /* gap: 12px; */
        flex-direction: column;
        height: 60%;
        justify-content: space-evenly;
    }
`
export const AboutItem = styled.li`
    font-weight: 500;
    font-size: 0.875rem;
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const BorderHorizontal = styled.div`
    border-bottom: 1px solid var(--PrimaryTint);
    @media (min-width: 768px) {
        display: none;
    }
`

export const Logos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding: 0 15px;
    @media (min-width: 1440px) {
        width: 80%;
    }
    @media (min-width: 768px) {
        width: 90%;
    }
`

export const CircleFigure = styled.figure`
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: var(--PrimaryTint);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LogoImg = styled.img`

`

export const Localization = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    padding: 0 15px;
    @media (min-width: 1440px) {
        width: 50%;
    }
    @media (min-width: 768px) {
        width: 80%;
    }
    @media (max-width: 320px) {
        width: 50%;
    }
`

export const ImgLocation = styled.img`

`

export const LocalizationName = styled.h4`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeBright);
`

export const Copyright = styled.div`
    padding: 0 15px;
    @media (min-width: 768px) {
        width: 90%;
    }
`

export const ParagraphCopy = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--LightText);
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 13vh;
    @media (min-width: 768px) {
        justify-content: space-evenly;
        align-items: flex-end;
        order: 4;
        height: 60%;
    }
`