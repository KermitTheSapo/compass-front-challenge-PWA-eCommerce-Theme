import * as S from "./filterOptionStyle"

type Props = {
    name: string;
    id: string;
}

export default function FilterOption({ name, id }: Props) {
    return (
        <S.OptionItem>
            <S.InputCheckbox type="checkbox" id={id} />
            <S.Label htmlFor={id}>{name}</S.Label>
        </S.OptionItem>
    )
}