import ProductPage from "../productPage/productPage";
import grandeItem from "../../assets/imgs/grande/grandeItem.png"
import { Helmet } from "react-helmet";

export default function GrandeItem() {
    return (
        <>
            <ProductPage name="Grande" img={grandeItem} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Blossom Pouch" safe="$78.66" value="$39.49" imgCarousel={grandeItem} />
            <Helmet>
                <title>Coral'l | Grande</title>
            </Helmet>
        </>
    )
}