import * as S from "./addReviewStyle"
import cross from "@/assets/imgs/productPage/reviews/cross.svg"
import upload from "@/assets/imgs/productPage/reviews/upload.svg"
import { useNavigate } from "react-router-dom";
import Ratings from "./star/star";
import { Helmet } from "react-helmet";

export default function AddReview() {
    const navigate = useNavigate();
    return (
        <S.AddReviewContainer>
            <Helmet>
                <title>Coral'l | Add Review</title>
            </Helmet>
            <S.HeaderNav>
                <S.ImgClose onClick={() => navigate(-1)} src={cross} alt="" />
                <S.HeaderNavTitle>Add Review</S.HeaderNavTitle>
            </S.HeaderNav>
            <S.ProductRatingDiv>
                <S.ProductRatingTitle>Product Rating</S.ProductRatingTitle>
                <Ratings />
                <S.DeliveryPinCode>
                    <S.DeliveryInput type="text" placeholder="Enter Valid PinCode" />
                    <S.DeliveryBtn>Check</S.DeliveryBtn>
                </S.DeliveryPinCode>
            </S.ProductRatingDiv>
            <S.ReviewDescriptionDiv>
                <S.ReviewDescriptionTitle>Review Description</S.ReviewDescriptionTitle>
                <S.ReviewDescriptionTextarea placeholder="Enter Description"></S.ReviewDescriptionTextarea>
            </S.ReviewDescriptionDiv>
            <S.UploadDiv>
                <S.UploadTitle>Upload Product Images</S.UploadTitle>
                <S.LabelUpload htmlFor="upload">
                    <S.ImgUpload src={upload} alt="" />
                </S.LabelUpload>
                <S.InputUploadImg id="upload" type="file" />
            </S.UploadDiv>
            <S.ButtonSubmitDiv>
                <S.ButtonSubmit>Submit Review</S.ButtonSubmit>
            </S.ButtonSubmitDiv>
        </S.AddReviewContainer >
    )
}