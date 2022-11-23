import * as S from "./appBarStyle"
import { Reset } from "../../assets/styles/reset"
import icon from "../assets/appBar/icon-placeholder.svg"

export const AppBar = () => (
        <S.AppBarContainer>
            <Reset />
            <S.Div>
                <S.TitleDiv>
                    <S.LeadingIcon>
                        <S.LeadingIconImg src={icon} alt="" />
                        <S.Content>
                            <S.Text>Page Title</S.Text>
                            <S.Paragraph>Page Info</S.Paragraph>
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
                        <S.Text>Search</S.Text>
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