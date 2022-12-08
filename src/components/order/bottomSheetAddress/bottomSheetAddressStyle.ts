import styled from "styled-components";
import location from "@/assets/imgs/order/location.svg"

export const AddressDark = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--DarkShadow);
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
`

export const SelectAddressContainer = styled.div`
    height: 40vh;
    width: 100vw;
    background-color: var(--Bright);
    z-index: 4;
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 20px 20px 0 0;
    padding: 18px 16px 11px 16px;
`

export const SelectAddressHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
`
export const SelectAddressContent = styled.div`
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    &::-webkit-scrollbar { 
      display: none;
    }
`


export const AddressTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const AddAddressDiv = styled.div`
    display: flex;
    align-items: center;
`
export const ImgAdd = styled.img`
    height: 24px;
    width: 24px;
    `
export const HeaderParagraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
`
export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Separator);
`
export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Btn = styled.button`
    width: 90%;
    height: 44px;
    border: none;
    border-radius: 8px;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    background-image: url(${location});
    background-repeat: no-repeat;
    background-position: 100px center;
    background-size: 24px;
    cursor: pointer;
`
// export const SelectAddressContent  = styled.div``