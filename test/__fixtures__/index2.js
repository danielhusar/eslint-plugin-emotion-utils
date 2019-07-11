const css = () => null;
let theme = () => () => 'foo';

var a = css`
  ${theme.bar}
`;
