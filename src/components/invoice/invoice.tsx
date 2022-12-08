import * as S from "./invoiceStyle"

import imgArrow from "@/assets/imgs/itemsOrdered/imgArrowLeft.svg"
import imgOptions from "@/assets/imgs/itemsOrdered/imgOptions.svg"
import { useNavigate } from "react-router-dom"
import InvoiceCard from "./invoiceCard/invoiceCard"

export default function Invoice() {
    const navigate = useNavigate()
    return (
        <S.InvoiceContainer>
            <S.InvoiceHeader>
                <S.InvoiceHeaderContent>
                    <S.ImgArrow src={imgArrow} alt="" onClick={() => navigate(-1)} />
                    <S.Title>Invoice</S.Title>
                </S.InvoiceHeaderContent>
                <S.ImgOptions src={imgOptions} alt="" />
            </S.InvoiceHeader>
            <S.OrderDescription>
                <S.OrderDetailsTitle>#874522648</S.OrderDetailsTitle>
                <S.OrderDateInfo>
                    <S.OrderParagraphInfo>Placed On</S.OrderParagraphInfo>
                    <S.OrderDateText>September 5, 2020</S.OrderDateText>
                </S.OrderDateInfo>
            </S.OrderDescription>
            <S.ParagraphItems>3 Item(s)</S.ParagraphItems>
            <S.InvoiceCards>
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
            </S.InvoiceCards>
            <S.Separator></S.Separator>
            <S.OrderDetailsInfo>
                <S.OrderDetailsInfoTitle>Price Details</S.OrderDetailsInfoTitle>
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
            <S.DivButtonDownload>
                <S.ButtonDownload>Download Invoice</S.ButtonDownload>
            </S.DivButtonDownload>
        </S.InvoiceContainer>
    )
}