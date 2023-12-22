import BillHeader from "../../components/BillHeader/BillHeader"
import { DivWrapper, ProductDiv } from "../../components/BillHeader/BillHeader.styles"
import Header from "../../components/Header"
import Products from "../../components/Products/Products"

const Bills = () => {
    return (
        
        <div className="landing">
        <Header/>
        <DivWrapper>
        <div className="transactions">
            <BillHeader title="Airtime Recharge"/>
            <ProductDiv>
                <Products/>
            </ProductDiv>
            
        </div>
        </DivWrapper>
        </div>
        
    )
}

export default Bills