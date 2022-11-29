import styled from "styled-components";

export const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15vh;
    justify-content: space-evenly;
`
export const AddressTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    padding: 0 16px;
    width: 100%;
`

export const AddressInfo = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--Accent);
    border-radius: 8px;
    height: 70px;
    padding: 0 16px;
    justify-content: space-between;
    width: 92%;
`
export const AddressContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
`
export const AddressInfoTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const AddressInfoDescription = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const AddressEditBtn = styled.img`
`

