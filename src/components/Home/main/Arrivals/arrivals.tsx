import * as S from "./arrivalsStyle"
import ItemArrival from "./itemArrival/itemArrival"
import grande from "@/assets/imgs/home/main/arrivals/grande.png"
import boker from "@/assets/imgs/home/main/arrivals/boker.png"
import coach from "@/assets/imgs/productPage/coach.png"
import remus from "@/assets/imgs/remus/remus.png"
import boujee from "@/assets/imgs/boujee/boujee.png"
import collosal from "@/assets/imgs/productPage/collosal.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Arrivals() {
    const [grandeStatus, setGrandeStatus] = useState(false)
    const [bokerStatus, setBokerStatus] = useState(false)
    const [coachStatus, setCoachStatus] = useState(false)
    const [remusStatus, setRemusStatus] = useState(false)
    const [boujeeStatus, setBoujeeStatus] = useState(false)
    const [collosalStatus, setCollosalStatus] = useState(false)
    const navigate = useNavigate();
    return (
        <S.ArrivalsSection>
            <S.ArrivalHeader>
                <S.HeaderTitle >New Arrivals</S.HeaderTitle>
                <S.LinkParagraph onClick={() => navigate("/error")}>
                    <S.Paragraph>View all &gt;</S.Paragraph>
                </S.LinkParagraph>
            </S.ArrivalHeader>
            <S.ArrivalList>
                <ItemArrival onClick={() => setGrandeStatus(true)} state={grandeStatus} ImgSrc={grande} ImgAlt={"picture of a pink bag"} itemName={"Grande"} Description={"Blossom Pouch"} Price={39.49} link={"/grande"} setState={() => setGrandeStatus(false)} link2="/" discount={50} information={false} />
                <ItemArrival onClick={() => setBokerStatus(true)} ImgSrc={boker} ImgAlt={"image of a leather bag"} itemName={"Boker"} Description={"Blossom"} Price={34.55} link={"/boker"} setState={() => setBokerStatus(false)} state={bokerStatus} link2="/" discount={50} information={false} />
                <ItemArrival onClick={() => setCoachStatus(true)} ImgSrc={coach} ImgAlt={"image of a leather bag with a handle"} itemName={"Coach"} Description={"Leather Coach Bag"} Price={54.69} link={"/coach"} setState={() => setCoachStatus(false)} state={coachStatus} link2="/" discount={50} information={false} />
                <ItemArrival onClick={() => setRemusStatus(true)} ImgSrc={remus} ImgAlt={"image of a leather bag with chain"} itemName={"Remus"} Description={"Brown Strap Bag"} Price={57.00} link={"/remus"} setState={() => setRemusStatus(false)} state={remusStatus} link2="/" discount={50} information={false} />
                <ItemArrival onClick={() => setCollosalStatus(true)} ImgSrc={collosal} ImgAlt={"image of black shoes with high heels"} itemName={"Collosal"} Description={"Tall Heels"} Price={40.00} link={"/collosal"} setState={() => setCollosalStatus(false)} state={collosalStatus} link2="/" discount={50} information={false} />
                <ItemArrival onClick={() => setBoujeeStatus(true)} ImgSrc={boujee} ImgAlt={"image of a black leather shoulder bag"} itemName={"boujee"} Description={"Black Bag"} Price={56.49} link={"/boujee"} setState={() => setBoujeeStatus(false)} state={boujeeStatus} link2="/" discount={50} information={false} />
            </S.ArrivalList>
        </S.ArrivalsSection>
    )
}