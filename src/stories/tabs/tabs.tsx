import useState from "storybook-addon-state"
import { Reset } from "../../assets/styles/reset"
import * as S from "./tabsStyle"

export default function Tabs() {
    const [numberOneColor, setNumberOneColor] = useState("0", "#FFFFFF")
    const [numberTwoColor, setNumberTwoColor] = useState("1", "#626262")
    const [numberThreeColor, setNumberThreeColor] = useState("2", "#626262")
    const [numberFourColor, setNumberFourColor] = useState("3", "#626262")
    const [numberFiveColor, setNumberFiveColor] = useState("4", "#626262")

    const [numberOneBackgroundColor, setNumberOneBackgroundColor] = useState("5", "#1B4B66")
    const [numberTwoBackgroundColor, setNumberTwoBackgroundColor] = useState("6", "transparent")
    const [numberThreeBackgroundColor, setNumberThreeBackgroundColor] = useState("7", "transparent")
    const [numberFourBackgroundColor, setNumberFourBackgroundColor] = useState("8", "transparent")
    const [numberFiveBackgroundColor, setNumberFiveBackgroundColor] = useState("9", "transparent")

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

    const focusNumberOne = () => {
        ResetColors()
        setNumberOneColor("#FFFFFF")
        setNumberOneBackgroundColor("#1B4B66")
    }
    const focusNumberTwo = () => {
        ResetColors()
        setNumberTwoColor("#FFFFFF")
        setNumberTwoBackgroundColor("#1B4B66")
    }
    const focusNumberThree = () => {
        ResetColors()
        setNumberThreeColor("#FFFFFF")
        setNumberThreeBackgroundColor("#1B4B66")
    }
    const focusNumberFour = () => {
        ResetColors()
        setNumberFourColor("#FFFFFF")
        setNumberFourBackgroundColor("#1B4B66")
    }
    const focusNumberFive = () => {
        ResetColors()
        setNumberFiveColor("#FFFFFF")
        setNumberFiveBackgroundColor("#1B4B66")
    }
    return (
        <S.TabsContainer>
            <Reset />
            <S.Tab onClick={() => focusNumberOne()} color={numberOneBackgroundColor}><S.Paragraph color={numberOneColor}>Label</S.Paragraph></S.Tab>
            <S.Tab onClick={() => focusNumberTwo()} color={numberTwoBackgroundColor}><S.Paragraph color={numberTwoColor}>Label</S.Paragraph></S.Tab>
            <S.Tab onClick={() => focusNumberThree()} color={numberThreeBackgroundColor}><S.Paragraph color={numberThreeColor}>Label</S.Paragraph></S.Tab>
            <S.Tab onClick={() => focusNumberFour()} color={numberFourBackgroundColor}><S.Paragraph color={numberFourColor}>Label</S.Paragraph></S.Tab>
            <S.Tab onClick={() => focusNumberFive()} color={numberFiveBackgroundColor}><S.Paragraph color={numberFiveColor}>Label</S.Paragraph></S.Tab>
        </S.TabsContainer>
    )
}

