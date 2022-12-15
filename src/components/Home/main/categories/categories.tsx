import * as S from "./categoriesStyle"
import Item from "./item/item"
import skinCare from '@/assets/imgs/home/main/categories/skincare.svg'
import Jewellery from '@/assets/imgs/home/main/categories/jewellery.svg'
import Handbags from '@/assets/imgs/home/main/categories/Handbags.svg'
import Watches from '@/assets/imgs/home/main/categories/Watches.svg'

export default function Categories() {
    return (
        <S.CategoriesContainer>
            <S.CategoriesTitle>Top Categories</S.CategoriesTitle>
            <S.CategoriesList>
                <Item label={"Skincare"} icon={skinCare} alt={"icon of a bottle with a straw"} route={"/skincare"} />
                <Item label={"Jewellery"} icon={Jewellery} alt={"ring icon"} route={"/jewellery"} />
                <Item label={"Handbags"} icon={Handbags} alt={"handbag icon"} route={"/handbags"} />
                <Item label={"Watches"} icon={Watches} alt={"clock icon"} route={"/watches"} />
                <Item label={"Apparels"} icon={skinCare} alt={"icon of a bottle with a straw"} route={"/apparels"} />
            </S.CategoriesList>
        </S.CategoriesContainer>
    )
}