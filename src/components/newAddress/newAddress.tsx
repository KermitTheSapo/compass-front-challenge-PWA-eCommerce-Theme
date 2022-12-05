import { useNavigate } from "react-router-dom";
import * as S from "./newAddressStyle";
import arrow from "@/assets/imgs/newAddress/arrow.svg"
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import { postAddress } from "../../products/address";
import { postContact } from "../../products/contact";

export default function NewAddress() {

    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    const [pinCode, setPinCode] = useState("")
    const [ddd, setDdd] = useState("")
    const maskPhone = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };

    const [address, setAddress] = useState({
        pinCode: "",
        complement: "",
        street: "",
        neighborhood: "",
        uf: "",
        city: ""
    });
    const Api = `https://viacep.com.br/ws/${pinCode}/json/`
    function getCep() {
        if (pinCode.length === 8) {
            axios.get(Api).then((res) => {
                setAddress({
                    pinCode: res.data.cep,
                    complement: res.data.complemento,
                    street: res.data.logradouro,
                    neighborhood: res.data.bairro,
                    uf: res.data.uf,
                    city: res.data.localidade
                });
            });
        } else {
            setAddress({
                pinCode: "",
                complement: "",
                street: "",
                neighborhood: "",
                uf: "",
                city: ""
            });
        }
    }
    useEffect(() => {
        getCep()
    }, [pinCode])

    const saveAddress = () => {
        if (text.length > 5 && ddd.length === 2 && phone.length > 8 && pinCode.length === 8) {
            navigate(-1)
            const Address = {
                streetAddress: address.street,
                city: address.city,
                uf: address.uf,
                pinCode: pinCode,
            }
            const Contact = {
                name: text,
                ddd: ddd,
                phone: phone
            }
            postAddress(Address)
            postContact(Contact)
            alert("Address successfully saved!")
        } else {
            alert("Fill in all fields")
        }
    }
    return (
        <S.NewAddressContainer>
            <Helmet>
                <title>Coral'l | New Address</title>
            </Helmet>
            <S.NewAddressHeader>
                <S.ImgArrowLeft onClick={() => navigate(-1)} src={arrow} alt="arrow icon" />
                <S.NewAddressTitle>Add New Address</S.NewAddressTitle>
            </S.NewAddressHeader>
            <S.ContactInfo>
                <S.ContactInfoTitle>Contact Information</S.ContactInfoTitle>
                <S.Separator></S.Separator>
                <S.ContactContent>
                    <S.NameInput placeholder="Full Name" value={text} onChange={(e) => setText(maskOnlyLetters(e.target.value))} />
                    <S.DivInputNumber>
                        <S.DDDInput placeholder="+11" maxLength={2} value={ddd} onChange={(e) => { setDdd(e.target.value) }} />
                        <S.NumberInput placeholder="Contact Number" value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} />
                    </S.DivInputNumber>
                </S.ContactContent>
            </S.ContactInfo>
            <S.DeliveryInfo>
                <S.DeliveryInfoTitle>Delivery Information</S.DeliveryInfoTitle>
                <S.Separator></S.Separator>
                <S.DeliveryContent>
                    <S.AddressInput placeholder="Pin Code" value={pinCode} maxLength={8} onChange={(e) => { setPinCode(e.target.value) }} />
                    <S.AddressInput placeholder="Street Address" value={address.street} />
                    <S.AddressInput value={address.city} placeholder="City" />
                    <S.SelectState name="" id="">
                        <option value="">{address.uf}</option>
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
                <S.SaveButton onClick={() => saveAddress()}>Save Address</S.SaveButton>
            </S.SaveBtnDiv>
        </S.NewAddressContainer>
    )
}