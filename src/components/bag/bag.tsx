import * as S from "./bagStyle"
import cross from "@/assets/imgs/bag/cross.svg"
import back from "@/assets/imgs/bag/back.svg"
import { useNavigate } from "react-router-dom"
import Card from "./card/card"
import bag from "@/assets/imgs/bag/bag.svg"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import { getBag } from "../../products/bag"

export default function Bag() {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
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
    const [subTotalValue, setSubTotalValue] = useState(0)
    useEffect(() => {
        getBag().then((res) => setProductsList(res))
    }, [])
    useEffect(() => {
        let total = 0
        productsList.map((product) => {
            total = total + (product.price * quantity)
        })
        setPriceValue(total)
        let subTotal = 0
        productsList.map((product) => {
            subTotal = subTotal + product.price
        })
        setSubTotalValue(subTotal)
    }, [productsList, quantity])

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
                        {productsList && productsList.map((item: any, key: string | number | symbol) => (
                            <Card productTitle={item.name} productParagraph={item.description} productPrice={item.price} img={item.image} safe={item.safe} discount={item.discount} id={item._id} setState={setProductsList} state={quantity} setQuantity={setQuantity} />
                        ))}
                    </S.CardsContainers>
                    <S.CouponDiv>
                        <S.InputCode type="text" placeholder="Apply Coupon Code" />
                        <S.ButtonCheck>Check</S.ButtonCheck>
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
                                <S.ListPrice>-$0.00</S.ListPrice>
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
                            <S.ButtonPlaceOrder onClick={() => navigate("/order")}>Place Order</S.ButtonPlaceOrder>
                        </S.ButtonDiv>
                    </S.OrderDetailsDiv>
                </>}
        </S.BagContainer>
    )
}