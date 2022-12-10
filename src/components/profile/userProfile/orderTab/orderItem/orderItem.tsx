import * as S from "./orderItemStyle"

import arrowRight from "@/assets/imgs/userProfile/arrowRight.svg"
import { useNavigate } from "react-router-dom";

type Props = {
    id: string;
    orderId: string;
    date: string;
    price: string;
    status: string;
}

export default function OrderItem({ id, orderId, date, price, status }: Props) {
    const navigate = useNavigate();
    return (
        <S.OrderItemContainer>
            <S.OrderCardContent>
                <S.OrderId>
                    <S.InputCheckbox type="checkbox" name="" id="" />
                    <S.Label>#{orderId}</S.Label>
                </S.OrderId>
                <S.DateDiv>
                    <S.LabelDate>{date}</S.LabelDate>
                </S.DateDiv>
                <S.PriceDiv>
                    <S.Label>${price}</S.Label>
                </S.PriceDiv>
            </S.OrderCardContent>
            <S.StatusDiv>
                <S.StatusParagraph>{status}</S.StatusParagraph>
            </S.StatusDiv>
            <S.ArrowDiv>
                <S.ImgArrow src={arrowRight} alt="right arrow" onClick={() => navigate(window.screen.width > 768 ? `/profile/orders/product?id=${id}` : `/orderProduct?id=${id}`)} />
            </S.ArrowDiv>
        </S.OrderItemContainer>
    )
}