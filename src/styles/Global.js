import { createGlobalStyle } from 'styled-components';
import AnotherFlight from 'Assets/fonts/AnotherFlight/Another_Flight.otf';

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }
    body, html, #root{
        width: 100%;
        font-family: ${({ theme }) => theme.fonts.normal} !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${({ theme }) => theme.colors.text};
    }

    #root {
        width: 100%;
        height: 100%;
    }

    .row {
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    pre {
        width: 100% !important;
        margin: 0 !important;
        display: flex !important;
        overflow: hidden !important;
        word-break: break-word !important;
        white-space: pre-line !important;
        font-family: unset !important;
        font-size: inherit !important;
    }

    img {
        max-width: 100%;
        height: auto;
        display: flex;
        align-self: flex-start;
    }

    svg{
        width: 100%;
        height: auto;
    }

    form{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    /* -------------- (START) TO RICH TEXT -------------- */
    dl, ol, ul{
        list-style-position: inside !important;
    }

    blockquote{
        overflow: hidden;
        padding-right: 1.5em;
        padding-left: 1.5em;
        margin-left: 0;
        margin-right: 0;
        font-style: italic;
        border-left: 5px solid #ccc;
    }

    table{
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        height: 100%;
        border: 1px double #b3b3b3;
    }

    table td, table th{
        min-width: 2em;
        padding: .4em;
        border: 1px double;
        border-color: #bfbfbf !important;        
    }

    .ck-editor {
        width: 100% !important;
    }

    :root {
        /* Overrides the border radius setting in the theme. */
        --ck-border-radius: ${({ theme }) => theme.sizes.border_radius};
        --ck-color-base-border: #999;
    }
    /* -------------- (END) TO RICH TEXT -------------- */

    @font-face {
        font-family: NEOTERIC;
        src: url("//db.onlinewebfonts.com/t/b359a7e2080fb171a4befe467e647482.eot");
        src: url("//db.onlinewebfonts.com/t/b359a7e2080fb171a4befe467e647482.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/b359a7e2080fb171a4befe467e647482.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/b359a7e2080fb171a4befe467e647482.woff") format("woff"), url("//db.onlinewebfonts.com/t/b359a7e2080fb171a4befe467e647482.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/b359a7e2080fb171a4befe467e647482.svg#NEOTERIC") format("svg");
    }

    @font-face {
        font-family: AnotherFlight;
        src: url(${AnotherFlight});
    }
`;

export default Global;