// import { useEffect, useState } from "react";
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
}

export default function Stats({ state }: Props) {
    // const [total, setTotal] = useState(0)
    // const [starOne, setStarOne] = useState(0)
    // const [starTwo, setStarTwo] = useState(0)
    // const [starThree, setStarThree] = useState(0)
    // const [starFour, setStarFour] = useState(0)
    // const [starFive, setStarFive] = useState(0)
    // useEffect(() => {
    //     state.map((item) => {
    //         if (item.rating === "1") {
    //             setStarOne(starOne + 1)
    //         }
    //         if (item.rating === "2") {
    //             setStarTwo(starTwo + 1)
    //         }
    //         if (item.rating === "3") {
    //             setStarThree(starThree + 1)
    //         }
    //         if (item.rating === "4") {
    //             setStarFour(starFour + 1)
    //         }
    //         if (item.rating === "5") {
    //             setStarFive(starFive + 1)
    //         }
    //     })
    // }, [state])
    // console.log(starOne, starTwo, starThree, starFour, starFive)
    // useEffect(() => {
    //     state.map((item) => {
    //         setTotal(Number(item.rating) + total)
    //         console.log(total)
    //     })
    // }, [state])
    return (
        <S.StatsContainer>
            <StatsBar StarRating={"5.0"} StarRatingCount={`10`} StarRatingPercent={"100"} />
            <StatsBar StarRating={"4.0"} StarRatingCount={`20`} StarRatingPercent={"100"} />
            <StatsBar StarRating={"3.0"} StarRatingCount={`30`} StarRatingPercent={"100"} />
            <StatsBar StarRating={"2.0"} StarRatingCount={`40`} StarRatingPercent={"100"} />
            <StatsBar StarRating={"1.0"} StarRatingCount={`50`} StarRatingPercent={"100"} />
        </S.StatsContainer>
    )
}