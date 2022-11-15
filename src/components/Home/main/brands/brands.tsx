import * as S from "./brandsStyle"
import Zara from "../../../../assets/imgs/home/main/brands/ZaraLogo.svg"
import DG from "../../../../assets/imgs/home/main/brands/D&G.svg"
import HM from "../../../../assets/imgs/home/main/brands/H&M.svg"
import Biba from "../../../../assets/imgs/home/main/brands/biba.svg"
import Chanel from "../../../../assets/imgs/home/main/brands/chanel.svg"
import Prada from "../../../../assets/imgs/home/main/brands/prada.svg"
import Phone from "../../../../assets/imgs/home/main/brands/phone.svg"
import arrow from "../../../../assets/imgs/home/main/brands/arrow.svg"

export default function Brands() {
    return (
        <S.Brands>
            <S.BrandsHeader>
                <S.Title>Shop by Brands</S.Title>
                <S.Paragraph>View all &gt;</S.Paragraph>
            </S.BrandsHeader>
            <S.BrandsImgs>
                <S.FigureImg>
                    <img src={Zara} alt="" />
                </S.FigureImg>
                <S.FigureImg>
                    <img src={DG} alt="" />
                </S.FigureImg>
                <S.FigureImg>
                    <img src={HM} alt="" />
                </S.FigureImg>
                <S.FigureImg>
                    <img src={Biba} alt="" />
                </S.FigureImg>
                <S.FigureImg>
                    <img src={Chanel} alt="" />
                </S.FigureImg>
                <S.FigureImg>
                    <img src={Prada} alt="" />
                </S.FigureImg>
            </S.BrandsImgs>
            <S.ShortcutDiv>
                <S.ShortcutFigure>
                    <S.ImgPhone src={Phone} alt="" />
                </S.ShortcutFigure>
                <S.ShortcutContent>
                    <S.ShortcutName>Discover your favorite products faster with CORA’L web app.</S.ShortcutName>
                    <S.ShortcutLink href="/error">
                        <S.ShortcutParagraph>Add Shortcut</S.ShortcutParagraph>
                        <img src={arrow} alt="" />
                    </S.ShortcutLink>
                </S.ShortcutContent>
            </S.ShortcutDiv>
        </S.Brands>
    )
}