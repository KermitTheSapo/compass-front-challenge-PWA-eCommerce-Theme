import styled from "styled-components";
import accessories from "../../../../assets/imgs/home/main/makeup/accessories.png"
import skincare from "../../../../assets/imgs/home/main/makeup/skincare.png"
import facepacks from "../../../../assets/imgs/home/main/makeup/facepacks.png"

export const MakeupContainer = styled.section`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
`

export const Title = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
    margin-bottom: 13px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const Banners = styled.div`
    display: flex;
    flex-direction: column;
`

export const LifestyleDiv = styled.div`
    height: 145px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: url(${accessories});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 12px 16px;
    @media (min-width: 768px) {
        height: 400px;
        padding: 100px 42px;
    }
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 0.625rem;
    color: var(--brownMakeup);
    @media (min-width: 768px) {
        font-size: 1.875rem;
    }
`

export const Name = styled.h3`
    font-weight: 800;
    font-size: 1rem;
    line-height: 20px;
    color: var(--brownMakeup);
    width: 50%;
    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 3.25rem;
        line-height: 68px;
    }
    @media (max-width: 320px) {
        width: 80%;
    }
`

export const CirclePrimary = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28.6px;
    width: 26px;
    border-radius: 50%;
    background-color: var(--Brown14Makeup);
    @media (min-width: 768px) {
        display: none;
    }
`


export const Arrow = styled.img`
    @media (min-width: 768px) {
        width: 31.38px;
        height: 21.58px;
    }
`

export const LinkCirclePrimary = styled.a`
    width: 18%;
`
export const LinkCircle = styled.a`
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const BannersSecondary = styled.div`
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin-top: 40px;
    }
`

export const SkincareDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    background-image: url(${skincare});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 47%;
    height: 120px;
    border-radius: 8px;
    padding: 0 11px;
    @media (min-width: 768px) {
        height: 228px;
        padding: 26px 35px;
        width: 49%;
    }
`

export const NameSecondary = styled.h4`
    font-weight: 800;
    font-size: 0.875rem;
    color: var(--pinkMakeup);
    line-height: 16px;
    text-align: right;
    width: 60%;
    @media (min-width: 768px) {
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 52px;
    }

`

export const CircleSkincare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: var(--White50);
    @media (min-width: 768px) {
        height: 51px;
        width: 51px;
    }
`

export const FacePacksDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    background-image: url(${facepacks});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 47%;
    height: 120px;
    border-radius: 8px;
    padding: 0 11px;
    @media (min-width: 768px) {
        height: 228px;
        padding: 50px 42px;
        width: 49%;
    }
`

export const NameFacePacks = styled.h4`
    font-weight: 800;
    font-size: 0.875rem;
    color: var(--Primary);
    line-height: 16px;
    text-align: right;
    width: 50%;
    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 52px;
        width: 70%;
    }
    @media (max-width: 320px) {
        height: 60%;
        width: 70%;
    }
`

export const CircleFacepacks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28.6px;
    width: 26px;
    border-radius: 50%;
    background-color: var(--Primary16);
    @media (min-width: 768px) {
        height: 51px;
        width: 51px;
    }
`



// brownMakeup pinkMakeup