import * as S from "./itemDivStyle"
import plus from "@/assets/imgs/category/menuSideNav/plus.svg"
import minus from "@/assets/imgs/category/menuSideNav/minus.svg"
import { useState } from "react"

type Props = {
    name: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
};

export default function ItemDiv({ name, item1, item2, item3, item4, item5, item6 }: Props) {
    const [options, setOptions] = useState(false)
    return (
        <S.SizeDiv>
            <S.SizeHeader>
                <S.MenuSideNavTitle>{name}</S.MenuSideNavTitle>
                <S.ImgSize onClick={() => options ? setOptions(false) : setOptions(true)} src={options ? minus : plus} alt="plus or menus icon" />
            </S.SizeHeader>
            {options &&
                <S.SizeOptions>
                    <S.SizeItemCheckbox>
                        <S.InputCheckbox type="checkbox" />
                        <S.LabelCheckbox htmlFor="">{item1}</S.LabelCheckbox>
                    </S.SizeItemCheckbox>
                    <S.SizeItemCheckbox>
                        <S.InputCheckbox type="checkbox" />
                        <S.LabelCheckbox htmlFor="">{item2}</S.LabelCheckbox>
                    </S.SizeItemCheckbox>
                    <S.SizeItemCheckbox>
                        <S.InputCheckbox type="checkbox" />
                        <S.LabelCheckbox htmlFor="">{item3}</S.LabelCheckbox>
                    </S.SizeItemCheckbox>
                    <S.SizeItemCheckbox>
                        <S.InputCheckbox type="checkbox" />
                        <S.LabelCheckbox htmlFor="">{item4}</S.LabelCheckbox>
                    </S.SizeItemCheckbox>
                    <S.SizeItemCheckbox>
                        <S.InputCheckbox type="checkbox" />
                        <S.LabelCheckbox htmlFor="">{item5}</S.LabelCheckbox>
                    </S.SizeItemCheckbox>
                    <S.SizeItemCheckbox>
                        <S.InputCheckbox type="checkbox" />
                        <S.LabelCheckbox htmlFor="">{item6}</S.LabelCheckbox>
                    </S.SizeItemCheckbox>
                </S.SizeOptions>}
        </S.SizeDiv>
    )
}