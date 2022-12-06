import styled from "styled-components";
import logoutIcon from "@/assets/imgs/profile/logoutBtn.svg"
export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    height: 8vh;
    padding: 0 16px;
    @media (min-width: 768px) {
        display: none;
    }
`
export const ProfileTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ProfileBanner = styled.div`
    height: 15vh;
    background-color: var(--Grey);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 768px) {
        display: none;
    }
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImgProfile = styled.img`

`
export const ProfileName = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--TypeHighEmphasis);
`
export const ProfileEmail = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const ProfileNumber = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const ImgArrow = styled.img`

`

export const NavigationOptions = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const BtnLogoutDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 17vh;
    padding: 0 16px;
    @media (min-width: 768px) {
        display: none;
    }
`
export const BtnLogout = styled.button`
    height: 44px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    width: 90%;
    background-image: url(${logoutIcon});
    background-repeat: no-repeat;
    background-position: 37% 10px;
    background-size: 20px;
`

export const BottomNavigation = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`