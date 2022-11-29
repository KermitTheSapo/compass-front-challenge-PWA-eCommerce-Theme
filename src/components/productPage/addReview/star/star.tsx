import * as S from "./starStyle"
import starOn from "@/assets/imgs/productPage/reviews/starOn.svg"
import starOff from "@/assets/imgs/productPage/reviews/starOff.svg"
import { useState } from "react"

export default function Ratings() {
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
    }
    const levelTwo = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
    }
    const levelThree = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setNumberThreeColor(starOn)
    }
    const levelFour = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setNumberThreeColor(starOn)
        setNumberFourColor(starOn)
    }
    const levelFive = () => {
        resetStar()
        setNumberOneColor(starOn)
        setNumberTwoColor(starOn)
        setNumberThreeColor(starOn)
        setNumberFourColor(starOn)
        setNumberFiveColor(starOn)
    }
    return (
        <S.RatingsContainer>
            <S.ImgStar onClick={() => levelOne()} src={numberOneColor} alt="" />
            <S.ImgStar onClick={() => levelTwo()} src={numberTwoColor} alt="" />
            <S.ImgStar onClick={() => levelThree()} src={numberThreeColor} alt="" />
            <S.ImgStar onClick={() => levelFour()} src={numberFourColor} alt="" />
            <S.ImgStar onClick={() => levelFive()} src={numberFiveColor} alt="" />
        </S.RatingsContainer>
    )
}
