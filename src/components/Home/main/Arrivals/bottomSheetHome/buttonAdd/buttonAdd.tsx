import * as S from "./buttonAddStyle"

type Props = {
    name: string;
    description: string;
    price: string;
    img: string;
}

export default function ButtonAdd({ name, description, price, img }: Props) {
    const addItemLocalStorage = (name: String, description: String, price: String, img: String) => {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push({ name, description, price, img })
        localStorage.setItem('items', JSON.stringify(items))
        alert("Item added to cart")
    }
    return (
        <S.ButtonAdd onClick={() => { addItemLocalStorage(name, description, price, img) }}>Add to Bag</S.ButtonAdd>
    )
}