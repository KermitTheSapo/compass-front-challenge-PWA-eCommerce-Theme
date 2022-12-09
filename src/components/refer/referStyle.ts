import styled from "styled-components";

export const ReferContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const ReferHeader = styled.div`
    display: flex;
    align-items: center;
    height: 8vh;
    padding: 0 16px;
`
export const ImgArrow = styled.img`
    margin-right: 20px;
    @media (min-width: 768px) {
        display: none;
    }
`
export const ReferTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`


export const ReferBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;

`
export const CodeContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const ImgArt = styled.img`

`
export const Paragraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    text-align: center;
    width: 60%;
`
export const DivCode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 80%;
    border-radius: 8px;
    border: 1px dashed var(--Primary);
`
export const Code = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ParagraphCode = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const WorkDiv = styled.div`
    display: flex;
    flex-direction: column;   
    width: 95%;
    height: 18vh;
`
export const WorkTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const WorkList = styled.ol`
    display: flex; 
    flex-direction: column;
    height: 90%;
    justify-content: center;    
    gap: 20px;
    list-style: disc;
    padding: 0 25px;
`
export const WorkItem = styled.li`
    font-weight: 500;
    font-size: 14px;
    color: var(--TypeLowEmphasis);
`
export const InviteBtn = styled.button`
    width: 90%;
    height: 44px;
    border: none;
    border-radius: 8px;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    position: fixed;
    bottom: 2%;
    left: 5%;
    @media (min-width: 768px) {
        display: none;
    }
`