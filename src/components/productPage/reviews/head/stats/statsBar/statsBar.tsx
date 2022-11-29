import * as S from "./statsBarStyle";

type Props = {
    StarRating: string;
    StarRatingCount: string;
    StarRatingPercent: string;
}

export default function StatsBar({ StarRating, StarRatingCount, StarRatingPercent }: Props) {
    return (
        <S.StatsBarContainer>
            <S.ProgressValue>{StarRating}</S.ProgressValue>
            <S.Progress value={StarRatingCount} max={StarRatingPercent}></S.Progress>
        </S.StatsBarContainer>
    )
}