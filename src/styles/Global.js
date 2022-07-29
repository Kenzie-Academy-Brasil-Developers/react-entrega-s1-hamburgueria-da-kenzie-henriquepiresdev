import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary:#27AE60;
  --color-primary-50:#93D7AF;
  --color-secondary:#EB5757;
  --color-gray-100: #333333;
  --color-grey-50:#828282;
  --color-grey-20:#E0E0E0;
  --color-grey-0:#f5f5f5;
  --color-negative: #e60000;
  --color-warning: #ffcd07;
  --color-sucess: #168821;
  --color-information: #155bcb;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
*{
 cursor: default;
}
button{
  cursor: pointer;
}
input{
  cursor: text;
}



`;
export default GlobalStyle;
