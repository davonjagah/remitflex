import InputField from "../InputField/InputField";
import {
  SendContainer,
  StepContainer,
  Step,
  StepNumber,
  DashedBorder,
  StepDiv
} from "./Send.styles";
import Button from "../Button/Button";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { banks } from "../../services/protected/banksAPI";
import { paymentControl } from "../../services/protected/paymentAPI";
import Select from "react-select";
import { customStyles } from "../../utils/customSelectorHelper";
import { commaFormat } from "../../utils/addons";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const ConvertMoneyToLocalCurrency = () => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [banksOptions, setBanksOptions] = useState([]);
  const [account, setAccount] = useState<any>(null);
  const [currentRate, setCurrentRate] = useState<any>(null);
  const vault = useSelector((state: any) => state.currentUser?.currentVault);
  const [txId, setTxId] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(linkVaultUrl, "linkVaultUrl");
  const [data, setData] = useState({
    amount: "",
    recipient: "",
    reason: "",
    bankName: null,
    accountNumber: "",
    youPay: "",
    rate: "",
    fee: "",
    transferTime: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const localBanks: any = await banks.getAllLocalBanks();
      const TRANSFORMED_BANK_OPTIONS = localBanks?.data?.data?.map((item: any) => ({
        value: item.id,
        label: item.name,
        option: item
      }));
      setBanksOptions(TRANSFORMED_BANK_OPTIONS);
    })();
  }, []);
  useMemo(() => {
    (async () => {
      const data: any = await paymentControl.getNGNrate();
      setCurrentRate(data?.rate);
      console.log(data, "rate");
      // setCurrentRate(rate?.data?.data?)
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (account) return;
      if (data.accountNumber.length > 7) {
        const body = {
          account_number: data.accountNumber,
          account_bank: data.bankName.code
        };
        const account = await banks.resolveAccount(body);
        setAccount(account?.data?.data.account_name);

        console.log(account, "account");
      }
    })();
  }, [data.accountNumber]);
  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  const renderDollar = () => {
    return <img src="/assets/svg/dola.svg" alt="icon" />;
  };
  const renderNaira = () => {
    return <img src="/assets/svg/naira.svg" alt="icon" />;
  };

  const toggleBtn = () => {
    setSwitchBtn(!switchBtn);
  };

  const handleOnChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    // if(e.target.name === 'accountNumber' && e.target.value.length > 7) {
    //   await resolveUserNameBankName()
    // }
    console.log(e.target.value);
  };

  const handleSendMoneyOnclick = () => {
    if (data.youPay) {
      handleNextStep();
    }
  };

  const handleRecipientDetailsOnclick = () => {
    if (data.bankName && account && data.reason) {
      handleNextStep();
    }
  };
   
  console.log(data);
  const remitPayment  = async () => {
    setIsLoading(true)
    // add a loading spinner to button
    console.log(vault)
    const body = {
      linkvaulturl : vault?.linkvault,
      account_bank: data.bankName.code,
      amount: parseFloat((data.youPay))*currentRate,
      account_number: data.accountNumber,
      currency: "NGN",
      narration: data.reason,
      debit_currency: "NGN",
    };
    console.log(body, "body");
    const payment = await paymentControl.remitPayment(body);
    setIsLoading(false)
    setTxId(payment?.data?.txId)
    console.log(payment, "payment");


    handleNextStep()

  }

  //  const resolveUserNameBankName = async () => {
  //   console.
  //   const body = {
  //     account_number: data.accountNumber,
  //     account_bank: data.bankName.id
  //   }
  //      const account = await banks.resolveAccount(body)
  //      console.log(account, "account")
  //  }

  return (
    <SendContainer>
      {currentStep < 4 && (
        <StepContainer>
          <Step>
            <StepDiv active={currentStep === 1}>
              <StepNumber active={currentStep === 1}>1</StepNumber>
              <p>Send Money</p>
            </StepDiv>
            <DashedBorder active={currentStep >= 1} />
          </Step>

          <Step>
            <StepDiv active={currentStep === 2}>
              <StepNumber active={currentStep === 2}>2</StepNumber>
              <p> Recipient Details</p>
            </StepDiv>
            <DashedBorder active={currentStep >= 2} />
          </Step>

          <Step>
            <StepDiv active={currentStep === 3}>
              <StepNumber active={currentStep === 3}>3</StepNumber>
              <p>Review Transfer</p>
            </StepDiv>
          </Step>
        </StepContainer>
      )}

      {
        isLoading ? <Spinner /> :
        <div className="position__step">
        {currentStep === 1 && (
          <div className="send__money">
            <p className="send-head"> Send Money</p>
            <div className="send__money__form">
              <InputField
                label={"Send"}
                name={"youPay"}
                value={data.youPay}
                placeholder={""}
                onChange={handleOnChange}
                leftIcon={switchBtn ? renderNaira() : renderDollar()}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type="number"
              />
              <div className="rate">
                <img
                  src="/assets/svg/toggle.svg"
                  className="toggle_money"
                  onClick={toggleBtn}
                  alt="toggle"
                />
                <p className="current_rate">$1 = ₦{currentRate && commaFormat(currentRate)}</p>
              </div>
              <InputField
                label={"Recipient Gets"}
                name={"recipient"}
                value={commaFormat(((data.youPay) * currentRate).toFixed(2)) ?? "0"}
                placeholder={""}
                onChange={handleOnChange}
                leftIcon={switchBtn ? renderDollar() : renderNaira()}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type="text"
                readonly={true}
              />

              <div className="fees">
                <div className="init__header">
                  <span>Fee</span>
                  <span> $ 0</span>
                </div>
                <div className="init__header">
                  <span>Transfer Time</span>
                  <span>Instantly</span>
                </div>
              </div>
              <div className="amount__paid">
                <div className="init__header">
                  <span>Amount to Pay</span>
                  <span>$ {commaFormat(data.youPay) || "0"}</span>
                </div>
                <div className="init__header">
                  <span>Recipient gets</span>
                  <span>₦{commaFormat((parseFloat(data.youPay) * currentRate).toFixed(2)) || "0"}</span>
                </div>
                <Button
                  title="Proceed"
                  onClick={handleSendMoneyOnclick}
                  className={!data.youPay ? "disabled-state" : ""}
                  // onClick={handleOnclick}
                />
              </div>
            </div>
          </div>
        )}


        {currentStep === 2 && (
          <div className="send__money">
            <p className="send-head"> Recipient Details</p>
            <div className="send__money__form">
              <Select
                options={banksOptions}
                placeholder="Select Bank"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    bankName: e.option
                  })
                }
                styles={customStyles}
              />
              <InputField
                label={"Account Number"}
                name={"accountNumber"}
                value={data.accountNumber}
                placeholder={""}
                onChange={handleOnChange}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type="number"
              />
              {account && <p className="account__name">{account}</p>}
              <InputField
                label={"Reason"}
                name={"reason"}
                value={data.reason}
                placeholder={""}
                onChange={handleOnChange}
                leftIcon={<></>}
                rightIcon={<></>}
                disabled={false}
                isPassword={false}
                error={""}
                type="text"
              />
              <Button
                title="Proceed"
                onClick={handleRecipientDetailsOnclick}
                className={!(data.bankName && account && data.reason) ? "disabled-state" : ""}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="send__money">
            <p className="send-head">Review Transfer</p>
            <div className="send__money__form">
              <div className="amount__info">
                <div className="bank__info">
                  <div className="init__header">
                    <span>Bank Name</span>
                    <span>{data?.bankName.name}</span>
                  </div>
                  <div className="init__header">
                    <span>Account Number</span>
                    <span>{data?.accountNumber}</span>
                  </div>
                  <div className="init__header">
                    <span>Reason</span>
                    <span>{data?.reason}</span>
                  </div>
                </div>
                <div className="bank__info">
                  <div className="init__header">
                    <span>You are sending</span>
                    <span>${commaFormat(data.youPay)}</span>
                  </div>
                  <div className="init__header">
                    <span>Recipient gets</span>
                    <span>₦{commaFormat((data.youPay * currentRate).toFixed(2))}</span>
                  </div>
                  <div className="init__header">
                    <span>Transfer time</span>
                    <span>Within minutes</span>
                  </div>
                  <div className="init__header">
                    <span>Transaction fee</span>
                    <span>$ 0</span>
                  </div>
                  <div className="init__header">
                    <span>Exchange rate</span>
                    <span>$1 = ₦{currentRate && commaFormat(currentRate)}</span>
                  </div>
                </div>
                <div className="amount__paid">
                  <div className="init__header">
                    <span>You Pay</span>
                    <span>${data?.youPay}</span>
                  </div>
                </div>
                <Button title="Proceed" onClick={remitPayment} />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
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
        )}
      </div>

      }

    </SendContainer>
  );
};

export default ConvertMoneyToLocalCurrency;
