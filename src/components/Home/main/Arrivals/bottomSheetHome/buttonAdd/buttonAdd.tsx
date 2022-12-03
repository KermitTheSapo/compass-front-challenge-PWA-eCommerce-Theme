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
    const addItemLocalStorage = () => {
        const product = {
            name: name,
            paragraph: description,
            description: description,
            price: price,
            safe: safe,
            discount: discount,
            link: "asdf",
            imgAlt: "asdfasd",
            image: img,
            ratings: ratings
        }
        postBag(product).then((res) => { console.log(res) })
        alert("Item added to cart")
    }
    return (
        <S.ButtonAdd onClick={() => { addItemLocalStorage() }}>Add to Bag</S.ButtonAdd>
    )
}