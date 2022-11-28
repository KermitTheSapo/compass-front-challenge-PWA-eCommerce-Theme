import * as S from "./bagStyle"
import cross from "@/assets/imgs/bag/cross.svg"
import back from "@/assets/imgs/bag/back.svg"
import { useNavigate } from "react-router-dom"
import Card from "./card/card"
import bag from "@/assets/imgs/bag/bag.svg"
export default function Bag() {
    const navigate = useNavigate()
    const bagInfo = localStorage.getItem("items")
    const bagInfoParse = JSON.parse(bagInfo)
    return (
        <S.BagContainer>
            <S.BagHeaderNav>
                <S.ImgBack onClick={() => navigate(-1)} src={bagInfoParse === null ? back : cross} alt="" />
                <S.BagTitle>My Bag</S.BagTitle>
            </S.BagHeaderNav>

            {bagInfoParse === null ? <S.DivBagEmpty>
                <S.ImgBag src={bag} alt="" />
                <S.DivBagTitle>Uh Oh....!</S.DivBagTitle>
                <S.DivBagParagraph>You haven’t added any any items. Start shopping to make your bag bloom</S.DivBagParagraph>
                <S.ButtonContinue onClick={() => navigate(-1)} >Continue Shopping</S.ButtonContinue>
            </S.DivBagEmpty> :
                <>
                    <S.CardsContainers>
                        <Card />
                        <Card />
                        <Card />
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
                                <S.ListPrice>$119.69</S.ListPrice>
                            </S.DivList>
                            <S.DivList>
                                <S.ListTitle>Discount</S.ListTitle>
                                <S.ListPrice>-$13.40</S.ListPrice>
                            </S.DivList>
                            <S.DivList>
                                <S.ListTitle>Delivery Fee</S.ListTitle>
                                <S.ListPrice>-$0.00</S.ListPrice>
                            </S.DivList>
                            <S.DivList>
                                <S.ListResult>Grand Total</S.ListResult>
                                <S.ListResultValue>$106.29</S.ListResultValue>
                            </S.DivList>
                        </S.Summary>
                        <S.ButtonDiv>
                            <S.TotalBag>
                                <S.TotalTitle>Total Bag Amount</S.TotalTitle>
                                <S.TotalPrice>$106.29</S.TotalPrice>
                            </S.TotalBag>
                            <S.ButtonPlaceOrder onClick={() => navigate("/order")}>Place Order</S.ButtonPlaceOrder>
                        </S.ButtonDiv>
                    </S.OrderDetailsDiv>
                </>}
        </S.BagContainer>
    )
}