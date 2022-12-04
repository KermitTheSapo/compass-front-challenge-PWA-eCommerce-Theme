import * as S from "./categoryStyle"

import arrow from "@/assets/imgs/category/handbags/arrow.svg"
import sort from "@/assets/imgs/category/handbags/sort.svg"
import hero from "@/assets/imgs/category/hero.png"
import arrowRightSmall from "@/assets/imgs/category/arrow-right-small.svg"
import grid from "@/assets/imgs/category/grid.svg"
import sortImg from "@/assets/imgs/category/sort.svg"
import filter from "@/assets/imgs/category/handbags/filter.svg"
import stars from "@/assets/imgs/home/main/arrivals/stars.svg"

import wishlist from "@/assets/imgs/category/wishlist.svg"
import bag from "@/assets/imgs/category/bag.svg"
import bagNotification from "@/assets/imgs/header/bag-notification.svg"
import search from "@/assets/imgs/category/search.svg"

import ItemArrival from "../Home/main/Arrivals/itemArrival/itemArrival"
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import MenuSideNav from "./menuSideNav/menuSideNav"
import { useEffect, useState } from "react"
import PageNumberTab from "./pageNumberTab/pageNumberTab"

import { getProducts } from "../../products/products"
import { getBag } from "../../products/bag"
type Props = {
    name: string;
};

