import * as ts from "typescript";

export class TsMorpher {
  private sourceFile: ts.SourceFile;
  private printer: ts.Printer = ts.createPrinter();
  private context: ts.TransformationContext = {
    factory: ts.factory,
    getCompilerOptions: () => ts.getDefaultCompilerOptions(),
    startLexicalEnvironment: () => {},
    suspendLexicalEnvironment: () => {},
    resumeLexicalEnvironment: () => {},
    endLexicalEnvironment: () => [],
    hoistFunctionDeclaration: () => {},
    hoistVariableDeclaration: () => {},
    requestEmitHelper: () => {},
    readEmitHelpers: () => [],
    enableSubstitution: () => {},
    isSubstitutionEnabled: () => false,
    onSubstituteNode: (_, node) => node,
    enableEmitNotification: () => {},
    isEmitNotificationEnabled: () => false,
    onEmitNode: (hint, node, emitCallback) => emitCallback(hint, node),
  };

  constructor(code: string) {
    this.sourceFile = ts.createSourceFile(
      "temp.ts",
      code,
      ts.ScriptTarget.Latest,
      true
    );
  }

  transform(rule: {
    kind: ts.SyntaxKind;
    filter?: (node: ts.Node) => boolean;
    action: (node: ts.MethodDeclaration) => ts.MethodDeclaration;
  }): void {
    const visitNode = (node: ts.Node): ts.Node => {
      if (node.kind === rule.kind && (!rule.filter || rule.filter(node))) {
        return rule.action(node as ts.MethodDeclaration);
      }
      return ts.visitEachChild(node, visitNode, this.context);
    };
    this.sourceFile = ts.visitNode(this.sourceFile, visitNode) as ts.SourceFile;
  }

  emit() {
    return this.printer.printFile(this.sourceFile);
  }
}
