import styled from "styled-components";

export const PaymentsDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 15vh;
    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }
`

export const PaymentsDetailsTitle = styled.div`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const PaymentsDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Paragraph = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`