import { Link, useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import { BodyText, ButtonWrap, Container, Content, ContentWrapper, Header, ImageDiv, MainText, SecondTitle, Title } from "./Body.styles"

const Body = () => {
    const navigate = useNavigate();

    const accessApp = () => {navigate("/dashboard")};
    return (
        <>
        <Container>
        <Header>
        <MainText>
        Choose how your recipients get paid
        </MainText>
        </Header>

        <BodyText>
            <Content>
                <div>
                <img src="/assets/bank.png" alt="bank" />
                <ContentWrapper>
                <Title>
                    Bank Account
                </Title>
                <p>Send money from anywhere to the recipient's local bank account. They'll receive funds in the local currency too.</p>
                </ContentWrapper>
                </div>
                <div>
                <img src="/assets/usdc.png" alt="usdc" />
                <ContentWrapper>
                <SecondTitle>
                    USDC Account
                </SecondTitle>
                <p>Send money from anywhere to the recipient's USDC Wallet</p>
                </ContentWrapper>
                </div>
            </Content>
        </BodyText>
        </Container>
        <Container>
        <Header>
        <MainText>
        Pay different bills across Africa
        </MainText>
        </Header>
        <ContentWrapper>
        <span>
            If you're looking to pay bills in Africa, you've come to the right place.
            Our platform offers a convenient and secure way to pay bills across the continent, 
            from the comfort of your own home. Whether you need to pay utility bills, 
            internet bills, or even school fees, we have you covered.
        </span>
        </ContentWrapper>
        <ImageDiv src="/assets/services.png" alt="items" />
        <ButtonWrap>
        <Link to="/dashboard">
            <Button title="Pay Bills"/>
        </Link>
        </ButtonWrap>
        
        </Container>
        </>
    )
}

export default Body