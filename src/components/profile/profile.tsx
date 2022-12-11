import * as S from "./profileStyle"
import arrowRightGrey from "@/assets/imgs/profile/arrowRightGrey.svg"
import SideNavigation from "./sideNavigation/sideNavigation"
import Navigation from "../../components/Home/main/bottom-navigation/navigation"
import { Helmet } from "react-helmet"
import UserProfile from "./userProfile/userProfile"
import { useEffect, useState } from "react"
import { getContact } from "../../products/contact"
import { useNavigate } from "react-router-dom"


export default function Profile() {
    const [size, setSize] = useState(false)
    const navigate = useNavigate()
    const [contact, setContact] = useState({
        _id: "",
        ddd: "",
        phone: "",
        firstName: "",
        LastName: "",
        email: "",
        dateBirth: "",
        password: "",
        image: ""
    })
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
    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    useEffect(() => {
        getContact().then(res => setContact(res[res.length - 1]))
    }, [])
    return (
        <S.ProfileContainer>
            <Helmet>
                <title>Coral'l | Profile</title>
            </Helmet>
            <S.ProfileHeader>
                <S.ProfileTitle>Profile</S.ProfileTitle>
            </S.ProfileHeader>
            <S.ProfileBanner>
                <S.ImgProfile src={contact.image} alt="profile img" />
                <S.ProfileContent>
                    <S.ProfileName>{`${contact.firstName} ${contact.LastName}`}</S.ProfileName>
                    <S.ProfileEmail>{contact.email}</S.ProfileEmail>
                    <S.ProfileNumber>{`+${contact.ddd} ${maskPhone(contact.phone)}`}</S.ProfileNumber>
                </S.ProfileContent>
                <S.ImgArrow src={arrowRightGrey} alt="right arrow" onClick={() => navigate("/personal")} />
            </S.ProfileBanner>
            <S.NavigationOptions>
                <SideNavigation path={"/personal"} name={"Personal Information"} />
                <SideNavigation path={"/refer"} name={"Refer and Earn"} />
                <SideNavigation path={"/orders"} name={"My Orders"} />
                <SideNavigation path={"/wishlist"} name={"My Wishlist"} />
                <SideNavigation path={"/myReviews"} name={"My Reviews"} />
                <SideNavigation path={"/address"} name={"My Address Book"} />
                <SideNavigation path={"/savedCards"} name={"My Saved Cards"} />
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