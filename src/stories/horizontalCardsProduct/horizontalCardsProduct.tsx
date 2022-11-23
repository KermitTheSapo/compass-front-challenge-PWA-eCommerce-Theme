import { Reset } from "../../assets/styles/reset"
// import useState from 'storybook-addon-state';
import * as S from "./horizontalCardsProductStyle"

import ImgSrc from "../assets/horizontalCardsProducts/product.png"
import star from "../assets/horizontalCardsProducts/star.svg"
export default function HorizontalCardsProduct() {
    // const [quantity, setQuantity] = useState("0", 1);
    return (
        <div>
            <Reset />
            <S.AlsoLikeProducts>
                <S.Div>
                    <S.ItemLink>
                        <S.ItemArrival>
                            <S.ImgProduct src={ImgSrc} alt={""} />
                            <S.InformationDiv >
                                <S.NameHeart>
                                    <S.ItemName>Grande</S.ItemName>
                                    {/* <S.Heart onClick={() => heartStatus ? setHeartStatus(false) : setHeartStatus(true)} src={heartStatus === true ? heart : heartFill} alt="" /> */}
                                </S.NameHeart>
                                <S.ItemDescription>Blossom Pouch</S.ItemDescription>
                                <S.DivStar>
                                    <S.Star src={star} alt="" />
                                    <S.Ratings>43 Ratings </S.Ratings>
                                </S.DivStar>
                                <S.DivInfoItem>
                                    <S.ItemPrice>$78.66</S.ItemPrice>
                                    <S.ItemSafe>$78.66</S.ItemSafe>
                                    <S.ItemDiscount>50% OFF</S.ItemDiscount>
                                </S.DivInfoItem>
                            </S.InformationDiv>
                        </S.ItemArrival>
                    </S.ItemLink>
                    <S.BtnTrending>
                        <S.SpanTrending>Trending</S.SpanTrending>
                    </S.BtnTrending>
                </S.Div>
            </S.AlsoLikeProducts>
        </div>
    )
}


