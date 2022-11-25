import { useState } from "react"
import * as S from "./pageNumberTabStyle"

type Props = {
    setStatePageOne: React.Dispatch<React.SetStateAction<boolean>>;
    setStatePageTwo: React.Dispatch<React.SetStateAction<boolean>>;
    setStatePageThree: React.Dispatch<React.SetStateAction<boolean>>;
    setStatePageFour: React.Dispatch<React.SetStateAction<boolean>>;
    setStatePageFive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PageNumberTab({ setStatePageOne, setStatePageTwo, setStatePageThree, setStatePageFour, setStatePageFive }: Props) {
    const [numberOneColor, setNumberOneColor] = useState("#FFFFFF")
    const [numberTwoColor, setNumberTwoColor] = useState("#626262")
    const [numberThreeColor, setNumberThreeColor] = useState("#626262")
    const [numberFourColor, setNumberFourColor] = useState("#626262")
    const [numberFiveColor, setNumberFiveColor] = useState("#626262")

    const [numberOneBackgroundColor, setNumberOneBackgroundColor] = useState("#1B4B66")
    const [numberTwoBackgroundColor, setNumberTwoBackgroundColor] = useState("transparent")
    const [numberThreeBackgroundColor, setNumberThreeBackgroundColor] = useState("transparent")
    const [numberFourBackgroundColor, setNumberFourBackgroundColor] = useState("transparent")
    const [numberFiveBackgroundColor, setNumberFiveBackgroundColor] = useState("transparent")

    const ResetColors = () => {
        setNumberOneColor("#626262")
        setNumberTwoColor("#626262")
        setNumberThreeColor("#626262")
        setNumberFourColor("#626262")
        setNumberFiveColor("#626262")
        setNumberOneBackgroundColor("transparent")
        setNumberTwoBackgroundColor("transparent")
        setNumberThreeBackgroundColor("transparent")
        setNumberFourBackgroundColor("transparent")
        setNumberFiveBackgroundColor("transparent")
    }
    const ResetPage = () => {
        setStatePageOne(false)
        setStatePageTwo(false)
        setStatePageThree(false)
        setStatePageFour(false)
        setStatePageFive(false)
    }

    const focusNumberOne = () => {
        ResetColors()
        setNumberOneColor("#FFFFFF")
        setNumberOneBackgroundColor("#1B4B66")
        ResetPage()
        setStatePageOne(true)
    }
    const focusNumberTwo = () => {
        ResetColors()
        setNumberTwoColor("#FFFFFF")
        setNumberTwoBackgroundColor("#1B4B66")
        ResetPage()
        setStatePageTwo(true)
    }
    const focusNumberThree = () => {
        ResetColors()
        setNumberThreeColor("#FFFFFF")
        setNumberThreeBackgroundColor("#1B4B66")
        ResetPage()
        setStatePageThree(true)
    }
    const focusNumberFour = () => {
        ResetColors()
        setNumberFourColor("#FFFFFF")
        setNumberFourBackgroundColor("#1B4B66")
        ResetPage()
        setStatePageFour(true)
    }
    const focusNumberFive = () => {
        ResetColors()
        setNumberFiveColor("#FFFFFF")
        setNumberFiveBackgroundColor("#1B4B66")
        ResetPage()
        setStatePageFive(true)
    }

    const ChangeNumberButton = () => {
        if (numberOneColor === "#FFFFFF") {
            focusNumberTwo()
        } else if (numberTwoColor === "#FFFFFF") {
            focusNumberThree()
        } else if (numberThreeColor === "#FFFFFF") {
            focusNumberFour()
        } else if (numberFourColor === "#FFFFFF") {
            focusNumberFive()
        } else if (numberFiveColor === "#FFFFFF") {
            focusNumberOne()
        }
    }


    return (
        <S.PageNumberTabContainer>
            <S.NumberTabs>
                <S.Tab onClick={() => focusNumberOne()} backgroundColor={numberOneBackgroundColor} color={numberOneColor}>1</S.Tab>
                <S.Tab onClick={() => focusNumberTwo()} backgroundColor={numberTwoBackgroundColor} color={numberTwoColor}>2</S.Tab>
                <S.Tab onClick={() => focusNumberThree()} backgroundColor={numberThreeBackgroundColor} color={numberThreeColor}>3</S.Tab>
                <S.Tab onClick={() => focusNumberFour()} backgroundColor={numberFourBackgroundColor} color={numberFourColor}>4</S.Tab>
                <S.Tab onClick={() => focusNumberFive()} backgroundColor={numberFiveBackgroundColor} color={numberFiveColor}>5</S.Tab>
            </S.NumberTabs>
            <S.NextDiv>
                <S.NextButton onClick={() => ChangeNumberButton()}>Next</S.NextButton>
            </S.NextDiv>
        </S.PageNumberTabContainer>
    )
}