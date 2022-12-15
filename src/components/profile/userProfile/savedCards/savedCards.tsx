import { getOrder } from "../../../../products/order"
import { useEffect, useState } from "react"
import * as S from "./savedCardsStyle"

export default function SavedCards() {
    const [upi, setUpi] = useState([])
    useEffect(() => {
        //@ts-ignore
        getOrder().then(res => setUpi(res.map((item) => item.upi)))
    }, [])
    console.log(upi)
    return (
        <S.SavedCardsContainer>
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