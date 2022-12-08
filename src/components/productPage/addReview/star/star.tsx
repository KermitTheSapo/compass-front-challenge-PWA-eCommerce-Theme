import * as S from "./starStyle"
import starOn from "@/assets/imgs/productPage/reviews/starOn.svg"
import starOff from "@/assets/imgs/productPage/reviews/starOff.svg"
import { useState } from "react"

type Props = {
    setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function Ratings({ setState }: Props) {
    const [numberOneColor, setNumberOneColor] = useState(starOff)
    const [numberTwoColor, setNumberTwoColor] = useState(starOff)
    const [numberThreeColor, setNumberThreeColor] = useState(starOff)
    const [numberFourColor, setNumberFourColor] = useState(starOff)
    const [numberFiveColor, setNumberFiveColor] = useState(starOff)

    const resetStar = () => {
        setNumberOneColor(starOff)
        setNumberTwoColor(starOff)
        setNumberThreeColor(starOff)
        setNumberFourColor(starOff)
        setNumberFiveColor(starOff)
    }
    const levelOne = () => {
        resetStar()
        setNumberOneColor(starOn)
        setState(1)
    }
    const levelTwo = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setState(2)
    }
    const levelThree = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setNumberThreeColor(starOn)
        setState(3)
    }
    const levelFour = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setNumberThreeColor(starOn)
        setNumberFourColor(starOn)
        setState(4)
    }
    const levelFive = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setNumberThreeColor(starOn)
        setNumberFourColor(starOn)
        setNumberFiveColor(starOn)
        setState(5)
    }
    return (
        <S.RatingsContainer>
            <S.ImgStar onClick={() => levelOne()} src={numberOneColor} alt="star icon" />
            <S.ImgStar onClick={() => levelTwo()} src={numberTwoColor} alt="star icon" />
            <S.ImgStar onClick={() => levelThree()} src={numberThreeColor} alt="star icon" />
            <S.ImgStar onClick={() => levelFour()} src={numberFourColor} alt="star icon" />
            <S.ImgStar onClick={() => levelFive()} src={numberFiveColor} alt="star icon" />
        </S.RatingsContainer>
    )
}
