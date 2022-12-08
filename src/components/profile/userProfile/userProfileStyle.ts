import styled from "styled-components";
import logout from "@/assets/imgs/userProfile/logout.svg"


export const UserProfileContainer = styled.div`
    margin-top: 56px;
    padding: 0 20px;
`
export const BreadCrumb = styled.div`
    display: flex;
    align-items: center;
`

export const Label = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: var(--Primary);
`
export const ImgArrow = styled.img``
export const LabelPrincipal = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
`

export const DivTitleAndLogout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
`
export const TitlePage = styled.div`
    font-weight: 600;
    font-size: 2.125rem;
    color: var(--Primary);
`
export const ButtonLogout = styled.button`
    height: 40px;
    width: 136px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--Primary);
    font-weight: 600;
    font-size: 1rem;
    color: var(--Primary);
    background-image: url(${logout});
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px;
`

export const UserProfileContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

export const SideNavigation = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: var(--Grey);
    height: 50vh;
    width: 20%;
    padding: 0 8px 0 0;
`
export const PersonInformation = styled.div`
    width: 80%;
`

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
`

export const ImgArrowLeft = styled.img`

`

export const InputSearch = styled.input`
    height: 40px;
    border-radius: 4px;
    border: none;
    background-color: var(--Grey);
    padding: 0 16px;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    font-weight: 500;
    
`