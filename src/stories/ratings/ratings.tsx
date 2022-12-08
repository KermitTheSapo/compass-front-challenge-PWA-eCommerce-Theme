import useState from "storybook-addon-state"
import { Reset } from "../../assets/styles/reset"
import * as S from "./ratingsStyle"

import starOn from "../assets/ratings/star-on.svg"
import starOff from "../assets/ratings/star-off.svg"

export default function Ratings() {
    const [numberOneColor, setNumberOneColor] = useState("0", starOff)
    const [numberTwoColor, setNumberTwoColor] = useState("1", starOff)
    const [numberThreeColor, setNumberThreeColor] = useState("2", starOff)
    const [numberFourColor, setNumberFourColor] = useState("3", starOff)
    const [numberFiveColor, setNumberFiveColor] = useState("4", starOff)

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
            <Reset />   
            <S.ImgStar onClick={() => levelOne()} src={numberOneColor} alt="" />
            <S.ImgStar onClick={() => levelTwo()} src={numberTwoColor} alt="" />
            <S.ImgStar onClick={() => levelThree()} src={numberThreeColor} alt="" />
            <S.ImgStar onClick={() => levelFour()} src={numberFourColor} alt="" />
            <S.ImgStar onClick={() => levelFive()} src={numberFiveColor} alt="" />
        </S.RatingsContainer>
    )
}

