import { useNavigate } from "react-router-dom";
import * as S from "./categoriesOptionsStyle"

type Props = {
    img: string
    link: string;
}

export default function CategoriesOptions({ img, link }: Props) {
    const navigate = useNavigate()
    return (
        <S.CategoriesOptions onClick={() => navigate(link)}>
            <S.CategoriesImg src={img} alt="" />
        </S.CategoriesOptions>
    )
}