import { css } from 'styled-components';

const RegularFont = css`
  @font-face {
    font-family: 'Sora-Regular';
    src:  local('Sora-Regular'),
    url('/fonts/Sora/Sora-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const BoldFont = css`
  @font-face {
    font-family: 'Sora-Bold';
    src: local('Sora-Bold'),
    url('/fonts/Sora/Sora-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;

const ExtraBold = css`
  @font-face {
    font-family: 'Sora-ExtraBold';
    src: url('/fonts/Sora/Sora-ExtraBold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal
  }
`

const SemiBold = css`
  @font-face {
    font-family: 'Sora-SemiBold';
    src: url('/fonts/Sora/Sora-SemiBold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`

export { RegularFont, BoldFont, ExtraBold, SemiBold };
