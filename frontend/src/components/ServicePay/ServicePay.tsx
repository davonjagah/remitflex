//import useState from react
import { useState , useMemo} from "react";

//import custom styles from
import {
    PayBillAmountIn, PayBillAmountInText,
    PayBillAmoutCont, PayBillButton,
    PayBillButtonDiv, PayBillButtonTwo,
    PayBillContainer, PayBillForm,
    PayBillGroup, PayBillHeader,
    PayBillInnerContainer, PayBillInput,
    PayBillLabel, PayBillPrice, PayBillSQLInText
} from "./ServicePay.styles";

//import react phone put 2 library
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

//import select
import Select from "react-select";

//importing custom dropdown 
import { customStyles } from "../../utils/customSelectorHelper";

// importing options from utils
import { DropdownSelectType } from "../../types/components.types";

// get service name
import { useLocation, useNavigate } from "react-router-dom";

// react-redux
import { RootState } from "../../store/store";

// import pay
// import { getCustomerName } from "../../utils/requests";
import { billings } from "../../services/protected/billsAPI";

// import useDispatch
import { useDispatch, useSelector } from 'react-redux';

import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import { paymentControl } from "../../services/protected/paymentAPI";

//JSX Component
const PayBill = () => {
    // use params to get services
    const location = useLocation()
    const category = location.state
    const [currentRate, setCurrentRate] = useState<any>(null);
    const [txId, setTxId] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // dispatch
    const dispatch = useDispatch();
    const vault = useSelector((state: RootState) => state?.currentUser?.currentVault)


    // selector
    const bills = useSelector((state: RootState) => state?.currentUser?.bills)
    console.log(bills, "bills")

    useMemo(() => {
        (async () => {
          const data: any = await paymentControl.getNGNrate();
          setCurrentRate(data?.rate);
          console.log(data, "rate");
          // setCurrentRate(rate?.data?.data?)
        })();
      }, []);
    const billsName: any = bills?.map((bill: any) => ({
        value: bill.name,
        label: bill.name,
    }))

    const amount: Number[] = bills?.map((bill: any) => (
        bill.amount
    ))

    const [customerName, setCustomerName]: any = useState("")

    const [selectedOption, setSelectedOption]: any = useState("");

    const [nairaAmount, setNairaAmount]: any = useState("")

    const result = bills?.find((bill: any) => bill.name === selectedOption?.value);

    const [meter, setMeter]: any = useState("");

    //    console.log(result, amount)
    // use state initial values
    const [phone, setPhone]: DropdownSelectType = useState("");

    // handle payment
    const handlePay = async (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault()
        setIsLoading(true)
        // const usdAmount : string | number = amount[0] === 0 ? (nairaAmount/750).toFixed(2)  : (result?.amount/750).toFixed(2)
        // const naira = amount[0] === 0 ? nairaAmount : result?.amount
        const customer = category === "electricity" || category === "cable" ? meter : `+${phone}`
        const body = {
            linkvaulturl : vault.linkvault,
            country : "NG",
            customer : customer,
            amount : Number(nairaAmount),
            // amount_paid : Number(nairaAmount),
            recurrence  : "ONCE",
            type : (category).toUpperCase(),
        }
        const ans : any=  await paymentControl.billPayment(body);
        // add loading spinner or state
        console.log(ans, "ans")
        setIsLoading(false)
        setTxId(ans?.data?.txId)

        //  if(!bills[0]?.label_name || !customer) {
        //     dispatch(alert("Fill all fields ⌛️"))
        //     return setTimeout(() => {
        //         dispatch(close(""))
        //     }, 700) spinner-
        //  }
        // handle payment with btc

  

    }   

    // handle customer name
    const handleCustomerName = async (e: any) => {
        console.log(selectedOption, "option")
        //   setCustomerName(e.target.value)
        setMeter(e.target.value)
        console.log({
            item_code: result?.item_code,
            code: result?.biller_code,
            customer: e.target.value,
        })
        const response = await billings.validate({
            item_code: result?.item_code,
            code: result?.biller_code,
            customer: e.target.value,
        })
        if (response) {
            setCustomerName(response?.data.name)
            console.log(response, "response")
        }
        //    await getCustomerName(e.target.value,result?.biller_code, setCustomerName, result?.item_code )


    }
    return (
        <PayBillContainer>
            {
                isLoading ? <Spinner /> :
            
            !bills ? <Spinner /> :
                !txId ? 
                <PayBillInnerContainer>
                    <PayBillHeader>{
                        `${category} Recharge`}</PayBillHeader>

                    <PayBillForm
                        //    ref={formRef}
                        onSubmit={handlePay}
                    >
                        <PayBillGroup>
                            <PayBillLabel>Network Provider</PayBillLabel>
                            <Select
                                options={billsName}
                                styles={customStyles}
                                //@ts-ignore
                                defaultValue={selectedOption}
                                onChange={(e: any) => setSelectedOption(e)}
                            />
                        </PayBillGroup>
                        <PayBillGroup>
                            <PayBillLabel>{bills[0]?.label_name === "SmartCard Number" ? "Smart Card Number" : bills[0]?.label_name === "Meter Number" ? "Meter Number" : "Phone Number"}</PayBillLabel>
                            {
                                category === "electricity" || category === "cable" ?
                                    <div>
                                        <PayBillInput className="input" placeholder={category === "electricity" ? "Meter Number" : "Smart Card Number"} onChange={handleCustomerName} />
                                        <p style={{
                                            marginTop: "5px",
                                            fontSize: "13px",
                                            fontWeight: "bold",
                                            color: "green",
                                        }}>{customerName}</p>
                                    </div>

                                    : <PhoneInput
                                        country={bills[0]?.country.toLowerCase()}
                                        regions={'africa'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                        inputStyle={{
                                            width: '100%',
                                            fontSize: '0.8rem',
                                            color: "grey",
                                            borderRadius: '4px',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            paddingLeft: '5rem',
                                            border: 'none',
                                        }}
                                        dropdownStyle={{
                                            borderRadius: '4px',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                        }}
                                        buttonStyle={{
                                            border: 'none',
                                            padding: '0 1rem',
                                            backgroundColor: 'white',
                                            height: '80%',
                                            borderRight: '1px solid #959595',
                                            top: "50%",
                                            transform: "translateY(-50%)"
                                        }}
                                        containerStyle={{
                                            border: '1px solid #959595',
                                            borderRadius: '4px',
                                            backgroundColor: "white",
                                            padding: '0.5rem',
                                        }}
                                    />
                            }

                        </PayBillGroup>
                        <PayBillGroup>
                            <PayBillLabel>Amount</PayBillLabel>
                            <PayBillAmoutCont>

                                <PayBillInput
                                    type={"number"}
                                    value={amount[2] === 0 ? undefined : result?.amount}
                                    min={category === "electricity" ? 1000 : undefined}
                                    onChange={(e) => setNairaAmount(e.target.value)}
                                    placeholder="₦ 0.00"
                                />
                                <PayBillAmountIn>
                                    <PayBillAmountInText>Amount in</PayBillAmountInText>
                                    <PayBillSQLInText>USD: ${!selectedOption?.value ? "0.00" : amount[2] === 0 ? (nairaAmount / currentRate).toFixed(2) : (result?.amount / 750).toFixed(2)}</PayBillSQLInText>
                                </PayBillAmountIn>
                            </PayBillAmoutCont>
                        </PayBillGroup>

                        <PayBillButtonDiv>
                            <Button title={"Proceed"} type="submit"/>

                        </PayBillButtonDiv>



                    </PayBillForm>
                </PayBillInnerContainer>
                : 
                <div className="successful__">
                <img src="/assets/successful.svg" alt="successful" />
                <p className="successful__text">Your transaction is successful</p>
                <Button
                  title="Go to Dashboard"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                />
                <p>View transaction on <a className="algo__link" href={`https://algoexplorer.io/tx/${txId}`} target="_blank">algoexplorer</a></p>
              </div>
            
        }
        </PayBillContainer>
    )
}

export default PayBill