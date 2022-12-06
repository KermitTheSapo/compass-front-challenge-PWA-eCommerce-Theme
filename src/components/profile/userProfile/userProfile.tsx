import { useEffect, useState } from "react"
import Footer from "../../../components/footer/footer"
import Header from "../../../components/Header/Header"
import * as S from "./userProfileStyle"

import imgArrowRightMini from "@/assets/imgs/userProfile/imgArrowRightMini.svg"
import arrowLeft from "@/assets/imgs/userProfile/arrowLeft.svg"
import OptionNavigation from "./optionNavigation/optionNavigation"
import PersonalInfo from "./personalInfo/personalInfo"
import OrderTab from "./orderTab/orderTab"

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
                        <S.ImgArrow src={imgArrowRightMini} alt="" />
                        <S.LabelPrincipal>User Profile</S.LabelPrincipal>
                    </S.BreadCrumb>
                    <S.DivTitleAndLogout>
                        <S.TitlePage> {order ? "My Orders" : "Personal Information"}</S.TitlePage>
                        {order ? <S.SearchBar>
                            <S.ImgArrowLeft src={arrowLeft} alt="" />
                            <S.InputSearch type="text" placeholder="Search" />
                        </S.SearchBar> : <S.ButtonLogout>Logout</S.ButtonLogout>}
                    </S.DivTitleAndLogout>
                    <S.UserProfileContent>
                        <S.SideNavigation>
                            <OptionNavigation name={"Personal Information"} click={() => showPersonal()} state={personal} />
                            <OptionNavigation name={"Refer and Earn"} click={() => showRefer()} state={refer} />
                            <OptionNavigation name={"My Orders"} click={() => showOrder()} state={order} />
                            <OptionNavigation name={"My Wishlist"} click={() => showWishlist()} state={wishlist} />
                            <OptionNavigation name={"My Reviews"} click={() => showReviews()} state={reviews} />
                            <OptionNavigation name={"My Address Book"} click={() => showAddress()} state={address} />
                            <OptionNavigation name={"My Saved Cards"} click={() => showSaved()} state={saved} />
                        </S.SideNavigation>
                        <S.PersonInformation>
                            {
                                personal && <PersonalInfo />
                            }
                            {
                                refer && <h3>Refer</h3>
                            }
                            {
                                order && <OrderTab />
                            }
                            {
                                wishlist && <h3>Wishlist</h3>
                            }
                            {
                                reviews && <h3>Reviews</h3>
                            }
                            {
                                address && <h3>Address</h3>
                            }
                            {
                                saved && <h3>Saved</h3>
                            }
                        </S.PersonInformation>
                    </S.UserProfileContent>
                </S.UserProfileContainer>
                <Footer />
            </>}
        </>
    )
}