import { Reset } from "../../assets/styles/reset"
import * as S from "./breadcrumbsStyle"

import Arrow from "../assets/breadcrumbs/arrowSmall.svg"
interface BreadCrumbsProps {
    label: string;
    labelTwo: string;
    labelThree: string;
}
export default function BreadCrumbs({ label, labelTwo, labelThree }: BreadCrumbsProps) {
    return (
        <S.BreadCrumbsContainer>
            <Reset />
            <S.Title color="#1B4B66">{label}</S.Title>
            <img src={Arrow} alt="" />
            <S.Title color="#1B4B66">{labelTwo}</S.Title>
            <img src={Arrow} alt="" />
            <S.Title color="#626262">{labelThree}</S.Title>
        </S.BreadCrumbsContainer>
    )
}

