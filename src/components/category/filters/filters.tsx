import * as S from "./filtersStyle"
import cross from "@/assets/imgs/bag/cross.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
export default function Filters() {
    const [sizeOption, setSizeOption] = useState(true)
    const [colorOption, setColorOption] = useState(false)
    const [brandOption, setBrandOption] = useState(false)
    const [priceRangeOption, setPriceRangeOption] = useState(false)
    const [discountOption, setDiscountOption] = useState(false)

    const resetOption = () => {
        setSizeOption(false)
        setColorOption(false)
        setBrandOption(false)
        setPriceRangeOption(false)
        setDiscountOption(false)
    }

    const changeToSizeOption = () => {
        resetOption()
        setSizeOption(true)
    }
    const changeToColorOption = () => {
        resetOption()
        setColorOption(true)
    }
    const changeToBrandOption = () => {
        resetOption()
        setBrandOption(true)
    }
    const changeToPriceRangeOption = () => {
        resetOption()
        setPriceRangeOption(true)
    }
    const changeToDiscountOption = () => {
        resetOption()
        setDiscountOption(true)
    }
    const navigate = useNavigate()

    return (
        <S.FiltersContainer>
            <Helmet>
                <title>Coral'l | Filters</title>
            </Helmet>
            <S.FilterHeader>
                <S.FilterTitle>Filters</S.FilterTitle>
                <img src={cross} alt="" onClick={() => navigate(-1)} />
            </S.FilterHeader>
            <S.FilterBody>
                <S.Filters>
                    <S.FilterBox color={sizeOption ? "#FFFFFF" : "transparent"} onClick={() => { changeToSizeOption() }}>
                        <S.FilterName>Size</S.FilterName>
                    </S.FilterBox>
                    <S.FilterBox color={colorOption ? "#FFFFFF" : "transparent"} onClick={() => { changeToColorOption() }}>
                        <S.FilterName>Color</S.FilterName>
                    </S.FilterBox>
                    <S.FilterBox color={brandOption ? "#FFFFFF" : "transparent"} onClick={() => { changeToBrandOption() }}>
                        <S.FilterName>Brand</S.FilterName>
                    </S.FilterBox>
                    <S.FilterBox color={priceRangeOption ? "#FFFFFF" : "transparent"} onClick={() => { changeToPriceRangeOption() }}>
                        <S.FilterName>Price Range</S.FilterName>
                    </S.FilterBox>
                    <S.FilterBox color={discountOption ? "#FFFFFF" : "transparent"} onClick={() => { changeToDiscountOption() }}>
                        <S.FilterName>Discount</S.FilterName>
                    </S.FilterBox>
                </S.Filters>
                <S.FiltersOptions>
                    {sizeOption && <S.OptionsList>
                        <S.OptionItem>
                            <S.InputCheckbox type="checkbox" />
                            <S.Label htmlFor="">Blue</S.Label>
                        </S.OptionItem>
                        <S.OptionItem>
                            <S.InputCheckbox type="checkbox" />
                            <S.Label htmlFor="">Blue</S.Label>
                        </S.OptionItem>
                        <S.OptionItem>
                            <S.InputCheckbox type="checkbox" />
                            <S.Label htmlFor="">Blue</S.Label>
                        </S.OptionItem>
                    </S.OptionsList>}
                    {colorOption && <h2>2222222</h2>}
                    {brandOption && <h2>333333</h2>}
                    {priceRangeOption && <h2>444444</h2>}
                    {discountOption && <h2>555555</h2>}
                </S.FiltersOptions>
            </S.FilterBody>
            <S.FilterBtnActions>
                <S.BtnClear>Clear All</S.BtnClear>
                <S.BtnApply>Apply</S.BtnApply>
            </S.FilterBtnActions>
        </S.FiltersContainer>
    )
}