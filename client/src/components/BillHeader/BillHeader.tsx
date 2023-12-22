import { useLocation } from "react-router-dom"
import { AirtimeDiv, Background, MainWrapper } from "./BillHeader.styles"

const BillHeader: React.FC<{title: string}> = ({title}) => {

    const urlQuery = useLocation().pathname;

    const displayHeaderBasedOnRoute = () => {
        return (
            <>
             {
                urlQuery === "/pay-bills"
                ?
                <Background>
                <>
                <h5>Cashback Balance</h5>

                <h1> &#x20A6;10000</h1>
                </>
                </Background>
                :
                <AirtimeDiv>
                <h3>{title}</h3>
                <div>
                <h6>Cashback Balance</h6>
                <h4> &#x20A6;10000</h4>
                </div>

                </AirtimeDiv>
            }
            </>
        )
    }
    return (
        <MainWrapper>
            {displayHeaderBasedOnRoute()}
        {
            urlQuery === "/pay-bills"
            ?
            <>
            <h2>What bill do you want to pay?</h2>
            <hr />
            </>

            :
            null
        }
        
        </MainWrapper>
    )
}

export default BillHeader