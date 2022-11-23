import { Reset } from "../../assets/styles/reset"
import * as S from "./typographyStyle"

export default function Typography() {
    return (
        <S.TypographyContainer>
            <Reset />
            <S.FontTypeText>Inter</S.FontTypeText>
            <S.DisplayLargeText>Display Large</S.DisplayLargeText>
            <S.DisplayMediumText>Display Medium</S.DisplayMediumText>
            <S.DisplaySmallText>Display Small</S.DisplaySmallText>
            <S.TittleMediumText>Tittle Medium</S.TittleMediumText>
            <S.TittleRegularText>Tittle Regular</S.TittleRegularText>
            <S.BodyMediumText>Body Medium</S.BodyMediumText>
            <S.BodyRegularText>Body Regular</S.BodyRegularText>
            <S.LabelLargeText>Label Large</S.LabelLargeText>
            <S.LabelMediumText>Label Medium</S.LabelMediumText>
            <S.LabelSmallText>Label Small</S.LabelSmallText>
            <S.LinkText>Link</S.LinkText>
        </S.TypographyContainer>
    )
}

