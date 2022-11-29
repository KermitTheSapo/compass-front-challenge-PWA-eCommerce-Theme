import * as S from "./orderStyle"
import arrow from "@/assets/imgs/bag/back.svg"
import { useNavigate } from "react-router-dom"
import pencilBtn from "@/assets/imgs/order/pencil-btn.svg"
import DeliveryCard from "./deliveryCard/deliveryCard"
import { useState } from "react"
import BottomSheetAddress from "./bottomSheetAddress/bottomSheetAddress"


export default function Order() {
    const navigate = useNavigate()
    const [sheetEditAddress, setSheetEditAddress] = useState(false)
    return (
        <S.OrderContainer>
            <S.OrderHeader>
                <S.ImgArrowBack onClick={() => navigate(-1)} src={arrow} alt="" />
                <S.OrderTitle>Order Summary</S.OrderTitle>
            </S.OrderHeader>
            <S.AddressDiv>
                <S.AddressTitle>Deliver To</S.AddressTitle>
                <S.AddressInfo>
                    <S.AddressContent>
                        <S.AddressInfoTitle>Ruby S Snively</S.AddressInfoTitle>
                        <S.AddressInfoDescription>1460 Jenric Lane, Ashmor Drive</S.AddressInfoDescription>
                    </S.AddressContent>
                    <S.AddressEditBtn onClick={() => setSheetEditAddress(!sheetEditAddress)} src={pencilBtn} alt="" />
                </S.AddressInfo>
            </S.AddressDiv>
            <S.DeliveryDiv>
                <S.DeliveryTitle>Expected Delivery</S.DeliveryTitle>
                <DeliveryCard />
                <DeliveryCard />
            </S.DeliveryDiv>
            <S.OrderDetails>
                <S.OrderDetailsTitle>Order Details</S.OrderDetailsTitle>
                <S.Summary>
                    <S.DivList>
                        <S.ListTitle>Sub Total</S.ListTitle>
                        <S.ListPrice>$119.69</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListTitle>Discount</S.ListTitle>
                        <S.ListPrice>-$13.40</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListTitle>Delivery Fee</S.ListTitle>
                        <S.ListPrice>-$0.00</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListResult>Grand Total</S.ListResult>
                        <S.ListResultValue>$106.29</S.ListResultValue>
                    </S.DivList>
                </S.Summary>
            </S.OrderDetails>
            <S.DivBtnFooter>
                <S.ButtonPayments onClick={() => navigate("/payments")} >Proceed to Payments</S.ButtonPayments>
            </S.DivBtnFooter>
            {sheetEditAddress && <BottomSheetAddress state={sheetEditAddress} setState={setSheetEditAddress} />}
        </S.OrderContainer>
    )
}