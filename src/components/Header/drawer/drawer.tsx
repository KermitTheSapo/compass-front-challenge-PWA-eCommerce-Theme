import * as S from "./drawerStyle"
import imgProfile from "@/assets/imgs/drawer/imgProfile.png"
import arrow from "@/assets/imgs/drawer/arrowRight.svg"
import CategoriesOption from "./categoriesOption/categoriesOption"
import { useNavigate } from "react-router-dom"
type Props = {
    setState: (value: React.SetStateAction<boolean>) => void
}

export default function Drawer({ setState }: Props) {
    const navigate = useNavigate()
    return (
        <>
            <S.DrawerDark onClick={() => setState(false)}></S.DrawerDark>
            <S.DrawerContent>
                <S.DrawerHeader>
                    <S.Profile>
                        <S.ProfileContent>
                            <S.ImgProfile src={imgProfile} alt="" />
                            <S.ProfileText>Hello, Tina</S.ProfileText>
                        </S.ProfileContent>
                        <S.ImgArrow src={arrow} alt="" onClick={() => navigate("/profile")} />
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