import * as S from "./navigationStyle"

import Home from "@/assets/imgs/home/navigation/home.svg"
import HomeFill from "@/assets/imgs/home/navigation/home-fill.svg"
import categories from "@/assets/imgs/home/navigation/categories.svg"
import categoriesFill from "@/assets/imgs/home/navigation/categories-fill.svg"
import profile from "@/assets/imgs/home/navigation/profile.svg"
import profileFill from "@/assets/imgs/home/navigation/profile-fill.svg"
import bag from "@/assets/imgs/home/navigation/bag.svg"
import bagFill from "@/assets/imgs/home/navigation/bag-fill.svg"
import { useNavigate } from "react-router-dom"

type Props = {
    homeTrue: boolean;
    categoriesTrue: boolean;
    profileTrue: boolean;
    bagTrue: boolean;
}

export default function Navigation({ homeTrue, categoriesTrue, profileTrue, bagTrue }: Props) {
    const navigate = useNavigate();


    return (
        <S.Navigation>
            <S.LinkNavTab onClick={() => navigate("/home")}>
                <S.NavTab>
                    <S.Img src={homeTrue ? HomeFill : Home} alt="icon of a house" />
                    <S.Name>{homeTrue ? "Home" : ""}</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
            <S.LinkNavTab onClick={() => navigate("/categories")}>
                <S.NavTab>
                    <S.Img src={categoriesTrue ? categoriesFill : categories} alt="4 balls icon" />
                    <S.Name>{categoriesTrue ? "categories" : ""}</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
            <S.LinkNavTab onClick={() => navigate("/profile")}>
                <S.NavTab>
                    <S.Img src={profileTrue ? profileFill : profile} alt="icon of the head and shoulder part of a person" />
                    <S.Name>{profileTrue ? "profile" : ""}</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
            <S.LinkNavTab onClick={() => navigate("/bag")}>
                <S.NavTab>
                    <S.Img src={bagTrue ? bagFill : bag} alt="a bag icon" />
                    <S.Name>{bagTrue ? "bag" : ""}</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
        </S.Navigation>
    )
}