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

type Props = {
    name: string;
};

export default function Category({ name }: Props) {
    const navigate = useNavigate();
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
                    <S.GridSort>
                        <S.GridDiv>
                            <S.ImgGrid src={grid} alt="" />
                        </S.GridDiv>
                        <S.GridDiv>
                            <S.ImgGrid src={sortImg} alt="" />
                        </S.GridDiv>
                        <S.ParagraphShow>Showing 1 - 40 of 145 items</S.ParagraphShow>
                        <S.ToShow>
                            <h3>To Show</h3>
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </S.ToShow>
                        <S.SortBy>
                            <h3>Sort By</h3>
                            <select name="" id="">
                                <option value="Position">Position</option>
                                <option value="Position">Position</option>
                                <option value="Position">Position</option>
                                <option value="Position">Position</option>
                                <option value="Position">Position</option>
                            </select>
                        </S.SortBy>
                        <S.ProductHeader>
                            <S.ProductsCount>255 Products</S.ProductsCount>
                        </S.ProductHeader>
                    </S.GridSort>
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
            </S.CategoryDiv>
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