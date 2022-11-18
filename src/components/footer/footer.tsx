import * as S from "./footerStyle"

import arrowUp from "../../assets/imgs/footer/arrow-up.svg"
import arrowDown from "../../assets/imgs/footer/arrow-down.svg"
import facebook from "../../assets/imgs/footer/facebook.svg"
import instagram from "../../assets/imgs/footer/instagram.svg"
import twitter from "../../assets/imgs/footer/twitter.svg"
import youtube from "../../assets/imgs/footer/youtube.svg"
import location from "../../assets/imgs/footer/location.svg"

import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Footer() {
    // console.log(window.screen.width)
    const [showFooter, setShowFooter] = useState(true)
    const navigate = useNavigate()

    return (
        <S.FooterContainer>
            <S.MoreInfo>
                <S.AboutTitle>More about CORA’L</S.AboutTitle>
                <S.Arrow src={showFooter === true ? arrowUp : arrowDown} alt="" onClick={() => showFooter === true ? setShowFooter(false) : setShowFooter(true)} />
            </S.MoreInfo>
            {showFooter &&
                <S.FooterContent>
                    <S.Category>
                        <S.CategoryName>Shop by Category</S.CategoryName>
                        <S.CategoryList>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Skincare</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Personal Care</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Handbags</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Apparels</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Watches</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Eye Wear</S.LinkItem></S.CategoryItem>
                            <S.CategoryItem><S.LinkItem onClick={() => navigate("/")}>Jewellery</S.LinkItem></S.CategoryItem>
                        </S.CategoryList>
                    </S.Category>
                    <S.Policy>
                        <S.PolicyName>Policy</S.PolicyName>
                        <S.PolicyList>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/")}>Return</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/")}>Terms of use</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/")}>Sitemap</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/")}>Security</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/")}>Privacy</S.LinkItem></S.PolicyItem>
                            <S.Border></S.Border>
                            <S.PolicyItem><S.LinkItem onClick={() => navigate("/")}>EPR Compliance</S.LinkItem></S.PolicyItem>
                        </S.PolicyList>
                    </S.Policy>
                    <S.About>
                        <S.AboutName>About</S.AboutName>
                        <S.AboutList>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/")}>Contact Us</S.LinkItem></S.AboutItem>
                            <S.Border></S.Border>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/")}>About Us</S.LinkItem></S.AboutItem>
                            <S.Border></S.Border>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/")}>Careers</S.LinkItem></S.AboutItem>
                            <S.Border></S.Border>
                            <S.AboutItem><S.LinkItem onClick={() => navigate("/")}>Press</S.LinkItem></S.AboutItem>
                        </S.AboutList>
                    </S.About>
                    <S.BorderHorizontal></S.BorderHorizontal>
                    <S.Details>
                        <S.Logos>
                            <S.CircleFigure>
                                <S.LogoImg src={facebook} alt="" />
                            </S.CircleFigure>
                            <S.CircleFigure>
                                <S.LogoImg src={instagram} alt="" />
                            </S.CircleFigure>
                            <S.CircleFigure>
                                <S.LogoImg src={twitter} alt="" />
                            </S.CircleFigure>
                            <S.CircleFigure>
                                <S.LogoImg src={youtube} alt="" />
                            </S.CircleFigure>
                        </S.Logos>
                        <S.Localization>
                            <S.ImgLocation src={location} alt="" />
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