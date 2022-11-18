import styled from "styled-components";

export const MenuSideNavContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const Separator = styled.div`
    width: 100%;
    border: 1px solid #0000001F;
`
