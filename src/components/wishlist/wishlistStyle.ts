import styled from "styled-components";

export const WishlistContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const WishlistHeader = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    padding: 0 16px;
`
export const ImgArrow = styled.img`
    margin-right: 20px;
`
export const WishlistTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const WishlistParagraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const WishlistContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`
export const WishlistProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
`