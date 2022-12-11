import Category from "../category"
import { Helmet } from "react-helmet";
export default function Apparels() {
    return (
        <>
            <Category categoryName={"apparels"} />
            <Helmet>
                <title>Coral'l | Apparels</title>
            </Helmet>
        </>
    )
}