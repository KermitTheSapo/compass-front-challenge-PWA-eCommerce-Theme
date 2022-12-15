import * as S from "./referStyle"

import arrow from "@/assets/imgs/refer/arrow.svg"
import art from "@/assets/imgs/refer/art.svg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
export default function Refer() {
    const navigate = useNavigate();
    // @ts-ignore
    const [code, setCode] = useState("IVN6374730")
    const [msg, setMsg] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(`${code}`)
        setMsg(true)
        setTimeout(() => {
            setMsg(false)
        }, 5000)
    }
    return (
        <S.ReferContainer>
            <Helmet>
                <title>Coral'l | Refer</title>
            </Helmet>
            <S.ReferHeader>
                <S.ImgArrow src={arrow} alt="left arrow" onClick={() => navigate(-1)} />
                <S.ReferTitle>Refer & Earn</S.ReferTitle>
            </S.ReferHeader>
            <S.ReferBody>
                <S.CodeContainer>
                    <S.ImgArt src={art} alt="icon of a receipt and an okay in the middle" />
                    <S.Paragraph>Invite your friend and earn $20 on every invite</S.Paragraph>
                    <S.DivCode onClick={() => copy()}>
                        <S.Code>{code}</S.Code>
                    </S.DivCode>
                    {
                        msg && <S.AlertCopyMsg>Copiado com sucesso!</S.AlertCopyMsg>
                    }
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