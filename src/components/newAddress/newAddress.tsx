import { useNavigate } from "react-router-dom";
import * as S from "./newAddressStyle";
import arrow from "@/assets/imgs/newAddress/arrow.svg"

export default function NewAddress() {

    const navigate = useNavigate();

    return (
        <S.NewAddressContainer>
            <S.NewAddressHeader>
                <S.ImgArrowLeft onClick={() => navigate(-1)} src={arrow} alt="" />
                <S.NewAddressTitle>Add New Address</S.NewAddressTitle>
            </S.NewAddressHeader>
            <S.ContactInfo>
                <S.ContactInfoTitle>Contact Information</S.ContactInfoTitle>
                <S.Separator></S.Separator>
                <S.ContactContent>
                    <S.NameInput placeholder="Full Name" />
                    <S.DivInputNumber>
                        <S.DDDInput type="number" placeholder="+11" />
                        <S.NumberInput type="number" placeholder="Contact Number" />
                    </S.DivInputNumber>
                </S.ContactContent>
            </S.ContactInfo>
            <S.DeliveryInfo>
                <S.DeliveryInfoTitle>Delivery Information</S.DeliveryInfoTitle>
                <S.Separator></S.Separator>
                <S.DeliveryContent>
                    <S.AddressInput placeholder="Pin Code" />
                    <S.AddressInput placeholder="Street Address" />
                    <S.AddressInput placeholder="City" />
                    <S.SelectState name="" id="">
                        <option value="">State</option>
                    </S.SelectState>
                </S.DeliveryContent>
                <S.LocationDiv>
                    <S.ChipsButton>Home</S.ChipsButton>
                    <S.ChipsButton>Office</S.ChipsButton>
                    <S.ChipsButton>Other</S.ChipsButton>
                </S.LocationDiv>
            </S.DeliveryInfo>
            <S.DefaultAddressDiv>
                <S.InputCheckbox type="checkbox" id="deliveryAddress" />
                <S.LabelCheckbox htmlFor="deliveryAddress">Use as default delivery address.</S.LabelCheckbox>
            </S.DefaultAddressDiv>
            <S.SaveBtnDiv>
                <S.SaveButton>Save Address</S.SaveButton>
            </S.SaveBtnDiv>
        </S.NewAddressContainer>
    )
}