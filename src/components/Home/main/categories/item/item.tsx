import * as S from "./itemStyle"


type Props = {
    label: string;
    icon: string;
    alt: string;
    route: string;
};

export default function Item({ label, icon, alt, route }: Props) {
    return (
        <S.LinkItem href={route}>
            <S.CategoriesItems>
                <S.FigureIcon>
                    <S.ImgIcon src={icon} alt={alt} />
                </S.FigureIcon>
                <S.ItemName>{label}</S.ItemName>
            </S.CategoriesItems>
        </S.LinkItem>
    )
}