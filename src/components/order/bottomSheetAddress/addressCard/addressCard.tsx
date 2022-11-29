import * as S from "./addressCardStyle"
export default function AddressCard() {
    return (
        <S.AddressCardContainer>
            <S.CardContent>
                <S.InputRadio type="radio" name="address" id="home" />
                <S.Label htmlFor="home">
                    <S.AddressCardName>Vincent Lobo</S.AddressCardName>
                    <S.AddressCardAddress>3068  Woodlawn Drive</S.AddressCardAddress>
                    <S.AddressCardCity>Milwaukee</S.AddressCardCity>
                    <S.AddressCardPhone>414-672-5388</S.AddressCardPhone>
                </S.Label>
            </S.CardContent>
            <S.EditAddress>Edit</S.EditAddress>
        </S.AddressCardContainer>
    )
}