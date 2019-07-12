"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lint = require("tslint");
const ts = require("typescript");
class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    }
}
Rule.FAILURE_STRING = "Void statement is not a good way to surpress the need for return or await";
exports.Rule = Rule;
// tslint:disable-next-line: no-big-function
function walk(ctx) {
    return ts.forEachChild(ctx.sourceFile, function cb(node) {
        if (node.kind === ts.SyntaxKind.VoidExpression) {
            const { expression } = node;
            const keywordStart = expression.pos - "void".length;
            ctx.addFailure(keywordStart, expression.pos, Rule.FAILURE_STRING, Lint.Replacement.deleteFromTo(keywordStart, expression.getStart(ctx.sourceFile)));
        }
        return ts.forEachChild(node, cb);
    });
}
//# sourceMappingURL=noVoidRule.js.map