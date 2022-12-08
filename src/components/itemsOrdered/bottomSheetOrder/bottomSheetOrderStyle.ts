import styled from "styled-components";

export const BottomSheetShadow = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--DarkShadow);
`

export const BottomSheetContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 20vh;
    background-color: var(--Bright);
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: center;
    padding: 0 16px;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const OptionText = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
`