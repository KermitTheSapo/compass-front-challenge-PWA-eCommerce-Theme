import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    
`

export const MoreInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--Bright);
    padding: 0 20px;
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
    flex-direction: column;
    background-color: var(--Primary);
    padding: 0 15px;
`


export const Category = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 193px;
    margin-top: 25px;
`
export const CategoryName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Bright);
`
export const CategoryList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 85%;
`
export const CategoryItem = styled.li`
    font-weight: 500;
    font-size: 0.875rem;   
`

export const LinkItem = styled.a`
    text-decoration: none;
    width: 25%;
    color: var(--LightText);
`

export const Policy = styled.div`
    display: flex;
    flex-direction: column;
    height: 62px;
    justify-content: space-between;
    margin-bottom: 36px;
`
export const PolicyName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Bright);
`

export const PolicyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`
export const PolicyItem = styled.li`
    font-weight: 500;
    font-size: 0.875rem;   
`
export const Border = styled.div`
    border-right: 1px solid var(--TypeLowEmphasis);
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    height: 44px;
    justify-content: space-between;
    margin-bottom: 28px;
`

export const AboutName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Bright);
`

export const AboutList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`
export const AboutItem = styled.li`
    font-weight: 500;
    font-size: 0.875rem;   
`

export const BorderHorizontal = styled.div`
    border-bottom: 1px solid var(--TypeLowEmphasis);
`