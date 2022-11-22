import styled from "styled-components";


export const AlsoLikeImgs = styled.img`
`

export const AlsoLikeProducts = styled.div`
    display: flex;
    width: 154px;
    @media (min-width: 768px) {
        overflow: auto;
        width: 98vw;
        gap: 150px;
        height:50vh;
        &::-webkit-scrollbar { 
            display: none;
        }
    }
`
export const BtnTrending = styled.div`
    border-radius: 4px;
    background-color: var(--Highlight);
    height: 18.25px;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 20px;
    right: 60px;
    z-index: 2;
`

export const SpanTrending = styled.span`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeBright);
`

export const AlsoLikeContent = styled.div`

`

export const Div = styled.div`
    display: flex;
    width: 154px;
`