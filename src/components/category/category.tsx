import * as S from "./categoryStyle"

import arrow from "../../assets/imgs/category/handbags/arrow.svg"
import sort from "../../assets/imgs/category/handbags/sort.svg"
import hero from "../../assets/imgs/category/hero.png"
import arrowRightSmall from "../../assets/imgs/category/arrow-right-small.svg"
import grid from "../../assets/imgs/category/grid.svg"
import sortImg from "../../assets/imgs/category/sort.svg"
import filter from "../../assets/imgs/category/handbags/filter.svg"
import heart from "../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../assets/imgs/home/main/arrivals/heartFill.svg"
import grande from "../../assets/imgs/home/main/arrivals/grande.png"
import ItemArrival from "../Home/main/Arrivals/itemArrival/itemArrival"
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import MenuSideNav from "./menuSideNav/menuSideNav"
import { useState } from "react"

type Props = {
    name: string;
};

export default function Category({ name }: Props) {
    const navigate = useNavigate();

    const [isGridActive, setIsGridActive] = useState(true)
    const [isSortActive, setIsSortActive] = useState(false)

    const changeValueGrid = () => {
        setIsGridActive(true)
        setIsSortActive(false)
    }
    const changeValueSort = () => {
        setIsSortActive(true)
        setIsGridActive(false)
    }

    return (
        <S.CategoryContainer>
            <Header />
            <S.Header>
                <S.LinkArrow onClick={() => navigate("/")}><S.ImgArrow src={arrow} alt="" /></S.LinkArrow>
                <S.Title>{name}</S.Title>
            </S.Header>
            <S.Poster>
                <S.ImgPoster src={hero} alt="" />
            </S.Poster>
            <S.Breadcrumb>
                <S.BreadcrumbHorizontal>
                    <S.Label>Home</S.Label>
                    <img src={arrowRightSmall} alt="" />
                    <S.LabelPage>{name}</S.LabelPage>
                </S.BreadcrumbHorizontal>
                <S.Title>{name}</S.Title>
            </S.Breadcrumb>
            <S.CategoryDiv>
                <MenuSideNav />
                <S.Content>
                    <S.ListingOptions>
                        <S.GridSort>
                            <S.GridDiv onClick={() => isGridActive ? setIsGridActive(false) : changeValueGrid()} color={isGridActive ? "#1B4B66" : "transparent"}>
                                <S.ImgGrid src={grid} alt="" />
                            </S.GridDiv>
                            <S.GridDiv onClick={() => isSortActive ? setIsSortActive(false) : changeValueSort()} color={isSortActive ? "#1B4B66" : "transparent"}>
                                <S.ImgGrid src={sortImg} alt="" />
                            </S.GridDiv>
                        </S.GridSort>
                        <S.ParagraphShow>Showing 1 - 40 of 145 items</S.ParagraphShow>
                        <S.ToShow>
                            <S.ToShowTitle>To Show:</S.ToShowTitle>
                            <S.SelectToShow name="" id="">
                                <S.OptionToShow value="1">1</S.OptionToShow>
                                <S.OptionToShow value="2">2</S.OptionToShow>
                                <S.OptionToShow value="3">3</S.OptionToShow>
                                <S.OptionToShow value="4">4</S.OptionToShow>
                                <S.OptionToShow value="5">5</S.OptionToShow>
                            </S.SelectToShow>
                        </S.ToShow>
                        <S.SortBy>
                            <S.SortTitle>Sort By</S.SortTitle>
                            <S.SelectSort name="" id="">
                                <S.OptionSort value="Position">Position</S.OptionSort>
                                <S.OptionSort value="Position">Position</S.OptionSort>
                                <S.OptionSort value="Position">Position</S.OptionSort>
                                <S.OptionSort value="Position">Position</S.OptionSort>
                                <S.OptionSort value="Position">Position</S.OptionSort>
                            </S.SelectSort>
                        </S.SortBy>
                        <S.ProductHeader>
                            <S.ProductsCount>255 Products</S.ProductsCount>
                        </S.ProductHeader>
                    </S.ListingOptions >
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
                </S.Content >
            </S.CategoryDiv >
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
        </S.CategoryContainer >
    )
}