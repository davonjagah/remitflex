import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BillHeader from "../../components/BillHeader/BillHeader"
import { DivWrapper } from "../../components/BillHeader/BillHeader.styles"
import { MidSection } from "../../components/Body/Body.styles"
import Button from "../../components/Button/Button"
import Header from "../../components/Header"
import { FeeWrapper, MiniForm, Rate} from "../../components/Hero/Hero.styles"
import InputField from "../../components/InputField/InputField"
import { BtnDiv } from "../../components/InputField/InputField.styles"

const SendMoney = () => {

    const [switchBtn, setSwitchBtn] = useState(false);
    const navigate = useNavigate();
    const renderDollar = () => {
        return <img src="/assets/svg/dola.svg" alt="icon"/>
    }
    const renderNaira = () => {
        return <img src="/assets/svg/naira.svg" alt="icon"/>
    }

    const toggleBtn = () => {
        setSwitchBtn(!switchBtn)
    }
    const onNavigate = () => navigate("details")
    return(
        <div className="landing">
        <Header/>
        <DivWrapper>
        <div className="transactions">
            <BillHeader title = "Send Money"/>
            <div className="formdiv">
                <InputField 
                label={"Send"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={switchBtn ? renderNaira() : renderDollar()}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
                <MidSection>
                <img src="/assets/svg/toggle.svg" onClick={toggleBtn} alt="toggle" />
                <div className="rate">
                <Rate> 1 USD = 780 NGN</Rate>
                </div>
                </MidSection>
                <InputField 
                label={"Recipient gets"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {} }
                leftIcon={switchBtn ? renderDollar() : renderNaira()}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>

                <div className="feediv">
                <FeeWrapper>
                    <p> Fee</p>
                    <span className="span">0 USD</span>
                </FeeWrapper>
                <FeeWrapper>
                    <p> Transfer time</p>
                    <span className="span">Within minutes</span>
                </FeeWrapper>

                <hr />
                </div>
                <div className="feediv">
                <FeeWrapper>
                    <p> Amount to pay </p>
                    <span className="span">0 USD</span>
                </FeeWrapper>
                <FeeWrapper>
                    <p> Recipient gets</p>
                    <span className="span">0 USD</span>
                </FeeWrapper>
                </div>
                <BtnDiv>
                <Button onClick = {onNavigate} title={"Proceed"}/>
                </BtnDiv>
                
                
                
            </div>
            
        </div>
        </DivWrapper>
        </div>
    )
}

export default SendMoney