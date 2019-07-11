module.exports = context => {
  return {
    TemplateLiteral(node) {
      const { options } = context;
      const disabledHash = options[0];

      if (node.parent.tag && node.parent.tag.name === 'css') {
        node.expressions.forEach(expression => {
          const disabled = expression.callee && disabledHash.find(d => d.name === expression.callee.name);
          if (disabled) {
            context.report(
              expression.callee,
              disabled.message || `Do not use "${expression.callee.name}" function calls inside of css tagged literals`
            );
          }
        });
      }
    },
  };
};
