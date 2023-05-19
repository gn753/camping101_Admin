import { css } from '@emotion/react';

export const global = css`
  * {
    margin: 0;
    padding: 0;
  }
  /* 기본 설정값 */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  textarea,
  a,
  button,
  select {
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  select,
  button,
  table {
    font-family: 🌈;
    font-size: 🌈;
    line-height: 🌈;
  }

  html,
  body {
    height: 100%;
  }

  body {
    position: relative;
    background-color: 🌈;
    color: 🌈;
    -webkit-text-size-adjust: none; /* 텍스트 크기 자동 조절 기능 : none */
  }

  textarea {
    width: 100%;
    resize: vertical;
    box-sizing: border-box;
  }

  img,
  fieldset,
  iframe {
    border: 0;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }

  ul,
  ol {
    list-style: none;
  }

  em,
  address {
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
  }

  a:focus,
  input:focus,
  button:focus,
  textarea:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    outline: none;
  }

  html,
  body {
    height: 100%; /* ✔️ Height on the parent will fix this issue. */
  }
  body {
    margin-top: 0px;
  }
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }
`;
