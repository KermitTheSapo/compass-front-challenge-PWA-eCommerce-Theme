import { useState } from "react"
import AddReview from "../addReview/addReview";
import AlsoLikeItem from "../alsoLike/alsoLikeItem/alsoLikeItem";
import Reviews from "../reviews/reviews";
import * as S from "./productDescriptionDesktopStyle"

type Props = {
    productDescription: string;
}

export default function ProductDescriptionDesktop({ productDescription }: Props) {
    const [tabColorOne, setTabColorOne] = useState("#1B4B66")
    const [tabColorTwo, setTabColorTwo] = useState("transparent")
    const [tabColorThree, setTabColorThree] = useState("transparent")

    const ChangeColorOne = () => {
        setTabColorOne("#1B4B66")
        setTabColorTwo("transparent")
        setTabColorThree("transparent")
    }
    const ChangeColorTwo = () => {
        setTabColorOne("transparent")
        setTabColorTwo("#1B4B66")
        setTabColorThree("transparent")
    }
    const ChangeColorThree = () => {
        setTabColorOne("transparent")
        setTabColorTwo("transparent")
        setTabColorThree("#1B4B66")
    }

    return (
        <S.ProductDescriptionDesktopContainer>
            <S.DescriptionHeader>
                <S.Tab color={tabColorOne} onClick={() => tabColorOne === "transparent" ? ChangeColorOne() : setTabColorOne("transparent")} >
                    <S.Name color={tabColorOne === "transparent" ? "#626262" : "#FFFFFF"}>Product Description</S.Name>
                </S.Tab>
                <S.Tab onClick={() => tabColorTwo === "transparent" ? ChangeColorTwo() : setTabColorTwo("transparent")} color={tabColorTwo}>
                    <S.Name color={tabColorTwo === "transparent" ? "#626262" : "#FFFFFF"}>Related Products</S.Name>
                </S.Tab>
                <S.Tab color={tabColorThree} onClick={() => tabColorThree === "transparent" ? ChangeColorThree() : setTabColorThree("transparent")} >
                    <S.Name color={tabColorThree === "transparent" ? "#626262" : "#FFFFFF"}>Ratings and Reviews</S.Name>
                </S.Tab>
            </S.DescriptionHeader>
            <S.DescriptionContent>
                {tabColorOne === "#1B4B66" && <S.Paragraph>{productDescription}</S.Paragraph>}
                {tabColorTwo === "#1B4B66" && <S.DivAlsoLike>
                    <AlsoLikeItem value={false} />
                </S.DivAlsoLike>}
                {tabColorThree === "#1B4B66" && <>
                    {/* <S.Paragraph>Ratings & Reviews</S.Paragraph> */}
                    <AddReview />
                    <Reviews />
                </>}
            </S.DescriptionContent>
        </S.ProductDescriptionDesktopContainer>
    )
}