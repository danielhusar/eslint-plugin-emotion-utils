const css = () => null;
let theme = () => () => 'foo';

css`
  ${theme.bar}
`;
