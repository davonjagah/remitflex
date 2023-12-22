import { useState } from "react"
import Button from "../Button/Button"
import InputField from "../InputField/InputField"
import Products from "../Products/Products"

import { ButtonOne, FeeWrapper, LeftFlex, MiniForm, ProductContainer, Rate, RightFlex, TitleContainer, TypeDiv, Wrapper } from "./Hero.styles"


const Hero = () => {
    const [active, setActive] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        if (isActive){
            setIsActive(false)
        }
        setActive(true)
        
      };
    const switchActive = () => {
        if (active){
            setActive(false)
        }
        setIsActive(true)
    }
    return (
        <Wrapper>
            <LeftFlex>
            <TitleContainer>
                <p>Send money & pay bills in Africa </p>
                <span>powered by 
                    <img src="/assets/solana.png" alt="solana" />
                </span>
            </TitleContainer>
            
            <MiniForm>
                <TypeDiv>
                    <ButtonOne onClick={toggleActive} 
                    style={{
                        width: '10rem',
                        height: '3rem',
                        background : active ? 'linear-gradient(to bottom, #E6FAE6 90%, #409099 10%)' : '#fff',
                        position: 'relative',
                        top: '-0.5rem',
                        transition: 'all 0.3s ease-in-out !important',
                        transitionDelay: '0.1s',
                        color: active ? '#409099' : 'black',
                        
                    }}>
                    <div>
                        {
                            active ?
                    <img src="/assets/svg/activesend.svg" alt="send" />
                    :
                    <img src="/assets/svg/send.svg" alt="active" />
                }
                    <p> Send </p>
                    </div>

                    </ButtonOne>
                <ButtonOne onClick={switchActive} style={{
                        width: '10rem',
                        height: '3rem',
                        background : isActive ? 'linear-gradient(to bottom, #E6FAE6 90%, #409099 10%)' : '#fff',
                        position: 'relative',
                        top: '-0.5rem',
                        left: '-3rem',
                        transition: 'all 0.3s ease, transform 0.2s ease',
                        transitionDelay: '0.1s', /* Add a delay of 0.1 seconds */
                        color: isActive ? '#409099' : 'black',
                        
                    }}>
                        <div>
                            {
                                isActive ? 
                                <img src="/assets/svg/activewallet.svg" alt="wallet" />
                                :
                        <img src="/assets/wallet.png" alt="wallet" />
                            }
                        <p>Pay Bills</p>
                        </div>
                   
                </ButtonOne>
                
                </TypeDiv>
               {active ? 
                <ProductContainer>
                <InputField 
                label={"Send Money"} 
                name={"send-money"}
                value={undefined}
                placeholder={"Enter amount here"} 
                onChange={() => {} }
                leftIcon={<img src="/assets/svg/naira.svg" alt="icon"/>}
                rightIcon={<></>}
                disabled={false}
                type={"number"}
                isPassword={false}
                error={""}                
                />
                <div>
                <Rate> 1 USD = 780 NGN</Rate>
                </div>
                
                 <InputField 
                label={"Receipt gets"} 
                name={"amount"}
                value={undefined}
                placeholder={"Amount"} 
                onChange={() => {} }
                leftIcon={<img src="/assets/svg/dola.svg" alt="icon"/>}
                rightIcon={<></>}
                type={"string"}
                disabled={false}
                isPassword={false}
                error={""}                
                />
                <div>
                <FeeWrapper>
                    <p> Fee</p>
                    <span>0 USD</span>
                </FeeWrapper>
                <FeeWrapper>
                    <p> Transfer time</p>
                    <span>Within minutes</span>
                </FeeWrapper>
                </div>
                <Button title="Send Money"/>
                </ProductContainer>
                : 
                <ProductContainer>
                <Products/>
                </ProductContainer>
}
            </MiniForm>

           
            </LeftFlex>
            <RightFlex>
                <img src="/assets/svg/updatedright.svg" alt="image" />
            </RightFlex>
        </Wrapper>
    )
}

export default Hero