import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import * as S from "./checkoutStyle"
import arrowBreadcrumbs from "@/assets/imgs/myCart/chevron-right-small.svg"
import arrowUp from "@/assets/imgs/checkout/chevron-up.svg"
import arrowDown from "@/assets/imgs/checkout/chevron-bottom.svg"
import { useEffect, useState } from "react"
import OrderSummaryAndDetails from "./orderSummaryAndDetails/orderSummaryAndDetails"
import { Helmet } from "react-helmet"
import axios from "axios";
import CheckoutPayments from "./payments/payments"
import { postAddress } from "../../products/address"
import { postContact } from "../../products/contact"


export default function Checkout() {
    const [showAddress, setShowAddress] = useState(true)
    const [ddd, setDdd] = useState("")
    const [DDDValue, setDDDValue] = useState("")
    const [phone, setPhone] = useState("");
    const [pinCode, setPinCode] = useState("")
    const [cepMask, setCepMask] = useState("")
    const [text, setText] = useState("");
    const [upiText, setUpiText] = useState("")
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
                if (res.data.erro === true) {
                    alert("incorrect zip code")
                } else {
                    setAddress({
                        pinCode: res.data.cep,
                        complement: res.data.complemento,
                        street: res.data.logradouro,
                        neighborhood: res.data.bairro,
                        uf: res.data.uf,
                        city: res.data.localidade
                    });
                }
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
    const maskDDD = (value: string) => {
        return value.replace(/(\d{2})/, '+$1')
    }
    const maskCEP = (value: string) => {
        return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
    };
    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    const maskOnlyLetters = (value: string) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };

    const Next = () => {
        if (text.length > 5 && phone.length > 7 && pinCode.length > 7 && DDDValue.length === 2 && upiText.length > 5) {
            const Address = {
                streetAddress: address.street,
                city: address.city,
                uf: address.uf,
                pinCode: pinCode,
            }
            const Contact = {
                name: text,
                ddd: ddd,
                phone: phone,
                cardCode: upiText
            }
            postAddress(Address)
            postContact(Contact)
            alert("successful order")
        } else {
            alert("Fill in all fields")
        }
    }
    return (
        <>
            <Helmet>
                <title>Coral'l | Checkout</title>
            </Helmet>
            <Header />
            <S.CheckoutInfoContainer>
                <S.Breadcrumbs>
                    <S.Label color="#1B4B66">Home</S.Label>
                    <img src={arrowBreadcrumbs} alt="an arrow icon" />
                    <S.Label color="#626262">Checkout</S.Label>
                </S.Breadcrumbs>
                <S.TitlePageDiv>
                    <S.TitlePage>Checkout</S.TitlePage>
                </S.TitlePageDiv>
                <S.CheckoutContent>
                    <S.AddressAndPayment>
                        <S.NewAddressDiv>
                            <S.NewAddressHeader>
                                <S.NewAddressTitle>Add New Address</S.NewAddressTitle>
                                <S.ArrowImgModal src={showAddress ? arrowDown : arrowUp} alt="an arrow icon" onClick={() => setShowAddress(!showAddress)} />
                            </S.NewAddressHeader>
                            <S.Separator></S.Separator>
                            {showAddress && <S.NewAddressContent>
                                <S.InputsLeft>
                                    <S.InputDiv>
                                        <S.InputTitle>Full Name</S.InputTitle>
                                        <S.InputAddress value={text} onChange={(e) => setText(maskOnlyLetters(e.target.value))} type="text" placeholder="Enter Name" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>Street Address</S.InputTitle>
                                        <S.InputAddress value={address.street} type="text" placeholder="Enter Address" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>City</S.InputTitle>
                                        <S.InputAddress value={address.city} type="text" placeholder="Enter City" />
                                    </S.InputDiv>
                                </S.InputsLeft>
                                <S.InputsRight>
                                    <S.InputDiv>
                                        <S.InputTitle>Mobile Number</S.InputTitle>
                                        <S.InputsNumber>
                                            <S.InputDDD placeholder="+11" maxLength={2} value={ddd} onChange={(e) => { setDdd(maskDDD(e.target.value)); setDDDValue(e.target.value) }} />
                                            <S.InputNumber value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} placeholder="Enter Number" />
                                        </S.InputsNumber>
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>State</S.InputTitle>
                                        <S.InputAddressRight value={address.uf} type="text" placeholder="Enter State" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>Pin Code</S.InputTitle>
                                        <S.InputAddressRight type="text" placeholder="Enter Pin Code" value={cepMask} onChange={(e) => { setPinCode(e.target.value); setCepMask(maskCEP(e.target.value)) }} />
                                    </S.InputDiv>
                                </S.InputsRight>
                            </S.NewAddressContent>}
                        </S.NewAddressDiv>
                        <CheckoutPayments state={upiText} setState={setUpiText} />
                    </S.AddressAndPayment>
                    <OrderSummaryAndDetails />
                </S.CheckoutContent>
                <S.ButtonsActions>
                    <S.ButtonBack>Back to Cart</S.ButtonBack>
                    <S.ButtonNext onClick={() => Next()}>Next</S.ButtonNext>
                </S.ButtonsActions>
            </S.CheckoutInfoContainer>
            <Footer />
        </>
    )
}