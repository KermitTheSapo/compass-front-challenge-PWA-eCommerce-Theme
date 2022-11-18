import ProductPage from "../productPage/productPage";
import boujee from "../../assets/imgs/boujee/boujee.png"
import { Helmet } from "react-helmet";

export default function Boujee() {
    return (
        <>
            <Helmet>
                <title>Coral'l | Remus</title>
            </Helmet>
            <ProductPage name="boujee" img={boujee} discount="50%OFF" productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Black Bag" safe="$78.66" value="$56.49" imgCarousel={boujee} />
        </>
    )
}