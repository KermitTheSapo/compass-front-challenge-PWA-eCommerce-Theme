import StatsBar from "./statsBar/statsBar"
import * as S from "./statsStyle"

export default function Stats() {
    return (
        <S.StatsContainer>
            <StatsBar StarRating={"5.0"} StarRatingCount={"70"} StarRatingPercent={"100"} />
            <StatsBar StarRating={"4.0"} StarRatingCount={"50"} StarRatingPercent={"100"} />
            <StatsBar StarRating={"3.0"} StarRatingCount={"30"} StarRatingPercent={"100"} />
            <StatsBar StarRating={"2.0"} StarRatingCount={"40"} StarRatingPercent={"100"} />
            <StatsBar StarRating={"1.0"} StarRatingCount={"20"} StarRatingPercent={"100"} />
        </S.StatsContainer>
    )
}