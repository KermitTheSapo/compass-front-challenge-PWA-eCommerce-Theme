import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../products/products";
import * as S from "./searchBarStyle"

type Props = {
    input: string
}

export default function SearchBar({ input }: Props) {
    const [loading, setLoading] = useState(true)
    const [noResult, setNoResult] = useState(false)
    const navigate = useNavigate();
    const [arrayFiltrado, setArrayFiltrado] = useState([{
        id: "",
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
        id: "",
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
        getProducts("36", "0").then((res) => { setProductsList(res.results); setLoading(false) })
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
            {loading && <p>Loading...</p>}
            {!loading ? arrayFiltrado.map((item, key) => (
                <S.ProductDiv key={key} onClick={() => navigate(`/product?id=${item.id}`)}>
                    <S.ImgProduct src={item.image} alt="image of a product" />
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
