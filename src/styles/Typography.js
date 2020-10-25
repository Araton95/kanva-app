import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

  p, li {
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    margin-bottom: .5em;
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
