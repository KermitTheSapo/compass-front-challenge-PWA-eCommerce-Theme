import styled from "styled-components";


export const AlsoLike = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 16px;
    gap: 10px;
    height: 33vh;
    @media (min-width: 769px) {
        display: none;
    }
    @media (max-width: 768px) {
        height: 40vh;
    }
`
export const AlsoLikeTitle = styled.h3`
    font-weight: 600;
`
export const AlsoLikeProductsList = styled.div`
    display: flex;
    align-items: center;
    overflow: auto;
    min-width: 100%;
    height: 26vh;
    justify-content: flex-start;
    &::-webkit-scrollbar { 
      display: none;
    }
    @media (max-width: 768px) {
        height: 100%;
    }
`