import { Helmet } from "react-helmet";
import ProductPage from "../productPage/productPage";

import boker from "../../assets/imgs/home/main/arrivals/boker.png"

export default function Boker() {
    return (
        <>
            <ProductPage name="Boker" img={boker} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Brown Bag" safe="$78.66" value="$34.55" imgCarousel={boker} />
            <Helmet>
                <title>Coral'l | Boker</title>
            </Helmet>
        </>
    )
}