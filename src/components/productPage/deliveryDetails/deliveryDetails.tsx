import * as S from "./deliveryDetailsStyle"

export default function DeliveryDetails() {
    return (
        <S.DeliveryDetails>
            <S.DeliveryContent>
                <S.DeliveryTitle>Delivery Details</S.DeliveryTitle>
                <S.DeliveryParagraph>Check estimated delivery date/pickup option.</S.DeliveryParagraph>
            </S.DeliveryContent>
            <S.DeliveryPinCode>
                <S.DeliveryInput type="text" placeholder="Enter Valid Pincode" />
                <S.DeliveryBtn>Check</S.DeliveryBtn>
            </S.DeliveryPinCode>
        </S.DeliveryDetails>
    )
}