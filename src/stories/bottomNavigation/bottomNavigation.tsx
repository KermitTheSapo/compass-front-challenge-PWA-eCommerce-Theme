import { Reset } from "../../assets/styles/reset"
import * as S from "./bottomNavigationStyle"
import homeOff from "../assets/bottomNavigation/home-off.svg"
import homeOn from "../assets/bottomNavigation/home.svg"
import categoriesOff from "../assets/bottomNavigation/categories-off.svg"
import categoriesOn from "../assets/bottomNavigation/categories-on.svg"
import profileOff from "../assets/bottomNavigation/profile-off.svg"
import profileOn from "../assets/bottomNavigation/profile-on.svg"
import bagOff from "../assets/bottomNavigation/bag-off.svg"
import bagOn from "../assets/bottomNavigation/bag-on.svg"

import useState from 'storybook-addon-state';

export default function BottomNavigation() {
    const [hoverHome, setHoverHome] = useState("0", false);
    const [hoverCategories, setHoverCategories] = useState("1", false);
    const [hoverProfile, setHoverProfile] = useState("2", false);
    const [hoverBag, setHoverBag] = useState("3", false);
    return (
        <S.BottomNavigationContainer>
            <Reset />
            <S.Tab onMouseEnter={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)} >
                <S.ImgIcon src={hoverHome ? homeOn : homeOff} alt="" />
                {hoverHome && <S.labelParagraph>Home</S.labelParagraph>}
            </S.Tab>
            <S.Tab onMouseEnter={() => setHoverCategories(true)} onMouseLeave={() => setHoverCategories(false)} >
                <S.ImgIcon src={hoverCategories ? categoriesOn : categoriesOff} alt="" />
                {hoverCategories && <S.labelParagraph>Categories</S.labelParagraph>}
            </S.Tab>
            <S.Tab onMouseEnter={() => setHoverProfile(true)} onMouseLeave={() => setHoverProfile(false)} >
                <S.ImgIcon src={hoverProfile ? profileOn : profileOff} alt="" />
                {hoverProfile && <S.labelParagraph>Profile</S.labelParagraph>}
            </S.Tab>
            <S.Tab onMouseEnter={() => setHoverBag(true)} onMouseLeave={() => setHoverBag(false)}>
                <S.ImgIcon src={hoverBag ? bagOn : bagOff} alt="" />
                {hoverBag && <S.labelParagraph>Bag</S.labelParagraph>}
            </S.Tab>
        </S.BottomNavigationContainer>
    )
}

