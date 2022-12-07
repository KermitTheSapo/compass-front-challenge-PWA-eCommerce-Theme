import ItemArrival from "../../../components/Home/main/Arrivals/itemArrival/itemArrival";
import { useEffect, useState } from "react"
import { getProducts } from "../../../products/products";
import * as S from "./searchBarStyle"

type Props = {
    input: string
}

export default function SearchBar({ input }: Props) {
    const [loading, setLoading] = useState(true)
    const [noResult, setNoResult] = useState(false)

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
                productsList.filter((item) => item.name.includes(input.toLowerCase())).length === 0 ? setNoResult(true) : setNoResult(false)
            } else {
                setArrayFiltrado(productsList)
            }
        }
    }, [input, productsList])

    return (
        <S.SearchBar>
            {loading && <h1>Loading...</h1>}
            {!loading ? arrayFiltrado.map((item, key) => (
                <S.ProductDiv>
                    <S.ImgProduct src={item.image} alt="" />
                    <S.ProductInfo>
                        <S.ProductName>{item.name}</S.ProductName>
                        <S.ProductParagraph>{item.paragraph}</S.ProductParagraph>
                        <S.ProductPrice>${item.price.toFixed(2)}</S.ProductPrice>
                    </S.ProductInfo>
                </S.ProductDiv>)) : null}
            {
                noResult && <S.ParagraphError>Whoops! We couldn't find what you’re looking for. Try something else.</S.ParagraphError>
            }
        </S.SearchBar>
    )
}
