import * as ts from 'typescript';
/**
 * Return true if node is `PropertyAccessExpression`
 * @param node A TypeScript node
 */
export declare function isPropertyAccessExpression(node: ts.Node): node is ts.PropertyAccessExpression;
/**
 * Return true if node is `CallExpression`
 * @param node A TypeScript node
 */
export declare function isCallExpression(node: ts.Node): node is ts.CallExpression;
/**
 * Return true if node is `Identifier`
 * @param node A TypeScript node
 */
export declare function isIdentifier(node: ts.Node): node is ts.Identifier;
/**
 * Return true if node is `VariableDeclaration`
 * @param node A TypeScript node
 */
export declare function isVariableDeclaration(node: ts.Node): node is ts.VariableDeclaration;
/**
 * Return true if node is `ExportAssignment`
 * @param node A TypeScript node
 */
export declare function isExportAssignment(node: ts.Node): node is ts.ExportAssignment;
/**
 * Return true if node is `TaggedTemplateExpression`
 * @param node A TypeScript node
 */
export declare function isTaggedTemplateExpression(node: ts.Node): node is ts.TaggedTemplateExpression;
/**
 * Return true if node is `TemplateExpression`
 * @param node A TypeScript node
 */
export declare function isTemplateExpression(node: ts.Node): node is ts.TemplateExpression;
/**
 * Return true if node is `NoSubstitutionTemplateLiteral`
 * @param node A TypeScript node
 */
export declare function isNoSubstitutionTemplateLiteral(node: ts.Node): node is ts.NoSubstitutionTemplateLiteral;
