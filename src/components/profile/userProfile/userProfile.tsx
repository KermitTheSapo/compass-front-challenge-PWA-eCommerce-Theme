import { useEffect, useState } from "react"
import Footer from "../../../components/footer/footer"
import Header from "../../../components/Header/Header"
import * as S from "./userProfileStyle"

import imgArrowRightMini from "@/assets/imgs/userProfile/imgArrowRightMini.svg"
import arrowLeft from "@/assets/imgs/userProfile/arrowLeft.svg"
import OptionNavigation from "./optionNavigation/optionNavigation"
import { Outlet } from "react-router-dom"

export default function UserProfile() {
    const [size, setSize] = useState(false)

    const [personal, setPersonal] = useState(true)
    const [refer, setRefer] = useState(false)
    const [order, setOrder] = useState(false)
    const [wishlist, setWishlist] = useState(false)
    const [reviews, setReviews] = useState(false)
    const [address, setAddress] = useState(false)
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        if (window.screen.width > 768) {
            setSize(true)
        } else {
            setSize(false)
        }
        window.addEventListener('resize', () => {
            if (window.screen.width > 768) {
                setSize(true)
            } else {
                setSize(false)
            }
        })
    }, [size])

    const resetOptions = () => {
        setPersonal(false)
        setRefer(false)
        setOrder(false)
        setWishlist(false)
        setReviews(false)
        setAddress(false)
        setSaved(false)
    }
    const showPersonal = () => {
        resetOptions()
        setPersonal(true)
    }
    const showRefer = () => {
        resetOptions()
        setRefer(true)
    }

    const showOrder = () => {
        resetOptions()
        setOrder(true)
    }

    const showWishlist = () => {
        resetOptions()
        setWishlist(true)
    }

    const showReviews = () => {
        resetOptions()
        setReviews(true)
    }

    const showAddress = () => {
        resetOptions()
        setAddress(true)
    }

    const showSaved = () => {
        resetOptions()
        setSaved(true)
    }

    return (
        <>
            {size && <>
                <Header />
                <S.UserProfileContainer>
                    <S.BreadCrumb>
                        <S.Label>Home</S.Label>
                        <S.ImgArrow src={imgArrowRightMini} alt="left arrow image" />
                        <S.LabelPrincipal>User Profile</S.LabelPrincipal>
                    </S.BreadCrumb>
                    <S.DivTitleAndLogout>
                        <S.TitlePage> {order ? "My Orders" : "Personal Information"}</S.TitlePage>
                        {order ? <S.SearchBar>
                            <S.ImgArrowLeft src={arrowLeft} alt="left arrow icon" />
                            <S.InputSearch type="text" placeholder="Search" />
                        </S.SearchBar> : <S.ButtonLogout >Logout</S.ButtonLogout>}
                    </S.DivTitleAndLogout>
                    <S.UserProfileContent>
                        <S.SideNavigation>
                            <OptionNavigation name={"Personal Information"} click={() => showPersonal()} state={personal} link={"/profile/"} />
                            <OptionNavigation name={"Refer and Earn"} click={() => showRefer()} state={refer} link={"/profile/refer"} />
                            <OptionNavigation name={"My Orders"} click={() => showOrder()} state={order} link={"/profile/orders"} />
                            <OptionNavigation name={"My Wishlist"} click={() => showWishlist()} state={wishlist} link={"/profile/wishlist"} />
                            <OptionNavigation name={"My Reviews"} click={() => showReviews()} state={reviews} link={"/profile/review"} />
                            <OptionNavigation name={"My Address Book"} click={() => showAddress()} state={address} link={"/profile/address"} />
                            <OptionNavigation name={"My Saved Cards"} click={() => showSaved()} state={saved} link={"/profile/saved"} />
                        </S.SideNavigation>
                        <S.PersonInformation>
                            <Outlet />
                        </S.PersonInformation>
                    </S.UserProfileContent>
                </S.UserProfileContainer>
                <Footer />
            </>}
        </>
    )
}