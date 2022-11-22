import * as S from "./navigationStyle"

import Home from "@/assets/imgs/home/navigation/home.svg"
import HomeFill from "@/assets/imgs/home/navigation/home-fill.svg"
import categories from "@/assets/imgs/home/navigation/categories.svg"
import categoriesFill from "@/assets/imgs/home/navigation/categories-fill.svg"
import profile from "@/assets/imgs/home/navigation/profile.svg"
import profileFill from "@/assets/imgs/home/navigation/profile-fill.svg"
import bag from "@/assets/imgs/home/navigation/bag.svg"
import bagFill from "@/assets/imgs/home/navigation/bag-fill.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navigation() {
    const [activeHome, setActiveHome] = useState(false)
    const [activeCategories, setActiveCategories] = useState(false)
    const [activeProfile, setActiveProfile] = useState(false)
    const [activeBag, setActiveBag] = useState(false)

    const navigate = useNavigate();


    return (
        <S.Navigation>
            <S.LinkNavTab onClick={() => navigate("/error")} onMouseEnter={() => setActiveHome(true)} onMouseLeave={() => setActiveHome(false)}>
                <S.NavTab>
                    <S.Img src={activeHome ? HomeFill : Home} alt="icon of a house" />
                    <S.Name>Home</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
            <S.LinkNavTab onClick={() => navigate("/error")} onMouseEnter={() => setActiveCategories(true)} onMouseLeave={() => setActiveCategories(false)}>
                <S.NavTab>
                    <S.Img src={activeCategories ? categoriesFill : categories} alt="4 balls icon" />
                    <S.Name>Categories</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
            <S.LinkNavTab onClick={() => navigate("/error")} onMouseEnter={() => setActiveProfile(true)} onMouseLeave={() => setActiveProfile(false)}>
                <S.NavTab>
                    <S.Img src={activeProfile ? profileFill : profile} alt="icon of the head and shoulder part of a person" />
                    <S.Name>Profile</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
            <S.LinkNavTab onClick={() => navigate("/error")} onMouseEnter={() => setActiveBag(true)} onMouseLeave={() => setActiveBag(false)}>
                <S.NavTab>
                    <S.Img src={activeBag ? bagFill : bag} alt="a bag icon" />
                    <S.Name>Bag</S.Name>
                </S.NavTab>
            </S.LinkNavTab>
        </S.Navigation>
    )
}