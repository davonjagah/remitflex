import styled from "styled-components"


export const Main = styled.div`
    display: flex;
    flex: 1;

`
export const ButtonWrap = styled.div`
    position: relative;
    top: -10rem;
    left: 5.5rem;
    display: flex;
    gap: 0.4rem;
`
export const ButtonImage = styled.img`
    cursor: pointer;
    height: 87px !important;
    width: 150px !important;
`
export const TextStyle = styled.p`
    font-family: Sora-Regular, sans-serif;
    color: #fff;
    font-size: 25px;
    font-weight: 700 !important;
`
export const TextWrap = styled.div`
    margin: auto;
    text-align: center;
    position: relative;
    margin-top: -10rem !important;
    top: 4rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const LogoText = styled.p`
    color: white;
    font-family: Sora-Regular, sans-serif;
    font-weight: 200 !important;
    font-size: 12.5px;
    position: relative;
    top: 2.5rem;
`
export const Background = styled.div`
    width: 60rem;
    position: absolute;
    margin-left: 9.5rem;
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;
    background: linear-gradient(131deg, #409099 0%, #84E681 100%), #000;
    
    img{
        position: relative;
        left: -3.6rem;
        top: 10rem;
        width: 120px;
        height: 120px;
        flex-shrink: 0;
`

export const PaperImg = styled.img`
    position: relative;
    left: 56.45rem !important;
    top: -9rem !important;
    width: 120px !important;
    height: 120px;
    transform: rotate(-15deg);
    flex-shrink: 0;
`