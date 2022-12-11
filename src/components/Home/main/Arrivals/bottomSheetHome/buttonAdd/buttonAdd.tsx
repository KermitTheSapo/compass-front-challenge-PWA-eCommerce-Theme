import { postBag } from "../../../../../../products/bag";
import * as S from "./buttonAddStyle"

type Props = {
    name: string;
    description: string;
    price: number;
    img: string;
    safe: number;
    discount: number;
    ratings: number;
}

export default function ButtonAdd({ name, description, price, img, safe, discount, ratings }: Props) {
    const addToApiStorage = () => {
        const product = {
            name: name,
            paragraph: description,
            description: description,
            price: price,
            safe: safe,
            discount: discount,
            link: "Link",
            imgAlt: "imgAlt",
            image: img,
            ratings: ratings,
            quantity: 1,
            subTotal: price
        }
        postBag(product)
        alert("Item added to cart")
    }
    return (
        <S.ButtonAdd onClick={() => { addToApiStorage() }}>Add to Bag</S.ButtonAdd>
    )
}