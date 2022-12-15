import Address from "../../components/order/address/address"
import BottomSheetAddress from "../../components/order/bottomSheetAddress/bottomSheetAddress"
import { useEffect, useState } from "react"
import * as S from "./paymentsStyle"
import arrow from "@/assets/imgs/newAddress/arrow.svg"
import arrowDown from "@/assets/imgs/payments/arrow-down.svg"
import arrowUp from "@/assets/imgs/payments/arrow-up.svg"
import PaymentMethod from "./paymentMethod/paymentMethod"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { getAddress } from "../../products/address"
import { deleteBag, getBag } from "../../products/bag"
import { postOrder } from "../../products/order"
import { getContact } from "../../products/contact"

export default function Payments() {
    const [sheetEditAddress, setSheetEditAddress] = useState(false)
    const [showPaymentMethod, setShowPaymentMethod] = useState(false)
    const [upiText, setUpiText] = useState("")
    const [correctInfo, setCorrectInfo] = useState(false)
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [productsList, setProductsList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        subTotal: 0,
        ratings: 0,
        discount: 0,
        safe: 0,
        quantity: 0
    }])
    // @ts-ignore
    let params = new URL(document.location).searchParams;
    let total = params.get("total") as string;
    let subTotal = params.get("subtotal") as string;
    let discount = params.get("discount") as string;
    const [addressList, setAddressList] = useState([{
        _id: "",
        streetAddress: "",
        city: "",
        uf: "",
        pinCode: 0,
    }])
    const [contact, setContact] = useState({
        firstName: "",
        LastName: ""
    })

    useEffect(() => {
        getAddress().then((res) => setAddressList(res))
        getBag().then((res) => setProductsList(res))
        getContact().then(res => setContact(res[res.length - 1]))
        let now = new Date
        const day = (now.getDate()).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        let monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
        setDate(`${monName[now.getMonth()]} ${day}, ${now.getFullYear()}`)
    }, [])
    const checkInformation = () => {
        if (upiText.length > 7) {
            setCorrectInfo(false)
            let orderId = (Math.floor(Math.random() * 1000000000)).toLocaleString('en-US', {
                minimumIntegerDigits: 9,
                useGrouping: false
            })
            const Order = {
                name: contact.firstName + " " + contact.LastName,
                orderId: orderId,
                total: total,
                subTotal: subTotal,
                upi: upiText,
                discount: discount,
                addressList: addressList[0],
                product: productsList,
                orderDate: date,
                status: "Paid"
            }
            postOrder(Order)
            productsList.map((product) => {
                deleteBag(product._id)
            })
            alert("successful purchase")
            navigate("/confirmed")
        } else {
            alert("write your upi")
            setCorrectInfo(true)
        }
    }
    return (
        <S.PaymentsContainer>
            <Helmet>
                <title>Coral'l | Payments</title>
            </Helmet>
            <S.PaymentsHeader>
                <S.ImgArrowBack src={arrow} alt="arrow icon" onClick={() => navigate(-1)} />
                <S.PaymentsTitle>Payments</S.PaymentsTitle>
            </S.PaymentsHeader>
            <Address state={sheetEditAddress} setState={setSheetEditAddress} />
            <S.Separator></S.Separator>
            <S.ProductDetails>
                <S.ProductDetailsTitle>Product Details</S.ProductDetailsTitle>
                <S.ImgArrow src={arrowDown} alt="down arrow icon" />
            </S.ProductDetails>
            <S.Separator></S.Separator>
            <S.PaymentMethod>
                <S.PaymentHeader>
                    <S.PaymentMethodTitle>Payment Method</S.PaymentMethodTitle>
                    <S.ImgArrow onClick={() => setShowPaymentMethod(!showPaymentMethod)} src={showPaymentMethod ? arrowUp : arrowDown} alt="down or up arrow icon" />
                </S.PaymentHeader>
                {showPaymentMethod && <PaymentMethod setState={setUpiText} stateCorrectInfo={correctInfo} />}
            </S.PaymentMethod>
            <S.BtnPayNowDiv>
                <S.BtnPay onClick={() => { checkInformation() }}>Pay Now</S.BtnPay>
            </S.BtnPayNowDiv>
            {sheetEditAddress && <BottomSheetAddress state={sheetEditAddress} setState={setSheetEditAddress} stateAddress={addressList} />}
        </S.PaymentsContainer>
    )
}