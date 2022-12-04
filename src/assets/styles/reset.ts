import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  *{
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)*/

    font-family: 'Inter', sans-serif;
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
  }
  &:root{
    --Primary: #1B4B66;
    --PrimaryTint: #639599;
    --Error: #B00020;
    --Highlight: #FF8C4B;
    --Accent: #F4F4F4;
    --Dark: #13101E;
    --Bright: #FFFFFF;
    --Grey: #F1F1F1;
    --LightText: #B6B6B6;
    --TypeHighEmphasis: #171520;
    --TypeLowEmphasis: #626262;
    --alertBanner: #F0F0F0;
    --carryDiv: #DEDEDEB2;
    --shortcutDiv: #FFE6CA;
    --brownMakeup: #97451F;
    --pinkMakeup: #A53F64;
    --Brown14Makeup: #97451F24;
    --White50: #FFFFFF80;
    --Primary16: #17494D29;
    --TypeBright: #FFFFFF;
    --DarkShadow: #0000004D;
    --DiscountText: #E21D1D;
    --MajorVibrant: #FF404B;
    --Separator: #0000001F;
    --SeparatorStorybook: #D8D8D8;
    --ParagraphDateOrderCard: #7E7E7E;
    --BorderCardPaymentMethod: #E3E3E3;
    --paragraphExample: #A7A7A7;
  }
`
