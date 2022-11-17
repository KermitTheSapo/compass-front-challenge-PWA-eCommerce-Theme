import * as S from "./handbagsStyle"

import arrow from "../../../assets/imgs/category/handbags/arrow.svg"
import sort from "../../../assets/imgs/category/handbags/sort.svg"
import filter from "../../../assets/imgs/category/handbags/filter.svg"

import ItemArrival from "../../Home/main/Arrivals/itemArrival/itemArrival"
import heart from "../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../assets/imgs/home/main/arrivals/heartFill.svg"
import grande from "../../../assets/imgs/home/main/arrivals/grande.png"

export default function Handbags() {
    return (
        <S.HandbagsContainer>
            <S.Header>
                <S.LinkArrow href="/"><S.ImgArrow src={arrow} alt="" /></S.LinkArrow>
                <S.Title>Handbags</S.Title>
            </S.Header>
            <S.Content>
                <S.ProductsCount>255 Products</S.ProductsCount>
                <S.Products>
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                    <ItemArrival ImgSrc={grande} ImgAlt={""} itemName={"Grande"} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={"Blossom Pouch"} Price={"$39.49"} link="/grandeItem" />
                </S.Products>
            </S.Content>
            <S.FooterBar>
                <S.BtnDiv>
                    <S.ImgIcon src={sort} alt="" />
                    <S.FooterName>Sort</S.FooterName>
                </S.BtnDiv>
                <S.BtnDiv>
                    <S.ImgIcon src={filter} alt="" />
                    <S.FooterName>Filter</S.FooterName>
                </S.BtnDiv>
            </S.FooterBar>
        </S.HandbagsContainer>
    )
}