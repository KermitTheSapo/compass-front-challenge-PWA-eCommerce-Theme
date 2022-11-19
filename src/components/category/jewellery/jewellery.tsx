import { Helmet } from "react-helmet"
import Category from "../category"
import remus from "../../../assets/imgs/remus/remus.png"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"

export default function Jewellery() {
    return (
        <>
            <Category name={"Jewellery"} imgProductOne={remus} imgAltProductOne={""} itemNameOne={"remus"} descriptionOne={"Blossom Pouch"} priceOne={"$39.49"} linkOne={"/grande"} imgProductTwo={boker} imgAltProductTwo={""} itemNameTwo={"Boker"} descriptionTwo={"Brown Bag"} priceTwo={"$34.55"} linkTwo={"/boker"} />
            <Helmet>
                <title>Coral'l | Jewellery</title>
            </Helmet>
        </>
    )
}