import * as S from "./orderItemStyle"

import arrowRight from "@/assets/imgs/userProfile/arrowRight.svg"
import { useNavigate } from "react-router-dom";

type Props = {
    id: string;
    date: string;
    price: string;
    status: string;
}

export default function OrderItem({ id, date, price, status }: Props) {
    const navigate = useNavigate();
    return (
        <S.OrderItemContainer>
            <S.OrderId>
                <S.InputCheckbox type="checkbox" name="" id="" />
                <S.Label>{id}</S.Label>
            </S.OrderId>
            <S.DateDiv>
                <S.Label>{date}</S.Label>
            </S.DateDiv>
            <S.PriceDiv>
                <S.Label>{price}</S.Label>
            </S.PriceDiv>
            <S.StatusDiv>
                <S.StatusParagraph>{status}</S.StatusParagraph>
            </S.StatusDiv>
            <S.ArrowDiv>
                <S.ImgArrow src={arrowRight} alt="" onClick={() => navigate("/profile/orders/product")} />
            </S.ArrowDiv>
        </S.OrderItemContainer>
    )
}