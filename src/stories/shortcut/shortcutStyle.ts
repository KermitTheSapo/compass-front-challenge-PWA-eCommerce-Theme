import styled from "styled-components";

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