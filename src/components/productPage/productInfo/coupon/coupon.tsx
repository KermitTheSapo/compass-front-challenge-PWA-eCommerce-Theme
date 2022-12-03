import * as S from "./couponStyle"

type Props = {
    name: string;
    code: string;
}
export default function Coupon({ name, code }: Props) {
    return (
        <S.Coupon>
            <S.CouponInfo>
                <S.CouponTitle>{name}</S.CouponTitle>
                <S.CouponTerms>Terms & Conditions</S.CouponTerms>
            </S.CouponInfo>
            <S.CouponValue>
                <S.CouponCodeName>Use Code</S.CouponCodeName>
                <S.CouponCode>{code}</S.CouponCode>
            </S.CouponValue>
        </S.Coupon>
    )
}