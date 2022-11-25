import { Reset } from "../../assets/styles/reset"
import * as S from "./productsIconsStyle"
import skincare from "../assets/icons/productIcons/skincare.svg"
import jewellery from "../assets/icons/productIcons/jewellery.svg"
import handbags from "../assets/icons/productIcons/handbags.svg"
import watch from "../assets/icons/productIcons/watch.svg"
import skincareFill from "../assets/icons/productIcons/skincare-fill.svg"
import jewelleryFill from "../assets/icons/productIcons/jewellery-fill.svg"
import handbagsFill from "../assets/icons/productIcons/handbags-fill.svg"
import watchFill from "../assets/icons/productIcons/watch-fill.svg"


export default function ProductIcons() {
    return (
        <S.ProductIconsContainer>
            <img src={skincare} alt="" />
            <img src={jewellery} alt="" />
            <img src={handbags} alt="" />
            <img src={watch} alt="" />
            <img src={skincareFill} alt="" />
            <img src={jewelleryFill} alt="" />
            <img src={handbagsFill} alt="" />
            <img src={watchFill} alt="" />
            <Reset />
        </S.ProductIconsContainer>
    )
}
