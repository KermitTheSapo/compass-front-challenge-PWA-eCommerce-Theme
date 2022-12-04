import styled from "styled-components";

export const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0px 4px 10px 0px #0000000F;
    height: 15vh;
    background-color: var(--Bright);
    padding: 0 12px;
    border-radius: 4px;
`
export const ImgLike = styled.img`
    height: 30px;
    width: 30px;
`
export const FeedbackTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const FeedbackParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`