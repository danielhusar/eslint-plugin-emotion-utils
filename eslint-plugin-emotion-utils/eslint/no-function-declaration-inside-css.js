module.exports = context => {
  return {
    TemplateLiteral(node) {
      const { options } = context;
      const message = options[0] && options[0][0] && options[0][0].message;
      if (node.parent.tag && node.parent.tag.name === 'css') {
        node.expressions.forEach(expression => {
          if (expression.type === 'ArrowFunctionExpression' || expression.type === 'FunctionExpression') {
            context.report(expression, message || `Do not use anonymous functions calls inside of css tagged literals`);
          }
        });
      }
    },
  };
};
