import styled from "styled-components"

export const Header = styled.div`
    width: 40%;
    margin: auto;
`
export const BodyText = styled.div`
    display: flex;
    margin-left: 3rem;
    
`
export const Container = styled.div`
    margin-left: 0rem;

`
export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    div{
        display: flex;
        width: 100%;
        gap: 1rem;


        img{
            width: 95.698px;
            height: 95.698px;
            flex-shrink: 0;
        }
    }
`
export const ImageDiv = styled.img`
    margin-left: -5rem !important;
`
export const ContentWrapper = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    flex-direction: column;
    span{
        color: #545454;
        text-align: center;
        margin: auto;
        width: 32rem;
        margin-left: 23rem !important;
        font-family: Sora-Regular, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 175%; 
    }
    p{
        color: #545454;
        width: 20rem;
        font-family: Sora-Regular, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 175%; 
    }
    
`
export const SecondTitle = styled.div`
    font-size: 24px;
    color: #2775CA;
    font-family: 'Sora-Regular', sans-serif;
   
`
export const Title = styled.div`
    font-size: 24px;
    background: linear-gradient(45deg, #409099, #84E681);
    font-family: 'Sora-Regular', sans-serif;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`
export const MainText = styled.p`
    background: linear-gradient(45deg, #409099, #84E681);
    font-family: 'Sora-Regular', sans-serif;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding-top: 2rem;
    font-size: 40px;
    width: 25rem;
    text-align: center;
    margin-left: 3rem !important;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const ButtonWrap = styled.div`
    width: 15rem;
    margin-left: 32.2rem !important;
    margin-bottom: 5rem;
`
export const MidSection = styled.div`
    display: flex;
    width: 76%;
    justify-content: space-between;
    img{
        margin-top: 1rem;
        cursor: pointer;
        &:hover{
            scale: 1.1;
            
        }
    }

`
