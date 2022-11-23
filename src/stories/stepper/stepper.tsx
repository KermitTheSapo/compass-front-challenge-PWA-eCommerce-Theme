import useState from "storybook-addon-state"
import { Reset } from "../../assets/styles/reset"
import * as S from "./stepperStyle"

import minus from "../assets/stepper/minus.svg"
import plus from "../assets/stepper/plus.svg"
import minusHover from "../assets/stepper/minusHover.svg"
import plusHover from "../assets/stepper/plusHover.svg"

export default function Stepper() {
    const [number, setNumber] = useState("0", 0)
    const [minusColor, setMinusColor] = useState("1", "transparent")
    const [plusColor, setPlusColor] = useState("2", "transparent")

    return (
        <S.StepperContainer>
            <Reset />
            <S.Img color={minusColor} src={minusColor === "transparent" ? minus : minusHover} alt="" onMouseEnter={() => setMinusColor("#1B4B66")} onMouseLeave={() => setMinusColor("transparent")} onClick={() => number > 0 ? setNumber(number - 1) : setNumber(number)} />
            <S.Counter>{number}</S.Counter>
            <S.Img color={plusColor} src={plusColor === "transparent" ? plus : plusHover} alt="" onMouseEnter={() => setPlusColor("#1B4B66")} onMouseLeave={() => setPlusColor("transparent")} onClick={() => number < 10 ? setNumber(number + 1) : setNumber(number)} />
        </S.StepperContainer>
    )
}

