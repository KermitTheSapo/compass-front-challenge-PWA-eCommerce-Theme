import styled from "styled-components";

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const FilterHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 56px;
`
export const FilterTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const FilterBody = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Filters = styled.div`
    height: 90vh;
    background-color: var(--Grey);
`
export const FilterBox = styled.div`
    height: 46px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.color};
`
export const FilterName = styled.p`
    font-weight: 500;
    font-size: 1rem;
`
export const FiltersOptions = styled.div`
    width: 75%;
    height: 90vh;
`

export const OptionsList = styled.div`
    display: flex;
    flex-direction: column;
`

export const OptionItem = styled.div``
export const InputCheckbox = styled.input``

export const Label = styled.label`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const FilterBtnActions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 66px;
    background-color: var(--Bright);
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`

export const BtnClear = styled.button`
    width: 45%;
    height: 44px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;

`
export const BtnApply = styled.button`
    width: 45%;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
`