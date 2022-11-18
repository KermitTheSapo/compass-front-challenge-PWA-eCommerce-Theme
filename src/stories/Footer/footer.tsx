import facebook from "../../assets/imgs/footer/facebook.svg"
import instagram from "../../assets/imgs/footer/instagram.svg"
import twitter from "../../assets/imgs/footer/twitter.svg"
import youtube from "../../assets/imgs/footer/youtube.svg"
import location from "../../assets/imgs/footer/location.svg"

import * as S from "./footerStyle"
import { Reset } from "../../assets/styles/reset"
export const Footer = () => (
    <S.FooterContainer>
        <Reset />
        <S.FooterContent>
            <S.Category>
                <S.CategoryName>Shop by Category</S.CategoryName>
                <S.CategoryList>
                    <S.CategoryItem><S.LinkItem href="/error">Skincare</S.LinkItem></S.CategoryItem>
                    <S.CategoryItem><S.LinkItem href="/error">Personal Care</S.LinkItem></S.CategoryItem>
                    <S.CategoryItem><S.LinkItem href="/error">Handbags</S.LinkItem></S.CategoryItem>
                    <S.CategoryItem><S.LinkItem href="/error">Apparels</S.LinkItem></S.CategoryItem>
                    <S.CategoryItem><S.LinkItem href="/error">Watches</S.LinkItem></S.CategoryItem>
                    <S.CategoryItem><S.LinkItem href="/error">Eye Wear</S.LinkItem></S.CategoryItem>
                    <S.CategoryItem><S.LinkItem href="/error">Jewellery</S.LinkItem></S.CategoryItem>
                </S.CategoryList>
            </S.Category>
            <S.Policy>
                <S.PolicyName>Policy</S.PolicyName>
                <S.PolicyList>
                    <S.PolicyItem><S.LinkItem href="/error">Return</S.LinkItem></S.PolicyItem>
                    <S.Border></S.Border>
                    <S.PolicyItem><S.LinkItem href="/error">Terms of use</S.LinkItem></S.PolicyItem>
                    <S.Border></S.Border>
                    <S.PolicyItem><S.LinkItem href="/error">Sitemap</S.LinkItem></S.PolicyItem>
                    <S.Border></S.Border>
                    <S.PolicyItem><S.LinkItem href="/error">Security</S.LinkItem></S.PolicyItem>
                    <S.Border></S.Border>
                    <S.PolicyItem><S.LinkItem href="/error">Privacy</S.LinkItem></S.PolicyItem>
                    <S.Border></S.Border>
                    <S.PolicyItem><S.LinkItem href="/error">EPR Compliance</S.LinkItem></S.PolicyItem>
                </S.PolicyList>
            </S.Policy>
            <S.About>
                <S.AboutName>About</S.AboutName>
                <S.AboutList>
                    <S.AboutItem><S.LinkItem href="/error">Contact Us</S.LinkItem></S.AboutItem>
                    <S.Border></S.Border>
                    <S.AboutItem><S.LinkItem href="/error">About Us</S.LinkItem></S.AboutItem>
                    <S.Border></S.Border>
                    <S.AboutItem><S.LinkItem href="/error">Careers</S.LinkItem></S.AboutItem>
                    <S.Border></S.Border>
                    <S.AboutItem><S.LinkItem href="/error">Press</S.LinkItem></S.AboutItem>
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
    </S.FooterContainer>
);