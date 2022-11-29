import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import * as S from "./checkoutInfoStyle"
import arrowBreadcrumbs from "@/assets/imgs/myCart/chevron-right-small.svg"
import arrowUp from "@/assets/imgs/checkoutInfo/chevron-up.svg"
import arrowDown from "@/assets/imgs/checkoutInfo/chevron-bottom.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import OrderSummaryAndDetails from "./orderSummaryAndDetails/orderSummaryAndDetails"
import { Helmet } from "react-helmet"


export default function CheckoutInfo() {
    const [showAddress, setShowAddress] = useState(true)
    const navigate = useNavigate()
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
                                        <S.InputAddress type="text" placeholder="Enter Name" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>Street Address</S.InputTitle>
                                        <S.InputAddress type="text" placeholder="Enter Address" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>City</S.InputTitle>
                                        <S.InputAddress type="text" placeholder="Enter City" />
                                    </S.InputDiv>
                                </S.InputsLeft>
                                <S.InputsRight>
                                    <S.InputDiv>
                                        <S.InputTitle>Mobile Number</S.InputTitle>
                                        <S.InputsNumber>
                                            <S.InputDDD type="number" placeholder="+11" />
                                            <S.InputNumber type="number" placeholder="Enter Number" />
                                        </S.InputsNumber>
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>State</S.InputTitle>
                                        <S.InputAddressRight type="text" placeholder="Enter State" />
                                    </S.InputDiv>
                                    <S.InputDiv>
                                        <S.InputTitle>Pin Code</S.InputTitle>
                                        <S.InputAddressRight type="text" placeholder="Enter Pin Code" />
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