module.exports = context => {
  return {
    TemplateLiteral(node) {
      if (node.parent.tag && node.parent.tag.name === 'css') {
        node.expressions.forEach(expression => {
          if (expression.callee && expression.callee.name === 'theme') {
            context.report(expression.callee, 'Do not use template literals');
          }
        });
      }
    },
  };
};
