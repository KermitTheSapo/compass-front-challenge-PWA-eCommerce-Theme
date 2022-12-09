import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import bannerTwo from "@/assets/imgs/about/bannerTwo.png"
import bannerThree from "@/assets/imgs/about/bannerThree.png"
import bannerFour from "@/assets/imgs/about/bannerFour.png"
import * as S from "./aboutStyle"

export default function About() {
    return (
        <>
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
                    <S.ImgDescription src={bannerTwo} alt="" />
                </S.Description>
                <S.DescriptionLeft>
                    <S.ImgDescription src={bannerThree} alt="" />
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
                    <S.ImgDescription src={bannerFour} alt="" />
                </S.Description>
            </S.AboutContainer>
            <Footer />
        </>
    )
}