import * as S from "./itemsOrderedStyle"

import imgArrowLeft from "@/assets/imgs/itemsOrdered/imgArrowLeft.svg"
import imgOptions from "@/assets/imgs/itemsOrdered/imgOptions.svg"
import { useNavigate } from "react-router-dom"
import CardOrder from "./cardOrder/cardOrder"
import { useState } from "react"
import BottomSheetOrder from "./bottomSheetOrder/bottomSheetOrder"

export default function ItemsOrdered() {
    const navigate = useNavigate()
    const [showBottomSheetOrder, setShowBottomSheetOrder] = useState(false)
    return (
        <S.ItemsOrderedContainer>
            <S.ItemsOrderedHeader>
                <S.DivContent>
                    <S.ImgArrow src={imgArrowLeft} alt="" onClick={() => navigate(-1)} />
                    <S.ItemsOrderedTitle>Items Ordered</S.ItemsOrderedTitle>
                </S.DivContent>
                <S.ImgOptions src={imgOptions} alt="" onClick={() => setShowBottomSheetOrder(true)} />
            </S.ItemsOrderedHeader>
            <S.OrderDescription>
                <S.OrderDetails>
                    <S.OrderDetailsTitle>Order #874522648</S.OrderDetailsTitle>
                    <S.OrderDateInfo>
                        <S.OrderParagraphInfo>Placed On</S.OrderParagraphInfo>
                        <S.OrderDateText>September 5, 2020</S.OrderDateText>
                    </S.OrderDateInfo>
                </S.OrderDetails>
                <S.OrderStatus>
                    <S.BtnStatus>Completed</S.BtnStatus>
                </S.OrderStatus>
            </S.OrderDescription>
            <S.ProductsParagraph>2 Product(s)</S.ProductsParagraph>
            <S.Products>
                <CardOrder />
                <CardOrder />
                <CardOrder />
            </S.Products>
            <S.Separator></S.Separator>
            <S.OrderDetailsInfo>
                <S.OrderDetailsInfoTitle>Order Details</S.OrderDetailsInfoTitle>
                <S.Summary>
                    <S.OrderDetailsInfoParagraph>Sub Total</S.OrderDetailsInfoParagraph>
                    <S.OrderDetailsInfoPrice>$159.69</S.OrderDetailsInfoPrice>
                </S.Summary>
                <S.Summary>
                    <S.OrderDetailsInfoParagraph>Discount</S.OrderDetailsInfoParagraph>
                    <S.OrderDetailsInfoPrice>-$13.40</S.OrderDetailsInfoPrice>
                </S.Summary>
                <S.Summary>
                    <S.OrderDetailsInfoParagraph>Delivery Fee</S.OrderDetailsInfoParagraph>
                    <S.OrderDetailsInfoPrice>-$0.00</S.OrderDetailsInfoPrice>
                </S.Summary>
                <S.Summary>
                    <S.OrderDetailsInfoResult>Grand Total</S.OrderDetailsInfoResult>
                    <S.OrderDetailsInfoPriceResult>$146.29</S.OrderDetailsInfoPriceResult>
                </S.Summary>
            </S.OrderDetailsInfo>
            <S.Separator></S.Separator>
            <S.AddressDetails>
                <S.AddressDetailsTitle>Address Details</S.AddressDetailsTitle>
                <S.DivContentName>
                    <S.AddressName>Vincent Lobo</S.AddressName>
                    <S.Place>Home</S.Place>
                </S.DivContentName>
                <S.AddressText>3068  Woodlawn Drive</S.AddressText>
                <S.CityText>Milwaukee</S.CityText>
                <S.ZipCodeText>414-672-5388</S.ZipCodeText>
            </S.AddressDetails>
            <S.ReorderButton>Reorder</S.ReorderButton>
            <S.Separator></S.Separator>
            <S.PaymentDetails>
                <S.PaymentDetailsTitle>Payment Details</S.PaymentDetailsTitle>
                <S.PaymentParagraph>Cash on Delivery</S.PaymentParagraph>
            </S.PaymentDetails>
            {
                showBottomSheetOrder && <BottomSheetOrder setState={setShowBottomSheetOrder} />
            }
        </S.ItemsOrderedContainer >
    )
}