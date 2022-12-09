import styled from "styled-components";

export const AddressDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 15vh;
    gap: 8px;
    width: 25%;
    @media (max-width: 768px) {
        width: 90%;
    }
`
export const AddressDetailsTitle = styled.h4`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const AddressDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const AddressDetailsLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`