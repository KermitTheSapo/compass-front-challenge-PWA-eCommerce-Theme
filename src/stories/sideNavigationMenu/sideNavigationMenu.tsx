import { Reset } from "../../assets/styles/reset"
import * as S from "./sideNavigationMenuStyle"
import Arrow from "../assets/sideNavigationMenu/arrow-right.svg"
import ArrowHover from "../assets/sideNavigationMenu/arrow-right-hover.svg"
import useState from "storybook-addon-state"
export default function SideNavigationMenu() {
    const [hover, setHover] = useState("0", false)
    return (
        <S.SideNavigationMenuContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            <Reset />
            <S.Title color={hover ? "#1B4B66" : "#13101E"}>Label</S.Title>
            <S.Img src={hover ? ArrowHover : Arrow} alt="" />
        </S.SideNavigationMenuContainer>
    )
}

