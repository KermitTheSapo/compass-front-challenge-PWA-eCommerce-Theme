import { useState } from "react"
import OrderItem from "./orderItem/orderItem"
import * as S from "./orderTabStyle"

export default function OrderTab() {
    const [completed, setCompleted] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [cancelled, setCancelled] = useState(false)

    const resetTab = () => {
        setCompleted(false)
        setProcessing(false)
        setCancelled(false)
    }
    const completedTab = () => {
        resetTab()
        setCompleted(true)
    }
    const processingTab = () => {
        resetTab()
        setProcessing(true)
    }
    const cancelledTab = () => {
        resetTab()
        setCancelled(true)
    }
    return (
        <S.OrderTabContainer>
            <S.OrderTabs>
                <S.OrderItem color={completed ? "#1B4B66" : "transparent"} onClick={() => completedTab()}>
                    <S.OrderItemLabel color={completed ? "#FFFFFF" : "#626262"}>Completed</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={processing ? "#1B4B66" : "transparent"} onClick={() => processingTab()}>
                    <S.OrderItemLabel color={processing ? "#FFFFFF" : "#626262"}>Processing</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={cancelled ? "#1B4B66" : "transparent"} onClick={() => cancelledTab()}>
                    <S.OrderItemLabel color={cancelled ? "#FFFFFF" : "#626262"}>Cancelled</S.OrderItemLabel>
                </S.OrderItem>
            </S.OrderTabs>
            <S.OrderList>
                <S.OrderHeader>
                    <S.OrderHeaderLabel>Order ID</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Date</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Price</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Status</S.OrderHeaderLabel>
                </S.OrderHeader>
                <S.Separator></S.Separator>
                <S.OrderProducts>
                    {
                        completed && <OrderItem id={"#874522648"} date={"September 5, 2020"} price={"$218.50"} status={"Paid"} />
                    }
                    {
                        processing && <OrderItem id={"#874522648"} date={"September 5, 2020"} price={"$218.50"} status={"Processing"} />
                    }
                    {
                        cancelled && <OrderItem id={"#874522648"} date={"September 5, 2020"} price={"$218.50"} status={"Cancelled"} />
                    }
                </S.OrderProducts>
            </S.OrderList>
        </S.OrderTabContainer>
    )
}