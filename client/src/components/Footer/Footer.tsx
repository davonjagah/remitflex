import { useState } from "react"
import Popup from "../PopUp/Popup";
import { Background, ButtonImage, ButtonWrap, LogoText, Main, PaperImg, TextStyle, TextWrap } from "./Footer.styles"

const Footer = () => {
    const [popup, setPopUp] = useState(false);

    const togglePopup = () => {
        setPopUp(!popup)
    }
    return (
        <Main>
            <Background>
                <img src="/assets/home.png" alt="home" />
                <TextWrap>
                <TextStyle>
                What are you waiting for?, Get started!
                </TextStyle>
                <ButtonWrap>
                    <ButtonImage src="/assets/sendmoney.png"/>
                    <ButtonImage src="/assets/paybills.png" onClick={togglePopup}/>
                </ButtonWrap>
                <LogoText>© Remitflex2023</LogoText>
                </TextWrap>
                <PaperImg src="/assets/paperplane.png" alt="home"/>
               
            </Background>
        </Main>
    )
}

export default Footer