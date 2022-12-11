import { Helmet } from "react-helmet"
import Category from "../category"

export default function Handbags() {
    return (
        <>
            <Category categoryName={"handbag"} />
            <Helmet>
                <title>Coral'l | Handbags</title>
            </Helmet>
        </>
    )
}