const css = () => null;
const cx = () => null;
let theme = () => () => 'foo';
let theme2 = () => () => 'foo';

css`
  color: black;

  ${theme('bar')}
  ${theme2('bar')}

  ${() => 'display: block;'}


  ${function() {
    return 'display: block;';
  }}
`;
