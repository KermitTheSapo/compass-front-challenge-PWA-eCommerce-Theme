import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import bannerTwo from "@/assets/imgs/about/bannerTwo.png"
import bannerThree from "@/assets/imgs/about/bannerThree.png"
import bannerFour from "@/assets/imgs/about/bannerFour.png"
import * as S from "./aboutStyle"
import { Helmet } from "react-helmet"

export default function About() {
    return (
        <>
            <Helmet>
                <title>Coral'l | About</title>
            </Helmet>
            <Header />
            <S.AboutContainer>
                <S.BannerDiv>
                    <S.BannerContent>
                        <S.BannerTitle>About</S.BannerTitle>
                        <S.BannerParagraph>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </S.BannerParagraph>
                    </S.BannerContent>
                </S.BannerDiv>
                <S.AboutDiv>
                    <S.AboutTitle>About</S.AboutTitle>
                    <S.AboutParagraph>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </S.AboutParagraph>
                </S.AboutDiv>
                <S.Description>
                    <S.DescriptionContent>
                        <S.DescriptionTitle>About</S.DescriptionTitle>
                        <S.DescriptionParagraph>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </S.DescriptionParagraph>
                    </S.DescriptionContent>
                    <S.ImgDescription src={bannerTwo} alt="several bags stacked" />
                </S.Description>
                <S.DescriptionLeft>
                    <S.ImgDescription src={bannerThree} alt="a person with a phone showing the time indicating 16:47" />
                    <S.DescriptionContent>
                        <S.DescriptionTitle>About</S.DescriptionTitle>
                        <S.DescriptionParagraph>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </S.DescriptionParagraph>
                    </S.DescriptionContent>
                </S.DescriptionLeft>
                <S.Description>
                    <S.DescriptionContent>
                        <S.DescriptionTitle>About</S.DescriptionTitle>
                        <S.DescriptionParagraph>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </S.DescriptionParagraph>
                    </S.DescriptionContent>
                    <S.ImgDescription src={bannerFour} alt="an open sunglasses on the floor" />
                </S.Description>
            </S.AboutContainer>
            <Footer />
        </>
    )
}