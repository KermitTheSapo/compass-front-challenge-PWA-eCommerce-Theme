import styled from "styled-components";

import homePhoto from "@/assets/imgs/singup/homePhoto.png"

export const SingUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: url(${homePhoto});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;    
`

export const SingUpTitle = styled.h1``