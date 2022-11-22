import AlsoLikeItem from "./alsoLikeItem/alsoLikeItem"
import * as S from "./alsoLikeStyle"
export default function AlsoLike() {
    return (
        <S.AlsoLike>
            <S.AlsoLikeTitle>You Might Also Like</S.AlsoLikeTitle>
            <S.AlsoLikeProductsList>
                <AlsoLikeItem />
            </S.AlsoLikeProductsList>
        </S.AlsoLike>
    )
}