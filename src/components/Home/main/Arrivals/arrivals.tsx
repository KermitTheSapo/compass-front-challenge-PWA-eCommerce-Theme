import * as S from "./arrivalsStyle"
import ItemArrival from "./itemArrival/itemArrival"
import heart from "../../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../../assets/imgs/home/main/arrivals/heartFill.svg"
import grande from "../../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../../assets/imgs/home/main/arrivals/boker.png"
import coach from "../../../../assets/imgs/productPage/coach.png"
import remus from "../../../../assets/imgs/remus/remus.png"
import Sheet from "../sheet/sheet"
import boujee from "../../../../assets/imgs/boujee/boujee.png"
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

                <ItemArrival onClick={() => showConsole()} ImgSrc={coach} ImgAlt={""} itemName={"Coach"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Leather Coach Bag"} Price={"$54.69"} link="/coach" />

                <ItemArrival onClick={() => showConsole()} ImgSrc={remus} ImgAlt={""} itemName={"Remus"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Brown Strap Bag"} Price={"$57.00"} link="/remus" />
                <ItemArrival onClick={() => showConsole()} ImgSrc={boujee} ImgAlt={""} itemName={"boujee"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Black Bag"} Price={"$56.49"} link="/boujee" />
            </S.ArrivalList>
        </S.ArrivalsSection>
    )
}