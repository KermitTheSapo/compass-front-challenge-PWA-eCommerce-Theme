import AlsoLikeItem from "./alsoLikeItem/alsoLikeItem"
import * as S from "./alsoLikeStyle"

export default function AlsoLike() {
    return (
        <S.AlsoLike>
            <S.AlsoLikeTitle>You may also like</S.AlsoLikeTitle>
            <S.AlsoLikeProductsList>
                <AlsoLikeItem />
                <AlsoLikeItem />
                <AlsoLikeItem />
                <AlsoLikeItem />
                <AlsoLikeItem />
            </S.AlsoLikeProductsList>
        </S.AlsoLike>
    )
}