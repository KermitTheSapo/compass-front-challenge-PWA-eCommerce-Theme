import { getBag } from "../../../products/bag"
import { useEffect, useState } from "react"
import SummaryProduct from "../summaryProduct/summaryProduct"
import * as S from "./orderSummaryAndDetailsStyle"

export default function OrderSummaryAndDetails() {
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
        safe: 0,
        quantity: 0
    }])
    const [allPrice, setAllPrice] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    useEffect(() => {
        getBag().then((res) => setProductsList(res))
        let Total = 0
        productsList.map((product) => {
            Total = Total + (product.price * product.quantity)
        })
        setAllPrice(Total)
        let subTotal = 0
        productsList.map((product) => {
            subTotal = subTotal + product.price
        })
        setSubTotal(subTotal)
    }, [productsList])
    return (
        <S.SummaryAndDetails>
            <S.OrderSummaryDiv>
                <S.OrderSummaryHeader>
                    <S.OrderSummaryTitle>Order Summary</S.OrderSummaryTitle>
                </S.OrderSummaryHeader>
                <S.Separator></S.Separator>
                <S.OrderSummaryContent>
                    {productsList.map((item) => (
                        <SummaryProduct productTitle={item.name} productParagraph={item.description} img={item.image} quantity={item.quantity} />
                    ))}
                </S.OrderSummaryContent>
            </S.OrderSummaryDiv>
            <S.OrderDetailsDiv>
                <S.OrderDetailsHeader>
                    <S.OrderDetailsTitle>Order Details</S.OrderDetailsTitle>
                </S.OrderDetailsHeader>
                <S.Separator></S.Separator>
                <S.OrderDetailsContent>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Sub Total</S.OrderLabel>
                        <S.OrderPrice>${subTotal}</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Discount</S.OrderLabel>
                        <S.OrderPrice>-$0.00</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Delivery Fee</S.OrderLabel>
                        <S.OrderPrice>-$0.00</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderResult>Grand Total</S.OrderResult>
                        <S.OrderResult>${allPrice}</S.OrderResult>
                    </S.OrderDetailsList>
                </S.OrderDetailsContent>
            </S.OrderDetailsDiv>
        </S.SummaryAndDetails>
    )
}