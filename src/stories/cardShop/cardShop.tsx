import { Reset } from "../../assets/styles/reset"
import * as S from "./cardShopStyle"

import productImg from "../assets/cardShop/productImg.png"
import arrowRight from "../assets/cardShop/arrowRight.svg"

export default function CardShop() {
    return (
        <S.CardShopContainer>
            <Reset />
            <S.CardCart>
                <S.CardContent>
                    <S.CardImg>
                        <S.ImgProduct src={productImg} alt="" />
                    </S.CardImg>
                    <S.CardInformation>
                        <S.ProductTitle>PRADA</S.ProductTitle>
                        <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
                        <S.Quantity>Qnt</S.Quantity>
                        <S.CardValues>
                            <S.ProductPrice>$54.69</S.ProductPrice>
                            <S.ProductSafe>$69.99</S.ProductSafe>
                            <S.ProductDiscount>20% OFF</S.ProductDiscount>
                        </S.CardValues>
                    </S.CardInformation>
                </S.CardContent>
                <S.Separator></S.Separator>
                <S.ButtonsActionDiv>
                    <S.ButtonAction>
                        <S.ButtonActionText>Move to Wishlist</S.ButtonActionText>
                    </S.ButtonAction>
                    <S.SeparatorVertical></S.SeparatorVertical>
                    <S.ButtonAction>
                        <S.ButtonActionText>Remove</S.ButtonActionText>
                    </S.ButtonAction>
                </S.ButtonsActionDiv>
            </S.CardCart>
            <S.TextFieldDiv>
                <S.InputPinCode type="text" placeholder="Enter valid pincode" />
                <S.CheckBtn>Check</S.CheckBtn>
            </S.TextFieldDiv>
            <S.OrderCard>
                <S.DivInformation>
                    <S.ParagraphDate>September 5, 2020</S.ParagraphDate>
                    <S.Code>#874522648</S.Code>
                    <S.Price>$218.50</S.Price>
                </S.DivInformation>
                <S.ImgDivArrow>
                    <S.ImgArrow src={arrowRight} alt="" />
                </S.ImgDivArrow>
            </S.OrderCard>
        </S.CardShopContainer>
    )
}

