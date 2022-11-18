import ProductPage from "../productPage/productPage";
import remus from "../../assets/imgs/remus/remus.png"
import { Helmet } from "react-helmet";

export default function Remus() {
    return (
        <>
            <ProductPage name="Remus" img={remus} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Brown Strap Bag" safe="$78.66" value="$57.00" imgCarousel={remus} />
            <Helmet>
                <title>Coral'l | Remus</title>
            </Helmet>
        </>
    )
}