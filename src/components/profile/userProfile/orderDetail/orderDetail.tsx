import { useState } from "react"
import AddressDetails from "./addressDetails/addressDetails"
import OrderDetails from "./orderDetails/orderDetails"
import * as S from "./orderDetailStyle"
import PaymentsDetails from "./paymentsDetails/paymentsDetails"
import ProductCardVertical from "./productCardVertical/productCardVertical"

export default function OrderDetail() {
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
        <S.OrderDetailContainer>
            <S.OrderTabs>
                <S.OrderItem color={completed ? "#1B4B66" : "transparent"} onClick={() => completedTab()}>
                    <S.OrderItemLabel color={completed ? "#FFFFFF" : "#626262"}>Items Ordered</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={processing ? "#1B4B66" : "transparent"} onClick={() => processingTab()}>
                    <S.OrderItemLabel color={processing ? "#FFFFFF" : "#626262"}>Invoices</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={cancelled ? "#1B4B66" : "transparent"} onClick={() => cancelledTab()}>
                    <S.OrderItemLabel color={cancelled ? "#FFFFFF" : "#626262"}>Order Shipment</S.OrderItemLabel>
                </S.OrderItem>
            </S.OrderTabs>
            <S.ProductInformation>
                <S.TableHeaders>
                    <S.TableLabel>Product Name</S.TableLabel>
                    <S.ValueInfo>
                        <S.TableLabel>Price</S.TableLabel>
                        <S.TableLabel>Qty</S.TableLabel>
                        <S.TableLabel>Subtotal</S.TableLabel>
                    </S.ValueInfo>
                </S.TableHeaders>
            </S.ProductInformation>
            <S.Separator></S.Separator>
            <S.ProductList>
                <ProductCardVertical />
                <ProductCardVertical />
                <ProductCardVertical />
            </S.ProductList>
            <S.OrderInformation>
                <S.OrderInfoHeader>
                    <S.OrderInfoTitle>Order Information</S.OrderInfoTitle>
                    <S.Separator></S.Separator>
                </S.OrderInfoHeader>
                <S.OrderInfoContent>
                    <OrderDetails />
                    <PaymentsDetails />
                    <AddressDetails />
                </S.OrderInfoContent>
            </S.OrderInformation>
            <S.ButtonsNavigation>
                <S.ButtonReorder>Reorder</S.ButtonReorder>
                <S.ButtonRating>Add Rating</S.ButtonRating>
            </S.ButtonsNavigation>
        </S.OrderDetailContainer >
    )
}