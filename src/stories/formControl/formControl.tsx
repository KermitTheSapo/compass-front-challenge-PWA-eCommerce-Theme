import { Reset } from "../../assets/styles/reset"
import * as S from "./formControlStyle"

export default function FormControl() {
    return (
        <div>
            <Reset />
            <S.Input type="text" placeholder="Label" />
        </div>
    )
}

