import styled from "styled-components";

export const StatsBarContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Progress = styled.progress`
    display:block;
    width: 90%;
    -webkit-appearance: none;
    &::-webkit-progress-bar {
    background: var(--Grey);
    border-radius: 50px;
    padding: 2px;
}
    &::-moz-progress-bar {  
    background: var(--Grey);
    border-radius: 50px;
    padding: 2px;
}
    &::-webkit-progress-value {
    border-radius: 50px;
    background:var(--Primary);
}
`
export const ProgressValue = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    margin-right: 8px;
`
