import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import * as S from "./checkoutInfoStyle"
import arrowBreadcrumbs from "@/assets/imgs/myCart/chevron-right-small.svg"
import arrowUp from "@/assets/imgs/checkoutInfo/chevron-up.svg"
import arrowDown from "@/assets/imgs/checkoutInfo/chevron-bottom.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import OrderSummaryAndDetails from "./orderSummaryAndDetails/orderSummaryAndDetails"
import { Helmet } from "react-helmet"
import axios from "axios";



export default function CheckoutInfo() {
    const [showAddress, setShowAddress] = useState(true)
    const navigate = useNavigate()
    const [phone, setPhone] = useState("");
    const [pinCode, setPinCode] = useState("")
    const [text, setText] = useState("");
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

    const maskCEP = (value) => {
        return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
    };
    const maskPhone = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };
    console.log(address.rua)
    return (
        <>
            <Helmet>
                <title>Coral'l | Checkout - Information</title>
            </Helmet>
            <Header />
            <S.CheckoutInfoContainer>
                <S.Breadcrumbs>
                    <S.Label color="#1B4B66">Home</S.Label>
                    <img src={arrowBreadcrumbs} alt="" />
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
                                <S.ArrowImgModal src={showAddress ? arrowUp : arrowDown} alt="" onClick={() => setShowAddress(!showAddress)} />
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
                                            <S.InputDDD type="number" placeholder="+11" />
                                            <S.InputNumber value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} placeholder="Enter Number" />
                                        </S.InputsNumber>
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>State</S.InputTitle>
                                        <S.InputAddressRight value={address.uf} type="text" placeholder="Enter State" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>Pin Code</S.InputTitle>
                                        <S.InputAddressRight type="text" placeholder="Enter Pin Code" value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                                    </S.InputDiv>
                                </S.InputsRight>
                            </S.NewAddressContent>}
                        </S.NewAddressDiv>
                        <S.PaymentMethodDiv>
                            <S.PaymentMethodHeader>
                                <S.PaymentMethodTitle>Select Payment Method</S.PaymentMethodTitle>
                                <S.ArrowImgModal src={arrowDown} alt="" />
                            </S.PaymentMethodHeader>
                        </S.PaymentMethodDiv>
                    </S.AddressAndPayment>
                    <OrderSummaryAndDetails />
                </S.CheckoutContent>
                <S.ButtonsActions>
                    <S.ButtonBack>Back to Cart</S.ButtonBack>
                    <S.ButtonNext onClick={() => navigate("/checkout-payment")}>Next</S.ButtonNext>
                </S.ButtonsActions>
            </S.CheckoutInfoContainer>
            <Footer />
        </>
    )
}