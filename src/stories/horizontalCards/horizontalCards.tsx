import { Reset } from "../../assets/styles/reset"
import * as S from "./horizontalCardsStyle"
import minus from "../../assets/imgs/productPage/minus.svg"
import plus from "../../assets/imgs/productPage/plus.svg"
import image from "../assets/horizontalCards/image.png"
import deleteImg from "../assets/horizontalCards/cross-small.svg"
import useState from 'storybook-addon-state';

export default function HorizontalCards() {
    const [quantity, setQuantity] = useState("0", 1);
    // @ts-ignore
    const [price, setPrice] = useState("1", 54.69);
    return (
        <div>
            <Reset />
            <S.CardVertical>
                <S.CardVerticalImgDiv>
                    <S.CardImg src={image} alt="an orange leather bag" />
                </S.CardVerticalImgDiv>
                <S.ProductDescription>
                    <S.ProductTitle>PRADA</S.ProductTitle>
                    <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
                    <p>Qty- {quantity}</p>
                    <S.QuantityCounter>
                        <S.Img onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)} src={minus} alt="a plus icon" />
                        <S.QuantityNumber>{quantity}</S.QuantityNumber>
                        <S.Img onClick={() => quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity)} src={plus} alt="a minus icon" />
                    </S.QuantityCounter>
                </S.ProductDescription>
                <S.PriceDeleteDiv>
                    <S.BtnDelete src={deleteImg} alt="an X icon" />
                    <S.PriceText>${price * quantity}</S.PriceText>
                </S.PriceDeleteDiv>
            </S.CardVertical>
        </div>
    )
}


