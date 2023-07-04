import { createGlobalStyle } from "styled-components";
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf"
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf"

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
} 

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

@font-face {
    font-family:'Source Sans Pro Light' ;
    src: local('Source Sans Pro Light') ,url(${fontLight}) format("truetype");
    font-display: swap;
    font-style: normal;
}
${'' /* @font-face: This is the CSS at-rule that specifies the creation of a new font family.
font-family: 'Source Sans Pro Light';: This line defines the name of the font family. In this case, it is set to 'Source Sans Pro Light'.
src: local('Source Sans Pro Light'), url(${fontLight}) format("truetype");: The src property specifies the source of the font file. In this case, it has two parts:
local('Source Sans Pro Light'): This indicates that the font file is available locally on the user's system. The name specified ('Source Sans Pro Light') is used as a reference to the locally installed font.
url(${fontLight}): This references an external font file using a URL. The URL is provided through a variable named fontLight. The font file is expected to be in TrueType (TTF) format.
format("truetype"): This specifies the format of the font file. In this case, it is set to TrueType (TTF).
font-display: swap;: This property specifies how the font should be displayed while it is being loaded. In this case, swap is used, which means that a fallback font will be used until the custom font is fully loaded. Once the custom font is available, it will be swapped with the fallback font.
font-style: normal;: This property specifies the font style. In this case, it is set to normal, indicating that the font should be displayed in its default style.
By using the @font-face rule, you can define custom fonts and use them throughout your web page by referencing the specified font family name ('Source Sans Pro Light' in this example). */}
@font-face {
    font-family:'Source Sans Pro' ;
    src: local('Source Sans Pro') ,url(${fontRegular}) format("truetype");
    font-display: swap;
    font-style: normal;
}
body{
    font-family: "Source Sans Pro",sans-serif;
    overflow-x: hidden;
}



:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px


  // Colors
  --dark: #000000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --blue: #0071e3;
  --blueRgba:"0, 113, 227";

  //fonts
  --fontL: "Source Sans Pro light";
  --fontR: "Source Sans Pro";
  
  // gradient
  --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
}

`