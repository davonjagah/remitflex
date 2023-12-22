import { createGlobalStyle } from 'styled-components';
import { RegularFont, BoldFont, ExtraBold, SemiBold} from './fonts';
// styled components global styles
export const GlobalStyle = createGlobalStyle`
  ${RegularFont}
  ${BoldFont}
  ${ExtraBold}
  ${SemiBold}
    body {
        font-family: 'Sora-Regular', sans-serif;
        width: 100%;
        //top: 0.7rem;
        overflow-x: hidden;
        background: #fafafa;
        position: absolute;
        //left: 5rem;
        margin:auto;
      }
      .rate{
        position: relative;
        left: 8.5rem;
      }
      .feediv{
        width: 450px;
        padding-top: 1rem;
      }
      .span{
        color: #6EC06C;
      }
      .formdiv{
        display: flex;
        flex-direction: column;
        width: 420px;
        margin-top: -1.5rem;
      }
      .transactions{
       margin: auto;
       width: 63%;
        
      }
      .landing{
        margin:auto;
        padding: 1rem;
        width: 89%;
      }
`