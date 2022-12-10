import { useNavigate } from "react-router-dom";
import * as S from "./bottomSheetOrderStyle"

type Props = {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
}

export default function BottomSheetOrder({ setState, id }: Props) {
    const navigate = useNavigate()
    return (
        <>
            <S.BottomSheetShadow onClick={() => setState(false)}></S.BottomSheetShadow>
            <S.BottomSheetContainer>
                <S.Options>
                    <S.OptionText>Ordered Items</S.OptionText>
                    <S.OptionText onClick={() => navigate(`/invoices?id=${id}`)}>Invoices</S.OptionText>
                    <S.OptionText>Shipments</S.OptionText>
                </S.Options>
            </S.BottomSheetContainer>
        </>
    )
}