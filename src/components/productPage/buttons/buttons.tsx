import * as S from "./buttonsStyle"

type Props = {
    onClick: () => void;
}

export default function Buttons({ onClick }: Props) {
    return (
        <S.ButtonsContainer>
            <S.ButtonAddBag onClick={onClick}>Add to bag</S.ButtonAddBag>
            <S.ButtonAddWish>Add To Wishlist</S.ButtonAddWish>
        </S.ButtonsContainer>
    )
}