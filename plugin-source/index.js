module.exports = function (babel) {
    const {types: t} = babel;

    return {
        name: "ast-transform", // not required
        visitor: {
            CallExpression(path) {
                if (path.node.callee.object &&
                    path.node.callee.object.name === 'console') {
                    path.remove();
                }
            }
        }
    }
}
