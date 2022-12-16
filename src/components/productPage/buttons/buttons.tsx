import * as S from "./buttonsStyle"

type Props = {
    onClick: () => void;
    wishlist: () => void;
}

export default function Buttons({ onClick, wishlist }: Props) {
    return (
        <S.ButtonsContainer>
            <S.ButtonAddBag onClick={onClick}>Add to bag</S.ButtonAddBag>
            <S.ButtonAddWish onClick={wishlist}>Add To Wishlist</S.ButtonAddWish>
        </S.ButtonsContainer>
    )
}