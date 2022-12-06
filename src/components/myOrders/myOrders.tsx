import * as S from "./myOrdersStyle"
import arrow from "@/assets/imgs/my-orders/arrowLeft.svg"
import bag from "@/assets/imgs/my-orders/bag.svg"
import { useNavigate } from "react-router-dom"
import OrderCard from "./orderCard/orderCard"
import { useState } from "react"

export default function MyOrders() {
    const navigate = useNavigate()
    const [completedTab, setCompletedTab] = useState(true)
    const [processingTab, setProcessingTab] = useState(false)
    const [cancelledTab, setCancelledTab] = useState(false)

    const resetTabs = () => {
        setCompletedTab(false)
        setProcessingTab(false)
        setCancelledTab(false)
    }
    const showCompleted = () => {
        resetTabs()
        setCompletedTab(true)
    }
    const showProcessing = () => {
        resetTabs()
        setProcessingTab(true)
    }
    const showCancelled = () => {
        resetTabs()
        setCancelledTab(true)
    }
    return (
        <S.MyOrdersContainer>
            <S.MyOrderHeader>
                <S.HeaderContent>
                    <S.ImgArrow src={arrow} alt="" onClick={() => { navigate(-1) }} />
                    <S.Title>My Orders</S.Title>
                </S.HeaderContent>
                <S.ImgBag src={bag} alt="" />
            </S.MyOrderHeader>
            <S.Tabs>
                <S.Tab onClick={() => showCompleted()} color={completedTab ? "#1B4B66" : "transparent"}>
                    <S.ParagraphTab color={completedTab ? "#FFFFFF" : "#626262"}>Completed</S.ParagraphTab>
                </S.Tab>
                <S.Tab onClick={() => showProcessing()} color={processingTab ? "#1B4B66" : "transparent"}>
                    <S.ParagraphTab color={processingTab ? "#FFFFFF" : "#626262"}>Processing</S.ParagraphTab>
                </S.Tab>
                <S.Tab onClick={() => showCancelled()} color={cancelledTab ? "#1B4B66" : "transparent"}>
                    <S.ParagraphTab color={cancelledTab ? "#FFFFFF" : "#626262"}>Cancelled</S.ParagraphTab>
                </S.Tab>
            </S.Tabs>
            <S.Paragraph>4 Order(s)</S.Paragraph>
            <S.OrderList>
                {
                    completedTab && <OrderCard />
                }
                {
                    processingTab && <p>processing</p>
                }
                {
                    cancelledTab && <p>cancelled</p>
                }
            </S.OrderList>
        </S.MyOrdersContainer>
    )
}