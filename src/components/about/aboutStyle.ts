import styled from "styled-components";
import bannerOne from "@/assets/imgs/about/bannerOne.png"

export const AboutContainer = styled.div`
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BannerDiv = styled.div`
    height: 401px;
    background-image: url(${bannerOne});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export const BannerContent = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        align-items: flex-end;
    }
`

export const BannerTitle = styled.h1`
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 60.51px;
    letter-spacing: 4.55px;
    color: var(--Dark);
    text-transform: uppercase;
`
export const BannerParagraph = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    width: 65%;
    line-height: 20px;
    @media (max-width: 768px) {
        text-align: right;
    }
`

export const AboutDiv = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 15vh;
    @media (max-width: 768px) {
        height: 30vh;
        width: 100%;
        align-items: center;
    }
`

export const AboutTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--TypeHighEmphasis);
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`
export const AboutParagraph = styled.p`
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    line-height: 20px;
    color: var(--TypeLowEmphasis);
    @media (max-width: 768px) {
        text-align: left;
        width: 90%;
    }
`

export const DescriptionLeft = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height:40vh;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 15px;
    }
`
export const Description = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height:40vh;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`
export const DescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`
export const DescriptionTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--TypeHighEmphasis);
`
export const DescriptionParagraph = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    width: 85%;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const ImgDescription = styled.img`
    @media (max-width: 768px) {
        width: 95%;
    }
`