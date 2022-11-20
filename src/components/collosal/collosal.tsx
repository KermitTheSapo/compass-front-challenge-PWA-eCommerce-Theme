import ProductPage from "../productPage/productPage";
import collosal from "../../assets/imgs/productPage/collosal.png"
import { Helmet } from "react-helmet";


export default function Collosal() {
    return (
        <>
            <ProductPage name="Collosal" img={collosal} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Tall Heels" safe="$78.66" value="$40.00" imgCarousel={collosal} />
            <Helmet>
                <title>Coral'l | Collosal</title>
            </Helmet>
        </>
    )
}