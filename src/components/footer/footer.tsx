import * as S from "./footerStyle"

import arrowUp from "@/assets/imgs/footer/arrow-up.svg"
import arrowDown from "@/assets/imgs/footer/arrow-down.svg"
import facebook from "@/assets/imgs/footer/facebook.svg"
import instagram from "@/assets/imgs/footer/instagram.svg"
import twitter from "@/assets/imgs/footer/twitter.svg"
import youtube from "@/assets/imgs/footer/youtube.svg"
import location from "@/assets/imgs/footer/location.svg"

import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Footer() {
    const [showFooter, setShowFooter] = useState(true)
    const navigate = useNavigate()

    return (
        <S.FooterContainer>
            <S.MoreInfo>
                <S.AboutTitle>More about CORA’L</S.AboutTitle>
                <S.Arrow src={showFooter === true ? arrowUp : arrowDown} alt="a gray up or down arrow" onClick={() => showFooter === true ? setShowFooter(false) : setShowFooter(true)} />
            </S.MoreInfo>
            {showFooter &&
                <S.FooterContent>
                    <S.Category>
                        <S.CategoryName>Shop by Category</S.CategoryName>
                        <S.CategoryList>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/skincare")}>Skincare</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/error")}>Personal Care</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/handbags")}>Handbags</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/apparels")}>Apparels</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/watches")}>Watches</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/eyewear")}>Eye Wear</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/jewellery")}>Jewellery</S.LinkItem></S.CategoryItem>
                        </S.CategoryList>
                    </S.Category>
                    <S.Policy>
                        <S.PolicyName>Policy</S.PolicyName>
                        <S.PolicyList>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/error")}>Return</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/error")}>Terms of use</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/error")}>Sitemap</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/error")}>Security</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/error")}>Privacy</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/error")}>EPR Compliance</S.LinkItem></S.PolicyItem>
                        </S.PolicyList>
                    </S.Policy>
                    <S.About>
                        <S.AboutName>About</S.AboutName>
                        <S.AboutList>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/error")}>Contact Us</S.LinkItem></S.AboutItem>
                            <S.Border></S.Border>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/error")}>About Us</S.LinkItem></S.AboutItem>
                            <S.Border></S.Border>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/error")}>Careers</S.LinkItem></S.AboutItem>
                            <S.Border></S.Border>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/error")}>Press</S.LinkItem></S.AboutItem>
                        </S.AboutList>
                    </S.About>
                    <S.BorderHorizontal></S.BorderHorizontal>
                    <S.Details>
                        <S.Logos>
                            <S.CircleFigure onClick={() => navigate("/error")}>
                                <S.LogoImg src={facebook} alt="facebook icon, gray with the letter F" />
                            </S.CircleFigure>
                            <S.CircleFigure onClick={() => navigate("/error")}>
                                <S.LogoImg src={instagram} alt="instagram icon" />
                            </S.CircleFigure>
                            <S.CircleFigure onClick={() => navigate("/error")}>
                                <S.LogoImg src={twitter} alt="twitter icon, a little bird" />
                            </S.CircleFigure>
                            <S.CircleFigure onClick={() => navigate("/error")}>
                                <S.LogoImg src={youtube} alt="the youtube icon" />
                            </S.CircleFigure>
                        </S.Logos>
                        <S.Localization>
                            <S.ImgLocation src={location} alt="the location symbol" />
                            <S.LocalizationName>United States</S.LocalizationName>
                        </S.Localization>
                        <S.Copyright>
                            <S.ParagraphCopy>© 2021 | Cora Leviene All Rights Reserved</S.ParagraphCopy>
                        </S.Copyright>
                    </S.Details>
                </S.FooterContent>
            }
        </S.FooterContainer>

    );
}