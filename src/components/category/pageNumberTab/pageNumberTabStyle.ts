import styled from "styled-components";
interface Props {
    color: string;
    backgroundColor: string;
}

export const PageNumberTabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 32%;
`
export const NumberTabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
    width: 235px;
    background-color: var(--Grey);
    border-radius: 12px;
    padding: 0 4px;
`
export const Tab = styled.h3<Props>`
    font-weight: 500;
    font-size: 0.75rem;
    color: ${p => p.color};
    background-color: ${p => p.backgroundColor};
    padding: 6px 18px;
    border-radius: 8px;
`
export const NextDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const NextButton = styled.button`
    border: none;
    outline: none;
    background-color: var(--Grey);
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
    border-radius: 12px;
    height: 36px;
    width: 67px;
`