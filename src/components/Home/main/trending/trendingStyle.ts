import styled from "styled-components";

export const TrendingContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 16px;
    height: 18vh;
    @media (min-width: 768px) {
        display: none;
    }
`

export const Title = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const ImgsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    min-width: 100%;
    gap: 15px;
    &::-webkit-scrollbar { 
        display: none;
    }
`

export const ImgPoster = styled.img`
    width: 90%;
`