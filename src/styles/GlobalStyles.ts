import { createGlobalStyle } from 'styled-components';

import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

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
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
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

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
    background: ${props => props.theme.colors.background};
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    padding: 0 1rem;
    font-family: var(--font-main);
    color: ${props => props.theme.colors.text};
    max-width: var(--max-width);
    background: transparent;
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: var(--transition);
  }
  a:hover {
    color: ${props => props.theme.colors.text};
  }

  button {
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 8px;
    transition: var(--transition);

    :hover {
    color: var(--blue);
    }
}
`;
