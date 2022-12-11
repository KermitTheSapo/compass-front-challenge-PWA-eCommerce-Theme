import styled from "styled-components";

export const DrawerDark = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    right: 0;
    top: 0;
    background-color: var(--DarkShadow);
    z-index: 2;
    @media (min-width: 768px) {
        display: none;
    }
`
export const DrawerContent = styled.div`
    height: 100vh;
    width: 82vw;
    background-color: var(--Bright);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    @media (min-width: 768px) {
        display: none;
    }
`

export const DrawerHeader = styled.div`
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    background-color: var(--Accent);
    border-radius: 8px;
    width: 90%;
`
export const ProfileContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`
export const ImgProfile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
export const ProfileText = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const ImgArrow = styled.img``

export const Separator = styled.div`
    height: 8px;
    width: 100%;
    background-color: var(--Grey);  
`
export const TopCategories = styled.div`
    display: flex;
    flex-direction: column;
`
export const TopCategoriesTitle = styled.h2`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    height: 5vh;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 8px;
`

export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 18px 0px 8px;
    gap: 30px;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const ContactTitle = styled.h2`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    height: 5vh;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 8px;
`

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 18px 0px 8px;
    gap: 30px;
`