import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionType } from "../../types/components.types";
import { transactionData } from "../../utils/data";
import { BottomData, ButtonWrap, Content,
     DataField, FlexContainer, ButtonImage,
    MainDiv, TextStyle, Title, Top, TopData, MainContainer, Name } from "./Transactions.styles"


const Transactions = () => {
    const [transactions, setTransactions] = useState<TransactionType[]>([]);
    const navigate = useNavigate();
    const payBills = () => {
        navigate("/pay-bills")
    }
    const sendMoney = () => {
        navigate("/send-money")
    }
    useEffect(() => {
        setTransactions(transactionData);
    }, [transactions])

    const renderStatusButton = (status: string) => {
        const statusCheck = status?.toLowerCase();
        if (statusCheck === "failed"){
            return <p style={{color: "#E58474"}}>
                Failed
            </p>
        }
        else if (statusCheck === "success"){
            return <p style={{color : "#6EC06C"}}>
                Success
            </p>
        }
        else return <p style={{color: "#409099"}}> In Progress</p>
    }
    const whenEmptyTransactions = () => {
        return (
            <MainDiv>
                <div>
                <img src="/assets/svg/ListPlus.svg" alt="list" />
                <TextStyle>No Transactions</TextStyle>
                </div>
            </MainDiv>
        )
    }

    const whenFilledTransactions = (transactions: TransactionType[]) => {
        return (
            <>
            {
                transactions.map((data) => {
                    return <DataField key = {data.id}>
                        <TopData>
                        <p>{data.title}</p>
                        <p>{data.price}</p>
                        </TopData>
                        <BottomData>
                            <div>
                            <p>{data.date} | Reason - {data.reason}</p>
                                </div>
                                {renderStatusButton(data.status)}
                        </BottomData>
                        
                    </DataField>
                })
            }
            </>
        )
    }


    
    return (
        <MainContainer>
        <Top>
        <Name> Welcome Emmanuel,</Name>
        <ButtonWrap>
                    <ButtonImage onClick={sendMoney} src="/assets/svg/sendmoney.svg"/>
                    <ButtonImage onClick = {payBills} src="/assets/svg/paybills.svg" />
        </ButtonWrap>
        </Top>
        <Title> Transactions </Title>
        <FlexContainer>
        <Content>
            {
                transactions.length === 0 ? 
                whenEmptyTransactions()
                :
                whenFilledTransactions(transactions)
            }
        </Content>
        </FlexContainer>
       
        </MainContainer>
    )
}

export default Transactions