export default function Category({ name }: Props) {
    const navigate = useNavigate();
    const [ShowBottomSheet, setShowBottomSheet] = useState(false)
    const [isGridActive, setIsGridActive] = useState(true)
    const [isSortActive, setIsSortActive] = useState(false)
    const [priceLowToHigh, setPriceLowToHigh] = useState(false)
    const [priceHighToLow, setPriceHighToLow] = useState(false)
    const [popularity, setPopularity] = useState(false)
    const [inicialProducts, setInicialProducts] = useState(true)
    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)
    const [pageFour, setPageFour] = useState(false)
    const [pageFive, setPageFive] = useState(false)
    const [bagList, setBagList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        discount: 0,
        safe: 0
    }])
    const [productsList, setProductsList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        discount: 0,
        safe: 0
    }])
    useEffect(() => {
        getProducts().then((res) => setProductsList(res))
        getBag().then((res) => setBagList(res))
    }, [])

    const setSortValue = (e) => {
        if (e.target.value === "priceLowToHigh") {
            setPriceLowToHigh(true)
            setPriceHighToLow(false)
            setInicialProducts(false)
            setPopularity(false)
        } else if (e.target.value === "priceHighToLow") {
            setPriceLowToHigh(false)
            setPriceHighToLow(true)
            setInicialProducts(false)
            setPopularity(false)
        } else if (e.target.value === "LatestProducts") {
            setPriceLowToHigh(false)
            setPriceHighToLow(false)
            setPopularity(false)
            setInicialProducts(true)
        } else if (e.target.value === "Popularity") {
            setPriceLowToHigh(false)
            setPriceHighToLow(false)
            setInicialProducts(false)
            setPopularity(true)
        }
    }

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
                <S.LeadingIcon>
                    <S.LinkArrow onClick={() => navigate("/")}><S.ImgArrow src={arrow} alt="a blue left arrow" /></S.LinkArrow>
                    <S.Title>{name}</S.Title>
                </S.LeadingIcon>
                <S.TrailingIcon>
                    <img onClick={() => navigate("/wishlist")} src={wishlist} alt="heart icon" />
                    <img src={search} onClick={() => navigate("/search")} alt="search magnifying glass icon" />
                    <img src={bagList.length === 1 ? bagNotification : bag} alt="icon of a bag" onClick={() => navigate("/bag")} />
                </S.TrailingIcon>
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
                        <S.ParagraphShow>Showing 1 - {productsList.length} of {productsList.length} items</S.ParagraphShow>
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
                            <S.SelectSort name="" id="" onChange={(e) => setSortValue(e)}>
                                <S.OptionSort value="LatestProducts">Latest Products</S.OptionSort>
                                <S.OptionSort value="priceLowToHigh">Price- Low to High</S.OptionSort>
                                <S.OptionSort value="priceHighToLow">Price- High to Low</S.OptionSort>
                                <S.OptionSort value="Popularity">Popularity</S.OptionSort>
                                <S.OptionSort value="Position">Customer Ratings</S.OptionSort>
                            </S.SelectSort>
                        </S.SortBy>
                        <S.ProductHeader>
                            <S.ProductsCount>{productsList.length} Products</S.ProductsCount>
                        </S.ProductHeader>
                    </S.ListingOptions >
                    <S.Products>
                        {pageOne && <>
                            {inicialProducts && productsList.map((item, key) => (
                                <ItemArrival key={key} ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} safe={item.safe} discount={item.discount} star={stars} ratings={item.ratings} information={true} isButtonAddTrue={true} />
                            ))}
                            {priceLowToHigh &&
                                productsList.sort(function (a, b) { return a.price - b.price }).map((item, key) => (
                                    <ItemArrival key={key} ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} safe={item.safe} discount={item.discount} star={stars} ratings={item.ratings} information={true} isButtonAddTrue={true} />
                                ))
                            }
                            {priceHighToLow && productsList.sort(function (a, b) { return b.price - a.price }).map((item, key) => (
                                <ItemArrival key={key} ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} safe={item.safe} discount={item.discount} star={stars} ratings={item.ratings} information={true} isButtonAddTrue={true} />
                            ))}
                            {popularity && productsList.sort(function (a, b) { return b.ratings - a.ratings }).map((item, key) => (
                                <ItemArrival key={key} ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item.link} safe={item.safe} discount={item.discount} star={stars} ratings={item.ratings} information={true} isButtonAddTrue={true} />
                            ))}</>}
                        {pageTwo && <S.DivPage><p>Page 2</p></S.DivPage>}
                        {pageThree && <S.DivPage><p>Page 3</p></S.DivPage>}
                        {pageFour && <S.DivPage><p>Page 4</p></S.DivPage>}
                        {pageFive && <S.DivPage><p>Page 5</p></S.DivPage>}
                    </S.Products>
                    <S.NumberPageTabs>
                        <PageNumberTab setStatePageOne={setPageOne} setStatePageTwo={setPageTwo} setStatePageThree={setPageThree} setStatePageFour={setPageFour} setStatePageFive={setPageFive} />
                    </S.NumberPageTabs>
                </S.Content >
            </S.CategoryDiv >
            <S.FooterBar>
                <S.BtnDiv onClick={() => setShowBottomSheet(true)}>
                    <S.ImgIcon src={sort} alt="a list icon with a down arrow, indicating sort" />
                    <S.FooterName>Sort</S.FooterName>
                </S.BtnDiv>
                <S.BtnDiv onClick={() => navigate("/filters")}>
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
                            <S.InputRadio type="radio" name="sort" id="customer" />
                            <S.LabelBottomSheet htmlFor="customer">Popular Products</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv onClick={() => { setPriceLowToHigh(false); setPriceHighToLow(false); setInicialProducts(false); setPopularity(true) }}>
                            <S.InputRadio type="radio" name="sort" id="popularity" />
                            <S.LabelBottomSheet htmlFor="popularity">Relevance</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv onClick={() => { setInicialProducts(true); setPriceHighToLow(false); setPriceLowToHigh(false) }}>
                            <S.InputRadio type="radio" name="sort" id="latest" />
                            <S.LabelBottomSheet htmlFor="latest">What's New</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv onClick={() => { setPriceLowToHigh(true); setPriceHighToLow(false); setInicialProducts(false) }}>
                            <S.InputRadio type="radio" name="sort" id="priceLow" />
                            <S.LabelBottomSheet htmlFor="priceLow">Price- Low to High</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv onClick={() => { setPriceHighToLow(true); setPriceLowToHigh(false); setInicialProducts(false) }}>
                            <S.InputRadio type="radio" name="sort" id="priceHigh" />
                            <S.LabelBottomSheet htmlFor="priceHigh">Price- High to Low</S.LabelBottomSheet>
                        </S.RadioDiv>
                        <S.RadioDiv>
                            <S.InputRadio type="radio" name="sort" id="customer" />
                            <S.LabelBottomSheet htmlFor="customer">On Sale</S.LabelBottomSheet>
                        </S.RadioDiv>
                    </S.BottomSheetBody>
                </S.BottomSheetContent>
            </S.BottomSheet>}
        </S.CategoryContainer >
    )
}