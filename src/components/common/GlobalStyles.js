import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    
    body {
      font-family: 'Noto Sans KR', sans-serif;
      background-color: #f1f1f1;
      color: #333;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .hide {
      display: none;
    }

    // a{
    //     text-decoration:none;
    //     color:inherit;
    // }
    // *{
    //     box-sizing:border-box;
    // }
    // body{
    //     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    //     font-size:12px;
    //     background-color:rgba(20, 20, 20, 1);
    //     color:white;
    //     padding-top:50px;
    // }
`;

export default globalStyles;
