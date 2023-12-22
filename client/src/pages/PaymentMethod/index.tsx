import BillHeader from "../../components/BillHeader/BillHeader"
import { DivWrapper } from "../../components/BillHeader/BillHeader.styles"
import Button from "../../components/Button/Button"
import Header from "../../components/Header"
import InputField from "../../components/InputField/InputField"
import { BtnDiv } from "../../components/InputField/InputField.styles"

const PaymentMethod = () => {
    return (
        <div className="landing">
        <Header/>
        <DivWrapper>
        <div className="transactions">
            <BillHeader title = "Payment methpd"/>
        <div className="formdiv">
            {
                false ?
                <>
        <InputField 
                label={"Full Name"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
        <InputField 
                label={"Bank Name"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
        <InputField 
                label={"Account Number"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
                 <InputField 
                label={"Reason"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
                </>
                :
                <>
                <InputField 
                label={"Network"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
        <InputField 
                label={"Wallet Address"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
                <InputField 
                label={"Reason"}
                name={""}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type={""}/>
                </>
                
            }
                 <BtnDiv>
                <Button title={"Proceed"}/>
                </BtnDiv>
        </div>
        </div>
        </DivWrapper>
        </div>
    )
}

export default PaymentMethod