import { Helmet } from "react-helmet"
import Category from "../category"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"
import Coach from "../../../assets/imgs/productPage/coach.png"
export default function Handbags() {
    return (
        <>
            <Category name={"Handbags"} imgProductOne={Coach} imgAltProductOne={""} itemNameOne={"Coach"} descriptionOne={"Blossom Pouch"} priceOne={"$39.49"} linkOne={"/coach"} imgProductTwo={boker} imgAltProductTwo={""} itemNameTwo={"Boker"} descriptionTwo={"Brown Bag"} priceTwo={"$34.55"} linkTwo={"/boker"} />
            <Helmet>
                <title>Coral'l | Handbags</title>
            </Helmet>
        </>
    )
}