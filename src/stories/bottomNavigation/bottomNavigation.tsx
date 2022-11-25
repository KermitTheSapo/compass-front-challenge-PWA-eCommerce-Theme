import { Reset } from "../../assets/styles/reset"
import * as S from "./bottomNavigationStyle"
import useState from 'storybook-addon-state';
import HomeImg from "./homeImg/homeImg"
import CategoriesImg from "./categoriesImg/categoriesImg"
import ProfileImg from "./profileImg/profile"
import BagImg from "./bagImg/bagImg"

interface ProfileProps {
    background?: string;
    color?: string;
}

export default function BottomNavigation({ background, color }: ProfileProps) {
    const [hoverHome, setHoverHome] = useState("0", false);
    const [hoverCategories, setHoverCategories] = useState("1", false);
    const [hoverProfile, setHoverProfile] = useState("2", false);
    const [hoverBag, setHoverBag] = useState("3", false);
    const [homeColor, setHomeColor] = useState("4", "#B6B6B6")
    const [categoriesColor, setCategoriesColor] = useState("5", "#B6B6B6")
    const [profileColor, setProfileColor] = useState("6", "#B6B6B6")
    const [bagColor, setBagColor] = useState("7", "#B6B6B6")

    return (
        <S.BottomNavigationContainer color={background}>
            <Reset />
            <S.Tab onMouseEnter={() => { setHoverHome(true); background === "#FFFFFF" ? setHomeColor("#1B4B66") : setHomeColor("#FFFFFF") }} onMouseLeave={() => { setHoverHome(false); setHomeColor("#B6B6B6") }} >
                <HomeImg color={homeColor} />
                {hoverHome && <S.labelParagraph color={color}>Home</S.labelParagraph>}
            </S.Tab>
            <S.Tab onMouseEnter={() => { setHoverCategories(true); background === "#FFFFFF" ? setCategoriesColor("#1B4B66") : setCategoriesColor("#FFFFFF") }} onMouseLeave={() => { setHoverCategories(false); setCategoriesColor("#B6B6B6") }} >
                <CategoriesImg color={categoriesColor} />
                {hoverCategories && <S.labelParagraph color={color}>Categories</S.labelParagraph>}
            </S.Tab>
            <S.Tab onMouseEnter={() => { setHoverProfile(true); background === "#FFFFFF" ? setProfileColor("#1B4B66") : setProfileColor("#FFFFFF") }} onMouseLeave={() => { setHoverProfile(false); setProfileColor("#B6B6B6") }} >
                <ProfileImg color={profileColor} />
                {hoverProfile && <S.labelParagraph color={color}>Profile</S.labelParagraph>}
            </S.Tab>
            <S.Tab onMouseEnter={() => { setHoverBag(true); background === "#FFFFFF" ? setBagColor("#1B4B66") : setBagColor("#FFFFFF") }} onMouseLeave={() => { setHoverBag(false); setBagColor("#B6B6B6") }}>
                <BagImg color={bagColor} />
                {hoverBag && <S.labelParagraph color={color}>Bag</S.labelParagraph>}
            </S.Tab>
        </S.BottomNavigationContainer>
    )
}

