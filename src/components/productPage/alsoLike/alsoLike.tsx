import AlsoLikeItem from "./alsoLikeItem/alsoLikeItem"

import grande from "../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"
import coach from "../../../assets/imgs/productPage/coach.png"
import remus from "../../../assets/imgs/remus/remus.png"
import boujee from "../../../assets/imgs/boujee/boujee.png"


import * as S from "./alsoLikeStyle"

export default function AlsoLike() {

    return (
        <S.AlsoLike>
            <S.AlsoLikeTitle>You may also like</S.AlsoLikeTitle>
            <S.AlsoLikeProductsList>
                <AlsoLikeItem imgSrc={grande} imgAlt={""} itemName={"Grande"} description={"Blossom Pouch"} price={"$39.49"} link={"/grande"} />
                <AlsoLikeItem imgSrc={boker} imgAlt={""} itemName={"Boker"} description={"Blossom"} price={"$34.55"} link={"/boker"} />
                <AlsoLikeItem imgSrc={coach} imgAlt={""} itemName={"Coach"} description={"Leather Coach Bag"} price={"$54.69"} link={"/coach"} />
                <AlsoLikeItem imgSrc={remus} imgAlt={""} itemName={"Remus"} description={"Brown Strap Bag"} price={"$57.00"} link={"/remus"} />
                <AlsoLikeItem imgSrc={boujee} imgAlt={""} itemName={"Boujee"} description={"Black Bag"} price={"$56.49"} link={"/boujee"} />
            </S.AlsoLikeProductsList>
        </S.AlsoLike>
    )
}