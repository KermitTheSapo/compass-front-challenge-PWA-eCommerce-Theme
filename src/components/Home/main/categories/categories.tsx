import * as S from "./categoriesStyle"
import Item from "./item/item"
import skinCare from '../../../../assets/imgs/home/main/categories/skincare.svg'
import Jewellery from '../../../../assets/imgs/home/main/categories/Jewellery.svg'
import Handbags from '../../../../assets/imgs/home/main/categories/Handbags.svg'
import Watches from '../../../../assets/imgs/home/main/categories/Watches.svg'

export default function Categories() {
    return (
        <S.CategoriesContainer>
            <S.CategoriesTitle>Top Categories</S.CategoriesTitle>
            <S.CategoriesList>
                <Item label={"Skincare"} icon={skinCare} alt={""} route={"/error"} />
                <Item label={"Jewellery"} icon={Jewellery} alt={""} route={"/error"} />
                <Item label={"Handbags"} icon={Handbags} alt={""} route={"/handbags"} />
                <Item label={"Watches"} icon={Watches} alt={""} route={"/error"} />
                <Item label={"Eyewear"} icon={skinCare} alt={""} route={"/error"} />
                <Item label={"Eyewear"} icon={skinCare} alt={""} route={"/error"} />
                <Item label={"Eyewear"} icon={skinCare} alt={""} route={"/error"} />
                <Item label={"Eyewear"} icon={skinCare} alt={""} route={"/error"} />
            </S.CategoriesList>
        </S.CategoriesContainer>
    )
}