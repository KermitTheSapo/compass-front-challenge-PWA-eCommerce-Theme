import * as S from "./arrivalsStyle"
import ItemArrival from "./itemArrival/itemArrival"
import heart from "../../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../../assets/imgs/home/main/arrivals/heartFill.svg"
import grande from "../../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../../assets/imgs/home/main/arrivals/boker.png"
import coach from "../../../../assets/imgs/productPage/coach.png"
import remus from "../../../../assets/imgs/remus/remus.png"
import boujee from "../../../../assets/imgs/boujee/boujee.png"
import collosal from "../../../../assets/imgs/productPage/collosal.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BottomSheetHome from "./bottomSheetHome/bottomSheetHome"

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
                <ItemArrival onClick={() => setGrandeStatus(true)} ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link={window.screen.width > 768 ? "/grande" : ""} />
                {grandeStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setGrandeStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"Grande"} description={"Blossom Pouch"} price={"$39.49"} img={grande} />
                </>}
                <ItemArrival onClick={() => setBokerStatus(true)} ImgSrc={boker} ImgAlt={""} itemName={"Boker"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom"} Price={"$34.55"} link={window.screen.width > 768 ? "/boker" : ""} />
                {bokerStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setBokerStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"Boker"} description={"Blossom"} price={"$34.55"} img={boker} />
                </>}
                <ItemArrival onClick={() => setCoachStatus(true)} ImgSrc={coach} ImgAlt={""} itemName={"Coach"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Leather Coach Bag"} Price={"$54.69"} link={window.screen.width > 768 ? "/coach" : ""} />
                {coachStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setCoachStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"Coach"} description={"Leather Coach Bag"} price={"$54.69"} img={coach} />
                </>}
                <ItemArrival onClick={() => setRemusStatus(true)} ImgSrc={remus} ImgAlt={""} itemName={"Remus"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Brown Strap Bag"} Price={"$57.00"} link={window.screen.width > 768 ? "/remus" : ""} />
                {remusStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setRemusStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"Remus"} description={"Brown Strap Bag"} price={"$57.00"} img={remus} />
                </>}
                <ItemArrival onClick={() => setCollosalStatus(true)} ImgSrc={collosal} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} link={window.screen.width > 768 ? "/collosal" : ""} />
                {collosalStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setCollosalStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"collosal"} description={"Tall Heels"} price={"$40.00"} img={collosal} />
                </>}
                <ItemArrival onClick={() => setBoujeeStatus(true)} ImgSrc={boujee} ImgAlt={""} itemName={"boujee"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Black Bag"} Price={"$56.49"} link={window.screen.width > 768 ? "/boujee" : ""} />
                {boujeeStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setBoujeeStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"boujee"} description={"Black Bag"} price={"$56.49"} img={boujee} />
                </>}
                <ItemArrival onClick={() => setBoujeeStatus(true)} ImgSrc={boujee} ImgAlt={""} itemName={"boujee"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Black Bag"} Price={"$56.49"} link={window.screen.width > 768 ? "/boujee" : ""} />
                {boujeeStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setBoujeeStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"boujee"} description={"Black Bag"} price={"$56.49"} img={boujee} />
                </>}
                <ItemArrival onClick={() => setBoujeeStatus(true)} ImgSrc={boujee} ImgAlt={""} itemName={"boujee"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Black Bag"} Price={"$56.49"} link={window.screen.width > 768 ? "/boujee" : ""} />
                {boujeeStatus && <>
                    <S.BottomSheetHomeDark onClick={() => setBoujeeStatus(false)}></S.BottomSheetHomeDark>
                    <BottomSheetHome name={"boujee"} description={"Black Bag"} price={"$56.49"} img={boujee} />
                </>}
            </S.ArrivalList>
        </S.ArrivalsSection>
    )
}