import styled from "styled-components"

export const Background = styled.div`
    background: #FAFFFA;
    padding-left: 2rem !important;
    padding: 0.8rem;
    border-radius: 15px;

    h1{
        font-family: Sora-Bold;
        font-size: 42px;
        background: linear-gradient(45deg, #409099, #84E681);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background-clip: text;
        margin-top: -0.5rem;
        -webkit-background-clip: text;
        color: transparent;
    }
`
export const AirtimeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        font-family: Sora-SemiBold;
        font-size: 30px;
        background: linear-gradient(45deg, #409099, #84E681);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background-clip: text;
        //margin-top: -0.5rem;
        -webkit-background-clip: text;
        color: transparent; 
        &:hover{
            background: linear-gradient( to right,#84E681,#409099);
            background-clip: text;
            text-align: center;
            -webkit-background-clip: text;
            color: transparent;
        }
    }
    div{
        display: flex;
        flex-direction: column;

        h4{
            font-family: Sora-Bold;
            font-size: 22px;
            background: linear-gradient(45deg, #409099, #84E681);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            background-clip: text;
            margin-top: -1.5rem;
            -webkit-background-clip: text;
            color: transparent; 

            
        }
        h6{
            font-family: Sora-Regular,
            font-size: 7px !important;
            opacity: 0.5;
           
        }
    }
`
export const DivWrapper = styled.div`
    margin-left: 12rem;
`

export const Amount = styled.div`
    background: #FAFFFA;
    border-radius: 10px;
    height: 40px !important;
    padding: 1rem;
    margin-top: 1rem;
`
export const ProductDiv = styled.div`
    margin-left: 2.8rem;
`

export const MainWrapper = styled.div`
    width: 70%;
    border-radius: 15px;
    hr{
        margin-bottom: 1rem !important;
    }
    h2{
        font-family: Sora-SemiBold;
        font-size: 32px;
        background: linear-gradient(45deg, #409099, #84E681);
        font-style: normal;
        font-weight: 700;
        width: 18rem;
        line-height: normal;
        margin-top: 1rem;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
 
`