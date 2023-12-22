import styled from "styled-components";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding:1rem 0.5rem 0 2rem;
  width: 100%;

  .hero__left {
    margin-bottom:22rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width: 760px) {
      margin-bottom:0rem;
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      postion:relative;
    }
    h3 {
      font-size: 50px;
      background: linear-gradient(45deg, #409099, #84e681);
      font-style: normal;
      font-weight: 700;
      line-height: 3.8rem;
      letter-spacing:0.25rem;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-family: var(--font-family-geom);
      @media screen and (max-width: 760px) {
       font-size:45px;
       line-height:normal;
     }
    
   
     .btnGo{
       
       justify-content:center;
       align-items:center;
       
     }
    }
    button {
      display:flex;
      width:40%;
      justify-content:center;
      padding: 0.8rem 0.2rem;
      margin-top:0.8rem;
      margin-bottom:0.1rem;
      @media screen and (max-width: 760px) {
        width:3rem;
        margin-top:1rem;
        padding: 0.3rem 3rem;
      }
    }

    .powered {
      margin-top:1.5rem;
      display: flex;
      align-items: center;
      
      @media screen and (max-width: 760px) {
        margin-top:3rem;
        justify-content:center;
        font-size:0.8rem;
     }
   }
   .powerImg{
     width:22%;
    @media screen and (max-width: 760px) {
      width:30%;
   }
   }
   .break{
    @media screen and (max-width:900px){
      display:none;
    }
  }
  .scan{
    margin-top:1rem;
    margin-bottom:1rem;
  }
    }
  }

  .hero__right {
   width:45rem;
    @media screen and (max-width: 760px) {
      display:none;
    }
    @media screen and (max-width: 1350px) {
      img {
        width: 40rem;
      }
    }
    @media screen and (max-width: 865px) {
      img {
        width: 35rem;
      }
    }
    @media screen and (max-width: 788px) {
      img {
        width: 31rem;
      }
    }
 
  }
`;
