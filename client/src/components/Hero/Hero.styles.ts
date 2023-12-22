import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    
`
export const FeeWrapper = styled.div`
    display: flex;
    width: 100% !important;
    justify-content: space-between;
    p{
        margin-top: -0.1rem;
    }
    span{
        font-family: Sora-Bold, sans-serif;
        font-weight: bold;
    }
`
export const TitleContainer = styled.div`
    width: 35rem;
    p{
        font-family: Sora-Bold;
        font-size: 62px;
        background: linear-gradient(45deg, #409099, #84E681);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    span{
        color: #000;
        font-family: Sora-Regular;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        display: flex;
        margin-top: -3rem;
        align-items: center;
        line-height: normal;
    }
    img {
        padding: 10px;
        position: relative;
        top: -0.1rem;
    }
`
export const LeftFlex = styled.div`
    display: flex;
    flex-direction: column;
`
export const RightFlex = styled.div`
    width: 50%;
    img{
        
        flex-shrink: 0;
    }
`
export const ProductContainer = styled.div`
    padding-top: -1.5rem !important;
    padding-bottom: 2rem !important;
`
export const ButtonOne = styled.div`
    display: flex;
    width: 1rem;
    height: 20px;
    opacity: 0.9;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    gap: 0.8rem;
    div{
        display: flex;
        margin-top: -0.6rem !important;
        gap: 0.5rem;
        padding-left: 40px !important;
    }
    img{
        width: 23px;
        height: 23px;
        position: relative;
        top: 0.8rem;
    }

`
export const TypeDiv = styled.div`
    display: flex;
    gap: 0.5rem !important;
    //margin-left: 3rem !important;

`
export const MiniForm = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: 100%;
    margin-top: 1rem !important;
    margin: auto;
   
    div{
    width: 90%;
    margin: auto;
    padding: 0.5rem;
    }
`
const animatedBackground = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;
export const Rate = styled.div`
    width: 12rem !important;
    padding: 1rem;
    margin: auto;
    margin-top: 1rem;
    color: #589956;
    margin-bottom: -2rem !important;
    border-radius: 30.621px;
    background: #E6FAE6;
    text-align: center;

    
`