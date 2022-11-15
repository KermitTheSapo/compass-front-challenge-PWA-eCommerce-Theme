import * as S from "./footerStyle"

import arrowUp from "../../assets/imgs/footer/arrow-up.svg"
import arrowDown from "../../assets/imgs/footer/arrow-down.svg"
import { useState } from "react";

export default function Footer() {
    // console.log(window.screen.width)
    const [showFooter, setShowFooter] = useState(false)

    return (
        <S.FooterContainer>
            <S.MoreInfo>
                <S.AboutTitle>More about CORA’L</S.AboutTitle>
                <S.Arrow src={showFooter === true ? arrowUp : arrowDown} alt="" onClick={() => showFooter === true ? setShowFooter(false) : setShowFooter(true)} />
            </S.MoreInfo>
            {/* {showFooter &&
                <div>
                    <h1>sss</h1>
                </div>} */}
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
                <div>
                    <h1>aasdf</h1>
                </div>
                <div>

                </div>
                <div>

                </div>
            </S.FooterContent>
        </S.FooterContainer>
    );
}