import { Helmet } from "react-helmet"
import Category from "../category"
import remus from "../../../assets/imgs/remus/remus.png"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"

export default function Jewellery() {
    return (
        <>
            <Category name={"Remus"} imgProductOne={remus} imgAltProductOne={""} itemNameOne={"remus"} descriptionOne={"Brown Strap Bag"} priceOne={"$57.00"} linkOne={"/remus"} imgProductTwo={boker} imgAltProductTwo={""} itemNameTwo={"Boker"} descriptionTwo={"Brown Bag"} priceTwo={"$34.55"} linkTwo={"/boker"} />
            <Helmet>
                <title>Coral'l | Jewellery</title>
            </Helmet>
        </>
    )
}