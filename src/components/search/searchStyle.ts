import styled from "styled-components";
import search from "@/assets/imgs/search/search.svg"
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`
export const SearchHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    background-color: var(--Bright);
`
export const ArrowBack = styled.img`
    height: 24px;
    width: 24px;
`

export const InputSearch = styled.input`
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: var(--Grey);
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 320px center;
    padding-left: 8px;
`


export const RecentSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 15vh;
`
export const RecentSearchTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const RecentSearchList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
`
export const RecentSearchItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 7px 12px 7px 12px;
    background-color: var(--Accent);
`


export const NewArrivals = styled.div`
    display: flex;
    flex-direction: column;
`

export const NewArrivalsTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const NewArrivalsList = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
    overflow: auto;
    gap: 50px;
    height: 30vh;
    &::-webkit-scrollbar { 
      display: none;
    }
`


export const Div = styled.div`
    display: flex;
    width: 154px;
`