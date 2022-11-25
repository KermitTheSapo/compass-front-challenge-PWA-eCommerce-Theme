import * as S from "./appBarStyle"
import { Reset } from "../../assets/styles/reset"
import icon from "../assets/appBar/icon-placeholder.svg"

interface AppBarProps {
    pageTitle: string;
    pageInfo: string;
    Search: string;
}

export const AppBar = ({ pageTitle, pageInfo, Search }: AppBarProps) => (
    <S.AppBarContainer>
        <Reset />
        <S.Div>
            <S.TitleDiv>
                <S.LeadingIcon>
                    <S.LeadingIconImg src={icon} alt="" />
                    <S.Content>
                        <S.Text>{pageTitle}</S.Text>
                        <S.Paragraph>{pageInfo}</S.Paragraph>
                    </S.Content>
                </S.LeadingIcon>
                <S.TrailingIcon>
                    <S.IconPlaceholder src={icon} alt="" />
                    <S.IconPlaceholder src={icon} alt="" />
                    <S.IconPlaceholder src={icon} alt="" />
                </S.TrailingIcon>
            </S.TitleDiv>
            <S.PageInfoDiv>
                <S.LeadingIcon>
                    <S.LeadingIconImg src={icon} alt="" />
                    <S.Text>{Search}</S.Text>
                </S.LeadingIcon>
                <S.TrailingIcon>
                    <S.IconPlaceholder src={icon} alt="" />
                    <S.IconPlaceholder src={icon} alt="" />
                    <S.IconPlaceholder src={icon} alt="" />
                </S.TrailingIcon>
            </S.PageInfoDiv>
        </S.Div>
    </S.AppBarContainer>
);