import { useEffect, useState } from "react";
import StatsBar from "./statsBar/statsBar"
import * as S from "./statsStyle"

type Props = {
    id: string;
    state: {
        date: string;
        description: string;
        productId: string;
        rating: string;
        title: string;
        userName: string;
    }[];
    total: number;
}

export default function Stats({ state, total }: Props) {
    const [starOne, setStarOne] = useState(0)
    const [starTwo, setStarTwo] = useState(0)
    const [starThree, setStarThree] = useState(0)
    const [starFour, setStarFour] = useState(0)
    const [starFive, setStarFive] = useState(0)
    useEffect(() => {
        let stars = [
            { star: 1, count: 0 },
            { star: 2, count: 0 },
            { star: 3, count: 0 },
            { star: 4, count: 0 },
            { star: 5, count: 0 }
        ]
        state.map((item) => {
            if (item.rating == "1") {
                stars[0].count++
            } else if (item.rating == "2") {
                stars[1].count++
            } else if (item.rating == "3") {
                stars[2].count++
            } else if (item.rating == "4") {
                stars[3].count++
            } else if (item.rating == "5") {
                stars[4].count++
            }
        })
        setStarOne(stars[0].count)
        setStarTwo(stars[1].count)
        setStarThree(stars[2].count)
        setStarFour(stars[3].count)
        setStarFive(stars[4].count)
    }, [state])
    return (
        <S.StatsContainer>
            <StatsBar StarRating={"5.0"} StarRatingCount={`${starFive}`} StarRatingPercent={`${total}`} />
            <StatsBar StarRating={"4.0"} StarRatingCount={`${starFour}`} StarRatingPercent={`${total}`} />
            <StatsBar StarRating={"3.0"} StarRatingCount={`${starThree}`} StarRatingPercent={`${total}`} />
            <StatsBar StarRating={"2.0"} StarRatingCount={`${starTwo}`} StarRatingPercent={`${total}`} />
            <StatsBar StarRating={"1.0"} StarRatingCount={`${starOne}`} StarRatingPercent={`${total}`} />
        </S.StatsContainer>
    )
}