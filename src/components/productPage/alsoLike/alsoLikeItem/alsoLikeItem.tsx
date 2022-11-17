import * as S from "./alsoLikeItemStyle"
import trending from "../../../../assets/imgs/productPage/trending.png"

export default function AlsoLikeItem() {
    return (
        <S.AlsoLikeProducts>
            <S.AlsoLikeImgs src={trending} alt="" />
            <S.BtnTrending>
                <S.SpanTrending>Trending</S.SpanTrending>
            </S.BtnTrending>
        </S.AlsoLikeProducts>
    )
}