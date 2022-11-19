import Category from "../category"
import { Helmet } from "react-helmet";
import grande from "../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"
export default function Eyewear() {
    return (
        <>
            <Category name={"Eyewear"} imgProductOne={grande} imgAltProductOne={""} itemNameOne={"Grande"} descriptionOne={"Blossom Pouch"} priceOne={"$39.49"} linkOne={"/grande"} imgProductTwo={boker} imgAltProductTwo={""} itemNameTwo={"Boker"} descriptionTwo={"Brown Bag"} priceTwo={"$34.55"} linkTwo={"/boker"} />
            <Helmet>
                <title>Coral'l | Eyewear</title>
            </Helmet>
        </>
    )
}