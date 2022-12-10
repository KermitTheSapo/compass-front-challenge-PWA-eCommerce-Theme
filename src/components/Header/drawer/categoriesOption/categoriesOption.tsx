import * as S from "./categoriesOptionStyle"
import arrow from "@/assets/imgs/drawer/arrowRightGrey.svg"
import { useNavigate } from "react-router-dom"

type Props = {
    title: string
}

export default function CategoriesOption({ title }: Props) {
    const navigate = useNavigate()
    return (
        <S.CategoriesOptionContainer>
            <S.CategoriesOptionTitle>{title}</S.CategoriesOptionTitle>
            <img src={arrow} alt="left arrow icon" onClick={() => navigate(`/${title}`)} />
        </S.CategoriesOptionContainer>
    )
}