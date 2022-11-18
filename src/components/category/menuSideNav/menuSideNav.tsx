import * as S from "./menuSideNavStyle"
import ItemDiv from "./ItemDiv/itemDiv"

export default function MenuSideNav() {
    return (
        <S.MenuSideNavContainer>
            <ItemDiv name="size" item1={"small"} item2={"medium"} item3={"big"} item4={"XG"} item5={"XGG"} item6={"GG"} />
            <S.Separator></S.Separator>
            <ItemDiv name="color" item1={"Blue"} item2={"Marron red"} item3={"Crismson"} item4={"Seinna Pink"} item5={"Teal"} item6={"Aquamarine"} />
            <S.Separator></S.Separator>
            <ItemDiv name="Brand" item1={"Blue"} item2={"Marron red"} item3={"Crismson"} item4={"Seinna Pink"} item5={"Teal"} item6={"Aquamarine"} />
            <S.Separator></S.Separator>
            <ItemDiv name="Price Range" item1={"Blue"} item2={"Marron red"} item3={"Crismson"} item4={"Seinna Pink"} item5={"Teal"} item6={"Aquamarine"} />
            <S.Separator></S.Separator>
            <ItemDiv name="Discount" item1={"Blue"} item2={"Marron red"} item3={"Crismson"} item4={"Seinna Pink"} item5={"Teal"} item6={"Aquamarine"} />
            <S.Separator></S.Separator>
            <ItemDiv name="Availability" item1={"Blue"} item2={"Marron red"} item3={"Crismson"} item4={"Seinna Pink"} item5={"Teal"} item6={"Aquamarine"} />
            <S.Separator></S.Separator>
        </S.MenuSideNavContainer>
    )
}