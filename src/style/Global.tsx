import { createGlobalStyle, keyframes } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;

`

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;

  }
  body {  
    animation: ${RainbowLight} 85s alternate-reverse infinite;
    background-image: url("/images/egg/pattern.jpg");
    background-size: auto;
    background-attachment: cover;
    background-repeat: repeat

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle