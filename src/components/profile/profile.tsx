import * as S from "./profileStyle"

import imgProfile from "@/assets/imgs/profile/imgProfile.png"
import arrowRightGrey from "@/assets/imgs/profile/arrowRightGrey.svg"
import SideNavigation from "./sideNavigation/sideNavigation"
import Navigation from "../../components/Home/main/bottom-navigation/navigation"
import { Helmet } from "react-helmet"
import UserProfile from "./userProfile/userProfile"
import { useEffect, useState } from "react"


export default function Profile() {
    const [size, setSize] = useState(false)
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
    return (
        <S.ProfileContainer>
            <Helmet>
                <title>Coral'l | Profile</title>
            </Helmet>
            <S.ProfileHeader>
                <S.ProfileTitle>Profile</S.ProfileTitle>
            </S.ProfileHeader>
            <S.ProfileBanner>
                <S.ImgProfile src={imgProfile} alt="profile img" />
                <S.ProfileContent>
                    <S.ProfileName>Tina Vargayee</S.ProfileName>
                    <S.ProfileEmail>tinavar@vinho.com</S.ProfileEmail>
                    <S.ProfileNumber>+85-5478564</S.ProfileNumber>
                </S.ProfileContent>
                <S.ImgArrow src={arrowRightGrey} alt="right arrow" />
            </S.ProfileBanner>
            <S.NavigationOptions>
                <SideNavigation path={"/error"} name={"Personal Information"} />
                <SideNavigation path={"/error"} name={"Refer and Earn"} />
                <SideNavigation path={"/error"} name={"My Orders"} />
                <SideNavigation path={"/error"} name={"My Wishlist"} />
                <SideNavigation path={"/error"} name={"My Reviews"} />
                <SideNavigation path={"/address"} name={"My Address Book"} />
                <SideNavigation path={"/error"} name={"My Saved Cards"} />
            </S.NavigationOptions>
            <S.BtnLogoutDiv>
                <S.BtnLogout>Logout</S.BtnLogout>
            </S.BtnLogoutDiv>
            <S.BottomNavigation>
                <Navigation homeTrue={false} categoriesTrue={false} profileTrue={true} bagTrue={false} />
            </S.BottomNavigation>
            {size && <UserProfile />}

        </S.ProfileContainer>
    )
}