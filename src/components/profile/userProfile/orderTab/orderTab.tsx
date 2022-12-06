import * as S from "./orderTabStyle"

export default function OrderTab() {
    return (
        <S.OrderTabContainer>
            <S.OrderTabs>
                <S.OrderItem color="#1B4B66">
                    <S.OrderItemLabel color="#FFFFFF">Completed</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color="transparent">
                    <S.OrderItemLabel color="#626262">Completed</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color="transparent">
                    <S.OrderItemLabel color="#626262">Completed</S.OrderItemLabel>
                </S.OrderItem>
            </S.OrderTabs>
            <S.OrderList>
                <S.OrderHeader>
                    <S.OrderHeaderLabel>Order</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Date</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Price</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Status</S.OrderHeaderLabel>
                </S.OrderHeader>
                <S.Separator></S.Separator>
                <S.OrderProducts>
                    
                </S.OrderProducts>
            </S.OrderList>
        </S.OrderTabContainer>
    )
}