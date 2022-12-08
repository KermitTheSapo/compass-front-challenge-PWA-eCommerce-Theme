import * as S from "./addressDetailsStyle"

export default function AddressDetails() {
    return (
        <S.AddressDetailsContainer>
            <S.AddressDetailsTitle>Address Details</S.AddressDetailsTitle>
            <S.AddressDetailsContent>
                <S.AddressDetailsLabel>Vincent Lobo</S.AddressDetailsLabel>
                <S.AddressDetailsLabel>3068  Woodlawn Drive</S.AddressDetailsLabel>
                <S.AddressDetailsLabel>Milwaukee</S.AddressDetailsLabel>
                <S.AddressDetailsLabel>414-672-5388</S.AddressDetailsLabel>
            </S.AddressDetailsContent>
        </S.AddressDetailsContainer>
    )
}