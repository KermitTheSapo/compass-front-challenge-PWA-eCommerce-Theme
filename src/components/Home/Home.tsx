import Footer from "../footer/footer";
import Header from "../Header/Header";
import * as S from "./HomeStyle"
import Main from "./main/main";
export default function Home() {
    return (
        <S.Container>
            <Header />
            <Main />
            <Footer />
        </S.Container>
    )

}