import styled from "styled-components"
import deleteImg from "@/assets/imgs/userProfile/delete.svg"


export const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const InfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 4vh;
    @media (max-width: 768px) {
        justify-content: space-evenly;
        height: 8vh;
        padding: 0 0 0 16px;
    }
`
export const InfoTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
    @media (max-width: 768px) {
        padding: 0 0 0 16px;
    }
`
export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Separator);
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfilePicture = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 40%;
    height: 13vh;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 16px 0 16px;
    }
`
export const ImgProfile = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
export const BtnUpload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 136px;
    border-radius: 8px;
    border: none;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
`
export const BtnDelete = styled.button`
    height: 44px;
    width: 136px;
    border-radius: 8px;
    border: none;
    background-color: transparent;
    color: var(--Error);
    border: 2px solid var(--Error);
    font-weight: 500;
    font-size: 0.875rem;
    background-image: url(${deleteImg});
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px;
    cursor: pointer;
`

export const FormInformation = styled.div`
`

export const DivName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 12vh;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 20vh;
    }
`
export const FirstNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    @media (max-width: 768px) {
        width: 90%;
        padding: 0 0 0 16px;
    }
`
export const Label = styled.label`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const InputFirstName = styled.input`
    height: 52px;
    width: 100%;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const DivEmail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 12vh;
    @media (max-width: 768px) {
        padding: 0 0 0 16px;
    }
`

export const InputEmail = styled.input`
    height: 52px;
    width: 60%;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    @media (max-width: 768px) {
        width: 90%;   
    }
`

export const DivPhone = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: space-evenly;
    height: 12vh;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 16px 0 16px;
    }
`

export const DivNumbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InputDDD = styled.input`
    height: 52px;
    width: 80px;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 0 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const InputPhone = styled.input`
    height: 52px;
    width: 60%;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

export const DateDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 12vh;
    width: 20%;
    @media (max-width: 768px) {
        width: 95%;
        padding: 0 0 0 16px;
    }
`

export const InputDate = styled.input`
    height: 52px;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    
`

export const ChangePassword = styled.div`
    display: flex;
    flex-direction: column;
`
export const ChangeHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 5vh;
    @media (max-width: 768px) {
        height: 8vh;
        justify-content: space-evenly;
        padding: 0 0 0 16px;
    }
`
export const ChangeTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`

export const ChangeContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivInputPassword = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 12vh;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        padding: 0 0 0 16px;
        width: 90%;
    }
`

export const InputPassword = styled.input`
    height: 52px;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 16px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    min-width: 100%;
`

export const DivSave = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 8vh;
    align-items: center;
`
export const BtnSave = styled.button`
    height: 36px;
    width: 136px;
    border-radius: 8px;
    border: none;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 500;
    font-size: 1rem;
`

export const ImgEye = styled.img`
    height: 24px;
    width: 24px;
    position: relative;
    right: 50px;
`

export const InputPasswordShow = styled.div`
    display: flex;
    align-items: center;
`

export const ImgArrowLeft = styled.img`
    height: 24px;
    width: 24px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const ArrowTitleDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const InputFile = styled.input`
    display: none;
`

export const LabelInput = styled.label`

`