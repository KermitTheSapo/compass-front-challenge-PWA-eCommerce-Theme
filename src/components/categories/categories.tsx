import CategoriesOptions from "./categoriesOptions/categoriesOptions"
import * as S from "./categoriesStyle"

import skincare from "@/assets/imgs/categories/skincare.png"
import fragrance from "@/assets/imgs/categories/fragrance.png"
import handbags from "@/assets/imgs/categories/handbags.png"
import eyewear from "@/assets/imgs/categories/eyewear.png"
import apparels from "@/assets/imgs/categories/apparels.png"
import Navigation from "../../components/Home/main/bottom-navigation/navigation"
import { Helmet } from "react-helmet"

export default function Categories() {
    return (
        <S.CategoriesContainer>
            <Helmet>
                <title>Coral'l | Categories</title>
            </Helmet>
            <S.CategoriesHeader>
                <S.CategoriesTitle>Categories</S.CategoriesTitle>
            </S.CategoriesHeader>
            <S.CategoriesOptions>
                <CategoriesOptions img={skincare} link={"/skincare"} alt="different skin products" />
                <CategoriesOptions img={fragrance} link={"/fragrance"} alt="pink perfume with rose petals" />
                <CategoriesOptions img={handbags} link={"/handbags"} alt="orange handbag" />
                <CategoriesOptions img={eyewear} link={"/eyewear"} alt="two glasses" />
                <CategoriesOptions img={apparels} link={"/apparels"} alt="clothes thrown on a table" />
            </S.CategoriesOptions>
            <Navigation homeTrue={false} categoriesTrue={true} profileTrue={false} bagTrue={false} />
        </S.CategoriesContainer>
    )
}