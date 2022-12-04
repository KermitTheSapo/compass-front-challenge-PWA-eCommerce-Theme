import CategoriesOptions from "./categoriesOptions/categoriesOptions"
import * as S from "./categoriesStyle"

import skincare from "@/assets/imgs/categories/skincare.png"
import fragrance from "@/assets/imgs/categories/fragrance.png"
import handbags from "@/assets/imgs/categories/handbags.png"
import eyewear from "@/assets/imgs/categories/eyewear.png"
import apparels from "@/assets/imgs/categories/apparels.png"
import Navigation from "../../components/Home/main/bottom-navigation/navigation"

export default function Categories() {
    return (
        <S.CategoriesContainer>
            <S.CategoriesHeader>
                <S.CategoriesTitle>Categories</S.CategoriesTitle>
            </S.CategoriesHeader>
            <S.CategoriesOptions>
                <CategoriesOptions img={skincare} link={"/skincare"} />
                <CategoriesOptions img={fragrance} link={"/fragrance"} />
                <CategoriesOptions img={handbags} link={"/handbags"} />
                <CategoriesOptions img={eyewear} link={"/eyewear"} />
                <CategoriesOptions img={apparels} link={"/apparels"} />
            </S.CategoriesOptions>
            <Navigation homeTrue={false} categoriesTrue={true} profileTrue={false} bagTrue={false} />
        </S.CategoriesContainer>
    )
}