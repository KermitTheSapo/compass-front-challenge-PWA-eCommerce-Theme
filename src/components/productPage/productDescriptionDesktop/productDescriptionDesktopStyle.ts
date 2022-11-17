import styled from "styled-components";


export const ProductDescriptionDesktopContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    justify-content: space-evenly;
    height: 30vh;
    @media (max-width: 768px) {
        display: none;
    }
`
export const DescriptionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    background-color: var(--Grey);
    border-radius: 12px;
    height: 48px;
`
export const DescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
`
export const Tab = styled.div`
    border-radius: 8px;
    height: 32px;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 18px;
`
export const Name = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: ${(props) => props.color};
`

export const Paragraph = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    line-height: 20px;
    height: 10vh;
`