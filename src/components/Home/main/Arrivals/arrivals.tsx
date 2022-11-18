import * as S from "./arrivalsStyle"
import ItemArrival from "./itemArrival/itemArrival"
import heart from "../../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../../assets/imgs/home/main/arrivals/heartFill.svg"
import grande from "../../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../../assets/imgs/home/main/arrivals/boker.png"
import Sheet from "../sheet/sheet"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import keepState from "../../../../utils/keepState"

export default function Arrivals() {
    const [grandeStatus, setGrandeStatus] = useState(false)
    // const [grandeStatus, setGrandeStatus] = keepState(grandeStatus);
    const showConsole = () => {
        grandeStatus === true ? setGrandeStatus(false) : setGrandeStatus(true)
    }
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
                <ItemArrival onClick={() => showConsole()} ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                {grandeStatus && <Sheet />}
                <ItemArrival onClick={() => showConsole()} ImgSrc={boker} ImgAlt={""} itemName={"Boker"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom"} Price={"$34.55"} link="/error" />
                <ItemArrival onClick={() => showConsole()} ImgSrc={boker} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} link="/error" />
                <ItemArrival onClick={() => showConsole()} ImgSrc={boker} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} link="/error" />
                <ItemArrival onClick={() => showConsole()} ImgSrc={boker} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} link="/error" />
            </S.ArrivalList>
        </S.ArrivalsSection>
    )
}