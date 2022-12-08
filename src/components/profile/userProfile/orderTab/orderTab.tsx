import { Outlet } from "react-router-dom"
import * as S from "./orderTabStyle"

export default function OrderTab() {

    return (
        <S.OrderTabContainer>
            <Outlet />
        </S.OrderTabContainer>
    )
}