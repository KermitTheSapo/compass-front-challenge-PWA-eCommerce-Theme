import * as S from "./productDescriptionStyle"
import arrowDown from "@/assets/imgs/productPage/arrow-down.svg"
import arrowUp from "@/assets/imgs/productPage/arrow-up.svg"
import { useState } from "react"
export default function ProductDescription() {
    const [modalProductDescription, setModalProductDescription] = useState(false)
    return (
        <S.ProductDescription>
            <S.ProductHeader>
                <S.ProductModalTitle>Product Description</S.ProductModalTitle>
                <S.ArrowProduct onClick={() => modalProductDescription ? setModalProductDescription(false) : setModalProductDescription(true)} src={modalProductDescription ? arrowDown : arrowUp} alt="up or down arrow" />
            </S.ProductHeader>
            {modalProductDescription && <S.ProductDescriptionParagraph>
                Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long.
            </S.ProductDescriptionParagraph>}
        </S.ProductDescription>
    )
}