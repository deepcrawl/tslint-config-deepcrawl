module.exports = {
  extends: [
    "tslint:latest",
    "tslint-config-prettier",
    "tslint-clean-code",
    "tslint-consistent-codestyle",
    "tslint-sonarts"
  ],
  rules: {
    // tslint standard rules begin
    typedef: [true, "call-signature", "property-declaration"],
    "variable-name": [true, "check-format", "allow-leading-underscore"],
    "no-console": true,
    "member-ordering": false,
    "no-shadowed-variable": false,
    "object-literal-sort-keys": false,
    "no-submodule-imports": false,
    "max-classes-per-file": [true, 1],
    "array-type": [true, "array"],
    "ban-types": {
      options: [
        ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
        ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
        ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
        ["String", "Avoid using the `String` type. Did you mean `string`?"]
      ]
    },
    ban: [
      true,
      {
        name: ["Object", "assign"],
        message:
          "Object.assign allows getting around type checking. Consider another solution."
      }
    ],
    "class-name": true,
    "comment-format": [true, "check-space"],
    curly: [true, "ignore-same-line"],
    indent: [true, "spaces"],
    "interface-name": [true, "always-prefix"],
    "interface-over-type-literal": true,
    "await-promise": true,
    "no-use-before-declare": true,
    // tslint standard rules end

    // tslint-consistent-codestyle begin
    "prefer-while": true,
    "early-exit": true,
    "no-as-type-assertion": true,
    "no-accessor-recursion": true,
    "no-collapsible-if": true,
    "object-shorthand-properties-first": true,
    "no-unnecessary-else": true,
    "no-else-after-return": true,
    "no-unnecessary-type-annotation": true,
    "prefer-const-enum": true,
    "no-return-undefined": true,
    "no-collapsible-if": true,
    "no-unused": true,
    "prefer-while": true,
    // tslint-consistent-codestyle end

    // tslint-clean-code begin
    "id-length": false,
    "try-catch-first": true,
    "min-class-cohesion": false,
    "newspaper-order": true,
    "no-flag-args": true,
    "no-for-each-push": true,
    "no-feature-envy": true,
    "no-map-without-usage": true,
    "no-complex-conditionals": true,
    "prefer-dry-conditionals": true,
    "no-commented-out-code": true,
    // tslint-clean-code end

    // tslint-sonarts begin
    "no-identical-conditions": true,
    "no-misleading-array-reverse": true,
    "no-useless-increment": true,
    "no-all-duplicated-branches": true,
    "no-case-with-or": true,
    "no-collection-size-mischeck": true,
    "no-element-overwrite": true,
    "no-empty-destructuring": true,
    "no-identical-expressions": true,
    "no-ignored-initial-value": true,
    "no-ignored-return": true,
    "no-in-misuse": true,
    "no-self-assignment": true,
    "no-unthrown-error": true,
    "no-use-of-empty-return-value": true,
    "no-useless-intersection": true,
    "use-primitive-type": true,
    "no-dead-store": true,
    "consecutive-overloads": true,
    "max-union-size": [true, 3],
    "mccabe-complexity": true,
    "no-accessor-field-mismatch": true,
    "no-array-delete": true,
    "no-big-function": [true, 15],
    "no-duplicate-in-composite": true,
    "no-gratuitous-expressions": true,
    "no-identical-functions": true,
    "no-inconsistent-return": true,
    "no-invalid-await": false,
    "cognitive-complexity": [true, 8],
    "consecutive-overloads": true,
    "no-multiline-string-literals": true,
    "no-nested-incdec": true,
    "no-nested-template-literals": true,
    "no-redundant-boolean": true,
    "no-redundant-jump": true,
    "no-unconditional-jump": true,
    "no-redundant-parentheses": true,
    "no-same-line-conditional": true,
    "no-undefined-argument": true,
    "argument-order": false,
    "no-unenclosed-multiline-block": true,
    "no-unused-array": true,
    "prefer-default-last": true,
    "no-duplicate-string": true,
    "no-hardcoded-credentials": true,
    "prefer-immediate-return": true,
    "prefer-promise-shorthand": true,
    "no-inconsistent-return": true,
    "no-nested-incdec": true,
    "no-nested-template-literals": true,
    "prefer-promise-shorthand": true,
    "use-type-alias": true
    // tslint-sonarts end
  }
};
