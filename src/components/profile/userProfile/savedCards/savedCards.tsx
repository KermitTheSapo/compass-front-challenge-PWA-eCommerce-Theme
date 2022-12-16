import { getOrder } from "../../../../products/order"
import { useEffect, useState } from "react"
import * as S from "./savedCardsStyle"
import arrow from "@/assets/imgs/userProfile/arrowLeft.svg"
import { useNavigate } from "react-router"

export default function SavedCards() {
    const [upi, setUpi] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        //@ts-ignore
        getOrder().then(res => setUpi(res.map((item) => item.upi)))
    }, [])
    return (
        <S.SavedCardsContainer>
            <S.SavedHeader>
                <S.ImgArrowLeft src={arrow} alt="left arrow" onClick={() => navigate(-1)} />
                <S.SavedHeaderTitle>My Saved Cards</S.SavedHeaderTitle>
            </S.SavedHeader>
            {
                upi.length === 0 ? <S.Title>Error 404 - page not found</S.Title> : null
            }
            <S.UpiList>
                {upi && upi.map((item) => (
                    <S.UpiCardPassword>
                        <S.Paragraph>Upi: {item}</S.Paragraph>
                    </S.UpiCardPassword>
                ))}
            </S.UpiList>
        </S.SavedCardsContainer>
    )
}