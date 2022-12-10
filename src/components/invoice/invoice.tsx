import * as S from "./invoiceStyle"

import imgArrow from "@/assets/imgs/itemsOrdered/imgArrowLeft.svg"
import imgOptions from "@/assets/imgs/itemsOrdered/imgOptions.svg"
import { useNavigate } from "react-router-dom"
import InvoiceCard from "./invoiceCard/invoiceCard"
import { useEffect, useState } from "react"
import { getOrderById } from "../../products/order"

export default function Invoice() {
    const navigate = useNavigate()
    const [orderProduct, setOrderProduct] = useState({
        _id: "",
        orderId: "",
        orderDate: "",
        name: "",
        total: "",
        subTotal: "",
        upi: "",
        addressList: {
            _id: "",
            pinCode: 0,
            streetAddress: "",
            city: "",
            uf: "",
        },
        product: [
            {
                _id: "",
                name: "",
                paragraph: "",
                description: "",
                price: 0,
                subTotal: 0,
                safe: 0,
                discount: 0,
                image: "",
                ratings: 0,
                quantity: 0,
            }
        ],
        status: "",
    })
    const [id, setId] = useState("")
    useEffect(() => {
        // @ts-ignore
        let params = new URL(document.location).searchParams;
        // @ts-ignore
        setId(params.get("id"))
    }, [])
    useEffect(() => {
        getOrderById(id).then(res => setOrderProduct(res))
    }, [id])
    return (
        <S.InvoiceContainer>
            <S.InvoiceHeader>
                <S.InvoiceHeaderContent>
                    <S.ImgArrow src={imgArrow} alt="left arrow icon" onClick={() => navigate(-1)} />
                    <S.Title>Invoice</S.Title>
                </S.InvoiceHeaderContent>
                <S.ImgOptions src={imgOptions} alt="3 balls lined up vertically" />
            </S.InvoiceHeader>
            <S.OrderDescription>
                <S.OrderDetailsTitle>#{orderProduct.orderId}</S.OrderDetailsTitle>
                <S.OrderDateInfo>
                    <S.OrderParagraphInfo>Placed On</S.OrderParagraphInfo>
                    <S.OrderDateText>{orderProduct.orderDate}</S.OrderDateText>
                </S.OrderDateInfo>
            </S.OrderDescription>
            <S.ParagraphItems>{orderProduct.product && orderProduct.product.length} Item(s)</S.ParagraphItems>
            <S.InvoiceCards>
                {
                    orderProduct.product && orderProduct.product.map((item) => (
                        <InvoiceCard name={item.name} description={item.paragraph} price={item.price} quantity={item.quantity} />
                    ))
                }
            </S.InvoiceCards>
            <S.Separator></S.Separator>
            <S.OrderDetailsInfo>
                <S.OrderDetailsInfoTitle>Price Details</S.OrderDetailsInfoTitle>
                <S.Summary>
                    <S.OrderDetailsInfoParagraph>Sub Total</S.OrderDetailsInfoParagraph>
                    <S.OrderDetailsInfoPrice>${orderProduct.subTotal}</S.OrderDetailsInfoPrice>
                </S.Summary>
                <S.Summary>
                    <S.OrderDetailsInfoParagraph>Discount</S.OrderDetailsInfoParagraph>
                    <S.OrderDetailsInfoPrice>-$00.00</S.OrderDetailsInfoPrice>
                </S.Summary>
                <S.Summary>
                    <S.OrderDetailsInfoParagraph>Delivery Fee</S.OrderDetailsInfoParagraph>
                    <S.OrderDetailsInfoPrice>-$0.00</S.OrderDetailsInfoPrice>
                </S.Summary>
                <S.Summary>
                    <S.OrderDetailsInfoResult>Grand Total</S.OrderDetailsInfoResult>
                    <S.OrderDetailsInfoPriceResult>${orderProduct.total}</S.OrderDetailsInfoPriceResult>
                </S.Summary>
            </S.OrderDetailsInfo>
            <S.DivButtonDownload>
                <S.ButtonDownload>Download Invoice</S.ButtonDownload>
            </S.DivButtonDownload>
        </S.InvoiceContainer>
    )
}