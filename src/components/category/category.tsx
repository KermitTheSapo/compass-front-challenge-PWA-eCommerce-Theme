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
import ItemArrival from "../Home/main/Arrivals/itemArrival/itemArrival"
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import MenuSideNav from "./menuSideNav/menuSideNav"
import { useState } from "react"
import PageNumberTab from "./pageNumberTab/pageNumberTab"

type Props = {
    name: string;
    imgProductOne: string;
    imgAltProductOne: string;
    itemNameOne: string;
    descriptionOne: string;
    priceOne: string;
    linkOne: string;
    imgProductTwo: string;
    imgAltProductTwo: string;
    itemNameTwo: string;
    descriptionTwo: string;
    priceTwo: string;
    linkTwo: string;
};

export default function Category({ name, imgProductOne, imgAltProductOne, itemNameOne, descriptionOne, priceOne, linkOne, imgProductTwo, imgAltProductTwo, itemNameTwo, descriptionTwo, priceTwo, linkTwo }: Props) {
    const navigate = useNavigate();
    const [ShowBottomSheet, setShowBottomSheet] = useState(false)

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
                <S.LinkArrow onClick={() => navigate("/")}><S.ImgArrow src={arrow} alt="a blue left arrow" /></S.LinkArrow>
                <S.Title>{name}</S.Title>
            </S.Header>
            <S.Poster>
                <S.ImgPoster src={hero} alt="an image of a black bag with a black tag written black friday on a white background with a written title saying 70% off black friday" />
            </S.Poster>
            <S.Breadcrumb>
                <S.BreadcrumbHorizontal>
                    <S.Label>Home</S.Label>
                    <img src={arrowRightSmall} alt="a small black arrow to the right" />
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
                                <S.ImgGrid src={grid} alt="a square with 6 squares inside 3x3" />
                            </S.GridDiv>
                            <S.GridDiv onClick={() => isSortActive ? setIsSortActive(false) : changeValueSort()} color={isSortActive ? "#1B4B66" : "transparent"}>
                                <S.ImgGrid src={sortImg} alt="a list icon a square with a small square and a rectangle" />
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
                                <S.OptionSort value="Position">Latest Products</S.OptionSort>
                                <S.OptionSort value="Position">Price- Low to High</S.OptionSort>
                                <S.OptionSort value="Position">Price- High to Low</S.OptionSort>
                                <S.OptionSort value="Position">Popularity</S.OptionSort>
                                <S.OptionSort value="Position">Customer Ratings</S.OptionSort>
                            </S.SelectSort>
                        </S.SortBy>
                        <S.ProductHeader>
                            <S.ProductsCount>255 Products</S.ProductsCount>
                        </S.ProductHeader>
                    </S.ListingOptions >
                    <S.Products>
                        <ItemArrival ImgSrc={imgProductOne} ImgAlt={imgAltProductOne} itemName={itemNameOne} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionOne} Price={priceOne} link={linkOne} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                        <ItemArrival ImgSrc={imgProductTwo} ImgAlt={imgAltProductTwo} itemName={itemNameTwo} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={descriptionTwo} Price={priceTwo} link={linkTwo} />
                    </S.Products>
                    <S.NumberPageTabs>
                        <PageNumberTab />
                    </S.NumberPageTabs>
                </S.Content >
            </S.CategoryDiv >
            <S.FooterBar>
                <S.BtnDiv onClick={() => setShowBottomSheet(true)}>
                    <S.ImgIcon src={sort} alt="a list icon with a down arrow, indicating sort" />
                    <S.FooterName>Sort</S.FooterName>
                </S.BtnDiv>
                <S.BtnDiv>
                    <S.ImgIcon src={filter} alt="an icon of a funnel" />
                    <S.FooterName>Filter</S.FooterName>
                </S.BtnDiv>
            </S.FooterBar>
            {ShowBottomSheet && <S.BottomSheet>
                <S.BottomSheetDark onClick={() => setShowBottomSheet(false)}></S.BottomSheetDark>
                <S.BottomSheetContent>
                    <S.BottomSheetHeader>
                        <S.BottomSheetTitle>Sort By</S.BottomSheetTitle>
                        <S.Separator></S.Separator>
                    </S.BottomSheetHeader>
                    <S.BottomSheetBody>
                        <S.RadioDiv>
                            <S.InputRadio type="radio" name="sort" id="latest" />
                            <S.LabelBottomSheet htmlFor="latest">Latest Products</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv>
                            <S.InputRadio type="radio" name="sort" id="priceLow" />
                            <S.LabelBottomSheet htmlFor="priceLow">Price- Low to High</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv>
                            <S.InputRadio type="radio" name="sort" id="priceHigh" />
                            <S.LabelBottomSheet htmlFor="priceHigh">Price- High to Low</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv>
                            <S.InputRadio type="radio" name="sort" id="popularity" />
                            <S.LabelBottomSheet htmlFor="popularity">Popularity</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv>
                            <S.InputRadio type="radio" name="sort" id="customer" />
                            <S.LabelBottomSheet htmlFor="customer">Customer Ratings</S.LabelBottomSheet>
                        </S.RadioDiv>
                    </S.BottomSheetBody>
                </S.BottomSheetContent>
            </S.BottomSheet>}
        </S.CategoryContainer >
    )
}