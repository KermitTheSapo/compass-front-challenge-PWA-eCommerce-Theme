import * as S from "./drawerStyle"
import arrow from "@/assets/imgs/drawer/arrowRight.svg"
import CategoriesOption from "./categoriesOption/categoriesOption"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getContact } from "../../../products/contact"
type Props = {
    setState: (value: React.SetStateAction<boolean>) => void
}

export default function Drawer({ setState }: Props) {
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
        getContact().then(res => setContact(res[res.length - 1]))
    }, [])
    return (
        <>
            <S.DrawerDark onClick={() => setState(false)}></S.DrawerDark>
            <S.DrawerContent>
                <S.DrawerHeader>
                    <S.Profile>
                        <S.ProfileContent>
                            <S.ImgProfile src={contact.image} alt="user image" />
                            <S.ProfileText>Hello, {contact.firstName === "" ? "guest" : contact.firstName}!</S.ProfileText>
                        </S.ProfileContent>
                        <S.ImgArrow src={arrow} alt="left arrow icon" onClick={() => navigate("/profile")} />
                    </S.Profile>
                </S.DrawerHeader>
                <S.Separator></S.Separator>
                <S.TopCategories>
                    <S.TopCategoriesTitle>Top Categories</S.TopCategoriesTitle>
                    <S.Categories>
                        <CategoriesOption title="Skincare" />
                        <CategoriesOption title="Apparels" />
                        <CategoriesOption title="Jewellery" />
                        <CategoriesOption title="Handbags" />
                        <CategoriesOption title="Eyewear" />
                        <CategoriesOption title="Fragrance" />
                        <CategoriesOption title="Watches" />
                        <CategoriesOption title="About" />
                    </S.Categories>
                </S.TopCategories>
                <S.Separator></S.Separator>
                <S.Contact>
                    <S.ContactTitle>Contact</S.ContactTitle>
                    <S.ContactContent>
                        <CategoriesOption title="Help & Support" />
                        <CategoriesOption title="Feedback & Suggestions" />
                        <CategoriesOption title="Visit Websites" />
                    </S.ContactContent>
                </S.Contact>
            </S.DrawerContent>
        </>
    )
}