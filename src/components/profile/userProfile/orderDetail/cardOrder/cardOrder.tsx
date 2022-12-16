import { postBag } from "../../../../../products/bag";
import * as S from "./cardOrderStyle"

type Props = {
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    safe: number;
    discount: number;
    ratings: number;
}

export default function CardOrder({ image, name, description, price, quantity, safe, discount, ratings }: Props) {
    const addToBag = () => {
        const Bag = {
            name: name,
            paragraph: description,
            description: description,
            price: price,
            subTotal: price,
            safe: safe,
            discount: discount,
            link: "Link",
            imgAlt: "ImgAlt",
            image: image,
            ratings: ratings,
            quantity: quantity
        }
        postBag(Bag)
        alert("add to bag!")
    }
    return (
        <S.CardOrderContainer>
            <S.ImgProduct src={image} alt="image of a product" />
            <S.DivContent>
                <S.ProductTitle>{name}</S.ProductTitle>
                <S.ProductDescription>{description}</S.ProductDescription>
                <S.ProductPrice>${price}</S.ProductPrice>
                <S.ProductQuantity>Qty- {quantity}</S.ProductQuantity>
                <S.AddToBagBtn onClick={() => addToBag()}>Add to bag</S.AddToBagBtn>
            </S.DivContent>
        </S.CardOrderContainer>
    )
}