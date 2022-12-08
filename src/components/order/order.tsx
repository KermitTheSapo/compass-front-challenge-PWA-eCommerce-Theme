import * as S from "./orderStyle"
import arrow from "@/assets/imgs/bag/back.svg"
import { useNavigate } from "react-router-dom"
import DeliveryCard from "./deliveryCard/deliveryCard"
import { useEffect, useState } from "react"
import BottomSheetAddress from "./bottomSheetAddress/bottomSheetAddress"
import Address from "./address/address"
import { Helmet } from "react-helmet"
import { getBag } from "../../products/bag"
import { getAddress } from "../../products/address"


export default function Order() {
    const navigate = useNavigate()
    const [sheetEditAddress, setSheetEditAddress] = useState(false)
    const [addressList, setAddressList] = useState([{
        _id: "",
        streetAddress: "",
        city: "",
        uf: "",
        pinCode: 0,
    }])

    useEffect(() => {
        getAddress().then((res) => setAddressList(res))
    }, [])
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
        ratings: 0,
        discount: 0,
        safe: 0,
        quantity: 0
    }])
    const [allPrice, setAllPrice] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    useEffect(() => {
        getBag().then((res) => setProductsList(res))
        let Total = 0
        productsList.map((product) => {
            Total = Total + (product.price * product.quantity)
        })
        setAllPrice(Total)
        let subTotal = 0
        productsList.map((product) => {
            subTotal = subTotal + product.price
        })
        setSubTotal(subTotal)
    }, [productsList])
    return (
        <S.OrderContainer>
            <Helmet>
                <title>Coral'l | Order</title>
            </Helmet>
            <S.OrderHeader>
                <S.ImgArrowBack onClick={() => navigate(-1)} src={arrow} alt="arrow icon" />
                <S.OrderTitle>Order Summary</S.OrderTitle>
            </S.OrderHeader>
            <Address state={sheetEditAddress} setState={setSheetEditAddress} />
            <S.DeliveryDiv>
                <S.DeliveryTitle>Expected Delivery</S.DeliveryTitle>
                {productsList.map((item) => (
                    <DeliveryCard name={item.name} paragraph={item.description} img={item.image} />
                ))}
            </S.DeliveryDiv>
            <S.OrderDetails>
                <S.OrderDetailsTitle>Order Details</S.OrderDetailsTitle>
                <S.Summary>
                    <S.DivList>
                        <S.ListTitle>Sub Total</S.ListTitle>
                        <S.ListPrice>${subTotal.toFixed(2)}</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListTitle>Discount</S.ListTitle>
                        <S.ListPrice>-$0.00</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListTitle>Delivery Fee</S.ListTitle>
                        <S.ListPrice>-$0.00</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListResult>Grand Total</S.ListResult>
                        <S.ListResultValue>${allPrice.toFixed(2)}</S.ListResultValue>
                    </S.DivList>
                </S.Summary>
            </S.OrderDetails>
            <S.DivBtnFooter>
                <S.ButtonPayments onClick={() => navigate(`/payments?total=${allPrice.toFixed(2)}&subtotal=${subTotal.toFixed(2)}`)} >Proceed to Payments</S.ButtonPayments>
            </S.DivBtnFooter>
            {sheetEditAddress && <BottomSheetAddress state={sheetEditAddress} setState={setSheetEditAddress} stateAddress={addressList} />}
        </S.OrderContainer>
    )
}