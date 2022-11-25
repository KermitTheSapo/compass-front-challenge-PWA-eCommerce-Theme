import { Reset } from "../../assets/styles/reset"
import BagImg from "./bagImg/bagImg";
import CategoriesImg from "./categoriesImg/categoriesImg";
import HeartImg from "./heartImg/heartImg";
import HouseImg from "./houseImg/houseImg";

export default function NavigationIcons() {

    return (
        <div>
            <Reset />
            <HouseImg />
            <HeartImg />
            <CategoriesImg />
            <BagImg />
        </div>
    )
}

