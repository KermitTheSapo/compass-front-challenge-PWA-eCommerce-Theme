import * as S from "./addReviewStyle"
import cross from "@/assets/imgs/productPage/reviews/cross.svg"
import upload from "@/assets/imgs/productPage/reviews/upload.svg"
import { useNavigate } from "react-router-dom";
import Ratings from "./star/star";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { postReview } from "../../../products/review";

export default function AddReview() {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [starValue, setStarValue] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const getId = () => {
        // @ts-ignore
        let params = new URL(document.location).searchParams;
        setId(params.get("id") as string)
    }
    useEffect(() => {
        getId()
    }, [id])
    useEffect(() => {
        let now = new Date
        const day = (now.getDate()).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        setDate(`${day}/${now.getMonth() + 1}/${now.getFullYear()}`)
    }, [])

    const submitReview = () => {
        const review = {
            userName: "Robert J.",
            productId: id,
            title: title,
            date: date,
            rating: starValue,
            description: description,
            image: image
        }
        if (starValue === 0) {
            alert("Please enter the note for the product")
        } else if (description.length < 2) {
            alert("Please enter the description")
        } else {
            postReview(review)
            setTitle("")
            setDescription("")
            alert("Review Added successfully")
        }
    }
    // @ts-ignore
    const getImage = (event) => {
        const files = event.target.files[0]
        const reader = new FileReader()
        reader.onload = (eventReader) => {
            setImage(eventReader.target?.result as string)
        }
        reader.readAsDataURL(files)
        setTimeout(() => {
            event.target.value = ""
        }, 500)
    }
    return (
        <S.AddReviewContainer>
            <Helmet>
                <title>Coral'l | Add Review</title>
            </Helmet>
            <S.HeaderNav>
                <S.ImgClose onClick={() => navigate(-1)} src={cross} alt="A cross icon" />
                <S.HeaderNavTitle>Add Review</S.HeaderNavTitle>
            </S.HeaderNav>
            <S.ProductRatingDiv>
                <S.ProductRatingTitle>Product Rating</S.ProductRatingTitle>
                <Ratings setState={setStarValue} />
                <S.DeliveryPinCode>
                    <S.DeliveryInput type="text" placeholder="Enter the title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </S.DeliveryPinCode>
            </S.ProductRatingDiv>
            <S.ReviewDescriptionDiv>
                <S.ReviewDescriptionTitle>Review Description</S.ReviewDescriptionTitle>
                <S.ReviewDescriptionTextarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}></S.ReviewDescriptionTextarea>
            </S.ReviewDescriptionDiv>
            <S.UploadDiv>
                <S.UploadTitle>Upload Product Images</S.UploadTitle>
                <S.LabelUpload htmlFor="image">
                    <S.ImgUpload src={upload} alt="arrow icon" />
                </S.LabelUpload>
                <S.InputUploadImg id="image" type="file" onChange={(e) => getImage(e)} />
            </S.UploadDiv>
            <S.ButtonSubmitDiv>
                <S.ButtonSubmit onClick={() => submitReview()}>Submit Review</S.ButtonSubmit>
            </S.ButtonSubmitDiv>
            <img src={image} alt="" />
        </S.AddReviewContainer >
    )
}