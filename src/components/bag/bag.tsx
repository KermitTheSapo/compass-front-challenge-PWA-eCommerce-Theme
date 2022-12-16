import * as S from "./bagStyle"
import cross from "@/assets/imgs/bag/cross.svg"
import back from "@/assets/imgs/bag/back.svg"
import { useNavigate } from "react-router-dom"
import Card from "./card/card"
import bag from "@/assets/imgs/bag/bag.svg"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import { getBag } from "../../products/bag"
import { getCoupon } from "../../products/coupon"

export default function Bag() {
    const navigate = useNavigate()
    const [date, setDate] = useState("")
    const [discountValue, setDiscountValue] = useState(0)
    const [code, setCode] = useState("")
    const [couponList, setCouponList] = useState([{
        _id: "",
        name: "",
        value: 0,
        code: "",
    }])
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
        safe: 0
    }])
    const [priceValue, setPriceValue] = useState(0)
    const [totalValue, setTotalValue] = useState([])
    const [subTotalValue, setSubTotalValue] = useState(0)
    useEffect(() => {
        // @ts-ignore
        getBag().then((res) => { setProductsList(res); let value = res.map(item => item.price); setTotalValue(value) })
        let now = new Date
        const day = (now.getDate()).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        let monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
        setDate(`${day} ${monName[now.getMonth()].slice(0, 3)}`)
    }, [])
    useEffect(() => {
        setPriceValue(totalValue.reduce((a, b) => a + b, 0))
        let subTotal = 0
        productsList.map((product) => {
            subTotal = subTotal + product.price
        })
        setSubTotalValue(subTotal)
    }, [productsList, totalValue])
    useEffect(() => {
        getCoupon().then((res) => setCouponList(res))
    }, [])
    const checkCoupon = () => {
        let coupon = couponList.filter((item) => item.code === code)
        if (coupon.length === 0) {
            alert("Coupon code is not valid")
        } else {
            let discount = coupon[0].value

            let discountPrice = (subTotalValue * discount) / 100
            setDiscountValue((subTotalValue * discount) / 100)
            let newPrice = subTotalValue - discountPrice
            setPriceValue(newPrice)
        }
    }
    return (
        <S.BagContainer>
            <Helmet>
                <title>Coral'l | Bag</title>
            </Helmet>
            <S.BagHeaderNav>
                <S.ImgBack onClick={() => navigate(-1)} src={productsList.length === 0 ? back : cross} alt="a left arrow icon or a cross" />
                <S.BagTitle>My Bag</S.BagTitle>
            </S.BagHeaderNav>

            {productsList.length === 0 ? <S.DivBagEmpty>
                <S.ImgBag src={bag} alt="icon of a bag with a circle with an exclamation mark in the middle" />
                <S.DivBagTitle>Uh Oh....!</S.DivBagTitle>
                <S.DivBagParagraph>You haven’t added any any items. Start shopping to make your bag bloom</S.DivBagParagraph>
                <S.ButtonContinue onClick={() => navigate(-1)} >Continue Shopping</S.ButtonContinue>
            </S.DivBagEmpty> :
                <>
                    <S.CardsContainers>
                        {productsList && productsList.map((item: any, index: number) => (
                            <Card productTitle={item.name} productParagraph={item.description} productPrice={item.price} img={item.image} safe={item.safe} discount={item.discount} id={item._id} setState={setProductsList} stateProductList={productsList} ratings={item.ratings} setTotalValue={setTotalValue} index={index} />
                        ))}
                    </S.CardsContainers>
                    <S.CouponDiv>
                        <S.InputCode type="text" placeholder="Apply Coupon Code" value={code} onChange={(e) => setCode(e.target.value)} />
                        <S.ButtonCheck onClick={() => checkCoupon()}>Check</S.ButtonCheck>
                    </S.CouponDiv>
                    <S.OrderDetailsDiv>
                        <S.OrderTitle>Order Details</S.OrderTitle>
                        <S.Summary>
                            <S.DivList>
                                <S.ListTitle>Sub Total</S.ListTitle>
                                <S.ListPrice>${subTotalValue.toFixed(2)}</S.ListPrice>
                            </S.DivList>
                            <S.DivList>
                                <S.ListTitle>Discount</S.ListTitle>
                                <S.ListPrice>-${discountValue.toFixed(2)}</S.ListPrice>
                            </S.DivList>
                            <S.DivList>
                                <S.ListTitle>Delivery Fee</S.ListTitle>
                                <S.ListPrice>-$0.00</S.ListPrice>
                            </S.DivList>
                            <S.DivList>
                                <S.ListResult>Grand Total</S.ListResult>
                                <S.ListResultValue>${priceValue.toFixed(2)}</S.ListResultValue>
                            </S.DivList>
                        </S.Summary>
                        <S.ButtonDiv>
                            <S.TotalBag>
                                <S.TotalTitle>Total Bag Amount</S.TotalTitle>
                                <S.TotalPrice>${priceValue.toFixed(2)}</S.TotalPrice>
                            </S.TotalBag>
                            <S.ButtonPlaceOrder onClick={() => navigate(`/order?date=${date}&total=${priceValue.toFixed(2)}&subTotal=${subTotalValue.toFixed(2)}&discount=${discountValue.toFixed(2)}`)}>Place Order</S.ButtonPlaceOrder>
                        </S.ButtonDiv>
                    </S.OrderDetailsDiv>
                </>}
        </S.BagContainer>
    )
}