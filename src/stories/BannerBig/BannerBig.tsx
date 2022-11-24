import { Reset } from "../../assets/styles/reset"
import * as S from "./BannerBigStyle"

import funkBanner from "../assets/bannerBig/funk.png"

export default function BannerCarry() {
    return (
        <div>
            <Reset />
            <img src={funkBanner} alt="" />
        </div>
    )
}

