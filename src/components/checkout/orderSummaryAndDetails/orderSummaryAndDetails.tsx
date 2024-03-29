import SummaryProduct from "../summaryProduct/summaryProduct"
import * as S from "./orderSummaryAndDetailsStyle"

type Props = {
    productListState: {
        _id: string;
        name: string;
        price: number;
        category: string;
        image: string;
        description: string;
        imgAlt: string;
        paragraph: string;
        link: string;
        ratings: number;
        discount: number;
        safe: number;
        quantity: number;
    }[],
    subTotal: number,
    allPrice: number,
    discount: string;
}

export default function OrderSummaryAndDetails({ productListState, subTotal, allPrice, discount }: Props) {

    return (
        <S.SummaryAndDetails>
            <S.OrderSummaryDiv>
                <S.OrderSummaryHeader>
                    <S.OrderSummaryTitle>Order Summary</S.OrderSummaryTitle>
                </S.OrderSummaryHeader>
                <S.Separator></S.Separator>
                <S.OrderSummaryContent>
                    {productListState.map((item, key) => (
                        <div key={key}>
                            <SummaryProduct productTitle={item.name} productParagraph={item.description} img={item.image} quantity={item.quantity} />
                        </div>
                    ))}
                    {productListState.length === 0 && <S.EmptyCart>
                        <S.EmptyTitle>Uh Oh....!</S.EmptyTitle>
                        <S.EmptyParagraph>You haven’t added any items. Start shopping to make your bag bloom</S.EmptyParagraph>
                    </S.EmptyCart>}
                </S.OrderSummaryContent>
            </S.OrderSummaryDiv>
            <S.OrderDetailsDiv>
                <S.OrderDetailsHeader>
                    <S.OrderDetailsTitle>Order Details</S.OrderDetailsTitle>
                </S.OrderDetailsHeader>
                <S.Separator></S.Separator>
                <S.OrderDetailsContent>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Sub Total</S.OrderLabel>
                        <S.OrderPrice>${subTotal.toFixed(2)}</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Discount</S.OrderLabel>
                        <S.OrderPrice>-${Number(discount).toFixed(2)}</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Delivery Fee</S.OrderLabel>
                        <S.OrderPrice>-$0.00</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderResult>Grand Total</S.OrderResult>
                        <S.OrderResult>${Number(allPrice.toFixed(2)) - Number(discount)}</S.OrderResult>
                    </S.OrderDetailsList>
                </S.OrderDetailsContent>
            </S.OrderDetailsDiv>
        </S.SummaryAndDetails>
    )
}