import styled from "styled-components";

export const Brands = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 28px;
`

export const Title = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    @media (min-width: 768px) {
        font-size: 2.125rem;
        color: var(--Dark);
    }
`

export const Paragraph = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--Primary);
    color: var(--Primary);
    @media (min-width: 768px) {
        display: none;
    }
`

export const BrandsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`

export const BrandsImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 13px;
    margin-bottom: 24px;
`

export const FigureImg = styled.figure`
    width: 99px;
    height: 100px;
    border-radius: 8px;
    background-color: var(--Accent);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1440px) {
        height: 200px;
        width: 200px;
    }
    @media (max-width: 768px) {
        height: 140px;
        width: 140px;
    }
    @media (max-width: 768px) {
        height: 168px;
        width: 168px;
    }

`

export const ShortcutDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 9px 8px 8px;
    border-radius: 8px;
    height: 120px;
    background-color: var(--Primary);
    justify-content: space-between;
    @media (min-width: 768px) {
        display: none;
    }
`

export const ShortcutFigure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--shortcutDiv);
    height: 104px;
    width: 124px;
    border-radius: 8px;
    margin-right: 12px;
`

export const ImgPhone = styled.img`

`

export const ShortcutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--Bright);
    height: 90%;
    width: 60%;
`
export const ShortcutName = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 18px;
    width: 90%;
`
export const ShortcutParagraph = styled.p`
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--Bright);
`

export const ShortcutLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
`