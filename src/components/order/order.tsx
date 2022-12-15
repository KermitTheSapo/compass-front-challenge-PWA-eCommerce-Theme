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
    const [date, setDate] = useState("")
    const [total, setTotal] = useState("")
    const [subTotal, setSubTotal] = useState("")
    const [discount, setDiscount] = useState("")
    const [addressList, setAddressList] = useState([{
        _id: "",
        streetAddress: "",
        city: "",
        uf: "",
        pinCode: 0,
    }])

    useEffect(() => {
        getAddress().then((res) => setAddressList(res))
        // @ts-ignore
        let params = new URL(document.location).searchParams;
        setDate(params.get("date") as string)
        setTotal(params.get("total") as string)
        setSubTotal(params.get("subTotal") as string)
        setDiscount(params.get("discount") as string)
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
    useEffect(() => {
        getBag().then((res) => setProductsList(res))
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
                {
                    productsList.length === 0 && <p>No order found!</p>
                }
                {productsList.map((item, key) => (
                    <div key={key}>
                        <DeliveryCard name={item.name} paragraph={item.description} img={item.image} date={date} />
                    </div>
                ))}
            </S.DeliveryDiv>
            <S.OrderDetails>
                <S.OrderDetailsTitle>Order Details</S.OrderDetailsTitle>
                <S.Summary>
                    <S.DivList>
                        <S.ListTitle>Sub Total</S.ListTitle>
                        <S.ListPrice>${Number(subTotal).toFixed(2)}</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListTitle>Discount</S.ListTitle>
                        <S.ListPrice>-${Number(discount).toFixed(2)}</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListTitle>Delivery Fee</S.ListTitle>
                        <S.ListPrice>-$0.00</S.ListPrice>
                    </S.DivList>
                    <S.DivList>
                        <S.ListResult>Grand Total</S.ListResult>
                        <S.ListResultValue>${Number(total).toFixed(2)}</S.ListResultValue>
                    </S.DivList>
                </S.Summary>
            </S.OrderDetails>
            <S.DivBtnFooter>
                <S.ButtonPayments onClick={() => navigate(`/payments?total=${Number(total).toFixed(2)}&subtotal=${Number(subTotal).toFixed(2)}&discount=${Number(discount).toFixed(2)}`)} >Proceed to Payments</S.ButtonPayments>
            </S.DivBtnFooter>
            {sheetEditAddress && <BottomSheetAddress state={sheetEditAddress} setState={setSheetEditAddress} stateAddress={addressList} />}
        </S.OrderContainer>
    )
}