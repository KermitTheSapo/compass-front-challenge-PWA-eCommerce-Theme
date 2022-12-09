import * as S from "./referStyle"

import arrow from "@/assets/imgs/refer/arrow.svg"
import art from "@/assets/imgs/refer/art.svg"
import { useNavigate } from "react-router-dom";
export default function Refer() {
    const navigate = useNavigate();
    return (
        <S.ReferContainer>
            <S.ReferHeader>
                <S.ImgArrow src={arrow} alt="" onClick={() => navigate(-1)} />
                <S.ReferTitle>Refer & Earn</S.ReferTitle>
            </S.ReferHeader>
            <S.ReferBody>
                <S.CodeContainer>
                    <S.ImgArt src={art} alt="" />
                    <S.Paragraph>Invite your friend and earn $20 on every invite</S.Paragraph>
                    <S.DivCode>
                        <S.Code>IVN6374730</S.Code>
                    </S.DivCode>
                    <S.ParagraphCode>Tap to copy the code.</S.ParagraphCode>
                </S.CodeContainer>
                <S.WorkDiv>
                    <S.WorkTitle>How does this works?</S.WorkTitle>
                    <S.WorkList>
                        <S.WorkItem>How does this works?</S.WorkItem>
                        <S.WorkItem>Ask your friends to place their order with your code & get $20 discount</S.WorkItem>
                        <S.WorkItem>Once the order gets delivered you get the discount as well.</S.WorkItem>
                    </S.WorkList>
                </S.WorkDiv>
                <S.InviteBtn>Invite now</S.InviteBtn>
            </S.ReferBody>
        </S.ReferContainer>
    )
}