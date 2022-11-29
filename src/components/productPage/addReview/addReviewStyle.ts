import styled from "styled-components";

export const AddReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`

export const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--Bright);
    height: 8vh;
`
export const HeaderNavTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ImgClose = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 20px;
`

export const ProductRatingDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 18vh;
    justify-content: space-evenly;
    margin-top: 8vh;
`

export const ProductRatingTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const DeliveryPinCode = styled.form`
    display: flex;
    background-color: var(--Grey);
    height: 46px;
    @media (min-width: 768px) {
        width: 80%;
    }
`
export const DeliveryInput = styled.input`
    height: 100%;
    width: 90%;
    background-color: transparent;
    padding: 0 16px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    border: none;
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const DeliveryBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    text-transform: uppercase;

`

export const ReviewDescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 18vh;
    justify-content: space-evenly;
`
export const ReviewDescriptionTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const ReviewDescriptionTextarea = styled.textarea`
    height: 96px;
    background-color: var(--Grey);
    border-radius: 4px;
    border: none;
    padding: 5px 16px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const UploadDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const UploadTitle = styled.h2`
    font-weight: 600;
    font-size: 14px;
    color: var(--TypeHighEmphasis);
`

export const LabelUpload = styled.label`
    
`
export const ImgUpload = styled.img`

`
export const InputUploadImg = styled.input`
    display: none;
`

export const ButtonSubmitDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    background-color: var(--Bright);
    position: fixed;
    bottom: 0;
    width: 100%;
    right: 0px;
`
export const ButtonSubmit = styled.button`
    background-color: var(--Primary);
    border: none;
    outline: none;
    height: 85%;
    width: 90%;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
    
`