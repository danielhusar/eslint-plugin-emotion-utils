const css = () => null;
let theme = () => () => 'foo';
let theme2 = () => () => 'foo';

var a = css`
  color: black;

  ${theme('bar')}
  ${theme2('bar')}
`;
