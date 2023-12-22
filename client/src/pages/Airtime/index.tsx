import BillHeader from "../../components/BillHeader/BillHeader"
import { DivWrapper} from "../../components/BillHeader/BillHeader.styles"
import Button from "../../components/Button/Button"
import { ButtonDiv } from "../../components/Button/Button.styles"
import Header from "../../components/Header"
import InputField from "../../components/InputField/InputField"
import { AmountDiv, AmountStatus, ButtonWrap, Form } from "../../components/InputField/InputField.styles"
import { Amount } from "../../utils/data"
import Popup from "../../components/PopUp/Popup"
import { MouseEvent, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import SuccessfulPayment from "../../components/PopUp/SuccessfulPayment"

const Airtime = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPayModalOpen , setIsPayModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };

      const onSuccess = () => {
        navigate("/dashboard")
      }
    const openSuccessModal = () => {
        console.log(isModalOpen)
        if(isModalOpen){
             setIsModalOpen(false)
        }
        setIsPayModalOpen(true) 
    }
      const closeModal = () => {
        setIsModalOpen(false);
        setIsPayModalOpen(false);
      };
    
      const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.target instanceof HTMLElement && event.target.id === 'modalBackground') {
          closeModal();
        }
      };

    return (
        <div className="landing">
        <Header/>
        <DivWrapper>
        <div className="transactions">
            <BillHeader title="Airtime Recharge"/>
            <>
                <Form>
                <InputField 
                label={"Mobile Number"}
                name={""}
                value={undefined}
                placeholder={"+23490123456"} 
                onChange={() => {}}
                type = {"number"}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false} 
                error={""}                
                />
                <InputField 
                label={"Network Provider"}
                name={""}
                type={"string"}
                value={undefined}
                placeholder={"MTN, Airtel, Glo etc"} 
                onChange={() => {}}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false} 
                error={""}                
                />
                <InputField 
                label={"Amount"}
                name={""}
                value={undefined}
                type={"number"}
                placeholder={"Enter amount here"} 
                onChange={() => {}}
                leftIcon={<img src="/assets/svg/naira.svg" alt="icon"/>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false} 
                error={""}                
                />
                 <AmountDiv>
                {
                    Amount.map((data) => {
                        return (
                            <AmountStatus>
                            {data}
                            </AmountStatus>
                        )
                    })
                }
                  </AmountDiv>
                <ButtonWrap>
                  <Button
                  onClick={openModal}
                  title={
                    <ButtonDiv>
                    <img src="/assets/svg/Barcode.svg"/>
                    <>
                    <p>Pay with</p>
                    <img src="/assets/svg/solanapayicon.svg"/>
                    </>
                  </ButtonDiv>
                }
                  
                  />
                  <Button title="Pay with cashback"
                  background = "#fff"
                  color= "#409099"
                  border= "1px solid #409099"
                  />
                </ButtonWrap>

                {
                    isModalOpen && <Popup id = {"modalBackground"}
                    onClickButton= {openSuccessModal}
                   onClick = {(event: MouseEvent) => handleOutsideClick(event)}
                   />
                }
                {
                    isPayModalOpen && <SuccessfulPayment id = {"modalBackground"}
                    onClickButton= {onSuccess}
                    onClick = {(event: MouseEvent) => handleOutsideClick(event)}
                    />
                }
                </Form>
            </>
            
        </div>
        </DivWrapper>
        </div>
    )
}

export default Airtime