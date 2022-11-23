import { Reset } from "../../assets/styles/reset"
import * as S from "./accordianStyle"

import arrowDown from "../assets/accordian/arrow-down.svg"
import arrowUp from "../assets/accordian/arrow-up.svg"
import useState from 'storybook-addon-state';
export default function Accordian() {
    const [open, setOpen] = useState("0", false);
    return (
        <S.AccordianContainer>
            <Reset />
            <S.Title>Product Details</S.Title>
            <S.Img onClick={() => setOpen(!open)} src={open ? arrowDown : arrowUp} alt="" />
        </S.AccordianContainer>
    )
}

