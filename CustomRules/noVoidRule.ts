import * as Lint from "tslint";
import * as ts from "typescript";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING =
    "Void statement is not a good way to surpress the need for return or await";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }
}

// tslint:disable-next-line: no-big-function
function walk(ctx: Lint.WalkContext<void>): void {
  return ts.forEachChild(ctx.sourceFile, function cb(node): void {
    if (node.kind === ts.SyntaxKind.VoidExpression) {
      const { expression } = <ts.VoidExpression>node;
      const keywordStart = expression.pos - "void".length;
      ctx.addFailure(
        keywordStart,
        expression.pos,
        Rule.FAILURE_STRING,
        Lint.Replacement.deleteFromTo(
          keywordStart,
          expression.getStart(ctx.sourceFile)
        )
      );
    }
    return ts.forEachChild(node, cb);
  });
}
