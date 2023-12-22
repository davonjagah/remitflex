import Header from "../../components/Header"
import Transactions from "../../components/Transactions/Transactions"

const Dashboard = () => {
    return (
    <div className="landing">
    <Header/>
    <div className="transactions">
        <Transactions/>
    </div>
    </div>
    )
}

export default Dashboard