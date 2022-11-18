import { Helmet } from "react-helmet"
import Category from "../category"

export default function Skincare() {
    return (
        <>
            <Helmet>
                <title>Coral'l | Skincare</title>
            </Helmet>
            <Category name={"Skincare"} />
        </>
    )
}