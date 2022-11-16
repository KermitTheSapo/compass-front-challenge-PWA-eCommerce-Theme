import * as S from "./arrivalsStyle"
import ItemArrival from "./itemArrival/itemArrival"
import heart from "../../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../../assets/imgs/home/main/arrivals/heartFill.svg"
import grande from "../../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../../assets/imgs/home/main/arrivals/boker.png"

export default function Arrivals() {
    return (
        <S.ArrivalsSection>
            <S.ArrivalHeader>
                <S.HeaderTitle>New Arrivals</S.HeaderTitle>
                <S.LinkParagraph href="/error">
                    <S.Paragraph>View all &gt;</S.Paragraph>
                </S.LinkParagraph>
            </S.ArrivalHeader>
            <S.ArrivalList>
                <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} />
                <ItemArrival ImgSrc={boker} ImgAlt={""} itemName={"Boker"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom"} Price={"$34.55"} />
                <ItemArrival ImgSrc={boker} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} />
                <ItemArrival ImgSrc={boker} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} />
                <ItemArrival ImgSrc={boker} ImgAlt={""} itemName={"Collosal"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Tall Heels"} Price={"$40.00"} />
            </S.ArrivalList>
        </S.ArrivalsSection>
    )
}