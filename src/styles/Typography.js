import { createGlobalStyle } from "styled-components";

import BunkenTechBold from "../assets/fonts/BunkenTechSansPro-Bold.woff";
import BunkenTechPro from "../assets/fonts/BunkenTechSansPro-ExBd.woff";
import UbuntuBold from "../assets/fonts/Ubuntu-Bold.woff";
import UbuntuBoldItalic from "../assets/fonts/Ubuntu-BoldItalic.woff";
import UbuntuLightMedium from "../assets/fonts/Ubuntu-Medium.woff";
import UbuntuRegular from "../assets/fonts/Ubuntu-Regular.woff";

const Typography = createGlobalStyle`
  @font-face {
    font-family: BunkenTechBold;
    src: url(${BunkenTechBold});
  }

  @font-face {
    font-family: BunkenTechExtraBold;
    src: url(${BunkenTechPro});
  }

  @font-face {
    font-family: UbuntuBold;
    src: url(${UbuntuBold});
  }

  @font-face {
    font-family: UbuntuBoldItalic;
    src: url(${UbuntuBoldItalic});
  }

  @font-face {
    font-family: UbuntuMedium;
    src: url(${UbuntuLightMedium});
  }

  @font-face {
    font-family: Ubuntu;
    src: url(${UbuntuRegular});
  }

  html {
    font-family: Ubuntu, BunkenTechBold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p, li {
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
