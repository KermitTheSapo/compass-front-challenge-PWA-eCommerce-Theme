import * as S from "./brandsStyle"
import Zara from "../../../../assets/imgs/home/main/brands/ZaraLogo.svg"
import DG from "../../../../assets/imgs/home/main/brands/D&G.svg"
import HM from "../../../../assets/imgs/home/main/brands/H&M.svg"
import Biba from "../../../../assets/imgs/home/main/brands/biba.svg"
import Chanel from "../../../../assets/imgs/home/main/brands/chanel.svg"
import Prada from "../../../../assets/imgs/home/main/brands/prada.svg"
import Phone from "../../../../assets/imgs/home/main/brands/phone.svg"
import arrow from "../../../../assets/imgs/home/main/brands/arrow.svg"
import { useNavigate } from "react-router-dom"

export default function Brands() {
    const navigate = useNavigate()

    return (
        <S.Brands>
            <S.BrandsHeader>
                <S.Title>Shop by Brands</S.Title>
                <S.Paragraph>View all &gt;</S.Paragraph>
            </S.BrandsHeader>
            <S.BrandsImgs>
                <S.FigureImg onClick={() => navigate("/error")}>
                    <img src={Zara} alt="logo image of a company called 'Zara'" />
                </S.FigureImg>
                <S.FigureImg onClick={() => navigate("/error")}>
                    <img src={DG} alt="logo image of a company called 'DG'" />
                </S.FigureImg>
                <S.FigureImg onClick={() => navigate("/error")}>
                    <img src={HM} alt="logo image of a company called 'HM'" />
                </S.FigureImg>
                <S.FigureImg onClick={() => navigate("/error")}>
                    <img src={Biba} alt="logo image of a company called 'Biba'" />
                </S.FigureImg> 
                <S.FigureImg onClick={() => navigate("/error")}>
                    <img src={Chanel} alt="logo image of a company called 'Chanel'" />
                </S.FigureImg>
                <S.FigureImg onClick={() => navigate("/error")}>
                    <img src={Prada} alt="logo image of a company called 'Prada'" />
                </S.FigureImg>
            </S.BrandsImgs>
            <S.ShortcutDiv>
                <S.ShortcutFigure>
                    <S.ImgPhone src={Phone} alt="cell phone image" />
                </S.ShortcutFigure>
                <S.ShortcutContent>
                    <S.ShortcutName>Discover your favorite products faster with CORA’L web app.</S.ShortcutName>
                    <S.ShortcutLink onClick={() => navigate("/error")}>
                        <S.ShortcutParagraph>Add Shortcut</S.ShortcutParagraph>
                        <img src={arrow} alt="a white arrow to the right" />
                    </S.ShortcutLink>
                </S.ShortcutContent>
            </S.ShortcutDiv>
        </S.Brands>
    )
}