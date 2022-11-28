import * as S from "./cardStyle"
import img from "@/assets/imgs/bag/coach.png"
export default function Card() {
    return (
        <S.CardContainer>
            <S.CardInfo>
                <S.ImgProduct src={img} alt="" />
                <S.Information>
                    <S.ProductTitle>Coach</S.ProductTitle>
                    <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
                    <S.DivQuantity>
                        <S.QntParagraph>Qty:</S.QntParagraph>
                        <S.SelectOptions name="" id="">
                            <option value="">1</option>
                        </S.SelectOptions>
                    </S.DivQuantity>
                    <S.Values>
                        <S.Price>$54.69</S.Price>
                        <S.Safe>$69.99</S.Safe>
                        <S.Discount>20% OFF</S.Discount>
                    </S.Values>
                </S.Information>
            </S.CardInfo>
            <S.Separator></S.Separator>
            <S.Actions>
                <S.ActionText>Move to Wishlist</S.ActionText>
                <S.VerticalSeparator></S.VerticalSeparator>
                <S.ActionText>Remove</S.ActionText>
            </S.Actions>
        </S.CardContainer>
    )
}