import { Helmet } from "react-helmet"
import Category from "../category"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"
import boujee from "../../../assets/imgs/boujee/boujee.png"
export default function Skincare() {
    return (
        <>
            <Helmet>
                <title>Coral'l | Skincare</title>
            </Helmet>
            <Category name={"Skincare"} imgProductOne={boujee} imgAltProductOne={""} itemNameOne={"boujee"} descriptionOne={"Black Bag"} priceOne={"$56.49"} linkOne={"/boujee"} imgProductTwo={boker} imgAltProductTwo={""} itemNameTwo={"Boker"} descriptionTwo={"Brown Bag"} priceTwo={"$34.55"} linkTwo={"/boker"} />
        </>
    )
}