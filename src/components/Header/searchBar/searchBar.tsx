import ItemArrival from "../../../components/Home/main/Arrivals/itemArrival/itemArrival";
import { useEffect, useState } from "react"
import { getProducts } from "../../../products/products";
import * as S from "./searchBarStyle"

type Props = {
    input: string
}

export default function SearchBar({ input }: Props) {
    const [loading, setLoading] = useState(true)
    const [arrayFiltrado, setArrayFiltrado] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        discount: 0,
        safe: 0
    }])
    const [productsList, setProductsList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        discount: 0,
        safe: 0
    }])

    useEffect(() => {
        getProducts().then((res) => { setProductsList(res); setLoading(false) })
    }, [])

    useEffect(() => {
        if (productsList.length !== 0) {
            if (input) {
                setArrayFiltrado(productsList.filter((item) => item.name.includes(input.toLowerCase())))
            } else {
                setArrayFiltrado(productsList)
            }
        }
    }, [input, productsList])

    return (
        <S.SearchBar>
            {loading && <h1>Loading...</h1>}
            {!loading ? arrayFiltrado.map((item, key) => (
                <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} ratings={item.ratings} information={false} safe={item.safe} discount={item.discount} isButtonAddTrue={false} />
            )) : null}
        </S.SearchBar>
    )
}