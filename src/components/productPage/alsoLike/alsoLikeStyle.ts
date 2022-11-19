import styled from "styled-components";


export const AlsoLike = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 16px;
    gap: 10px;
    height: 33vh;
    @media (min-width: 768px) {
        display: none;
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
    gap: 10px;
    height: 26vh;
    justify-content: flex-start;
    &::-webkit-scrollbar { 
      display: none;
    }
`