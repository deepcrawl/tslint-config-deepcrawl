module.exports = {
  "extends": [
    "tslint:latest",
    "tslint-config-prettier",
    "tslint-no-circular-imports",
    "tslint-clean-code",
    "tslint-consistent-codestyle",
    "tslint-sonarts"
  ],
  "rules": {

    // tslint standard rules begin
    "variable-name": [true, "check-format", "allow-leading-underscore"],
    "member-ordering": false,
    "no-shadowed-variable": false,
    "object-literal-sort-keys": false,
    "no-submodule-imports": false,
    "max-classes-per-file": [true, 2],
    "array-type": [true, "array"],
    "ban-types": {
      "options": [
        ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
        [
          "Function",
          "Avoid using the `Function` type. Prefer a specific function type, like `() => void`, or use `ts.AnyFunction`."
        ],
        ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
        ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
        ["String", "Avoid using the `String` type. Did you mean `string`?"]
      ]
    },
    "class-name": true,
    "comment-format": [true, "check-space"],
    "curly": [true, "ignore-same-line"],
    "indent": [true, "spaces"],
    "interface-name": [true, "always-prefix"],
    "interface-over-type-literal": true,
    // tslint standard rules end

    // tslint-consistent-codestyle begin
    "prefer-while": true,
    "early-exit": true,
    "no-as-type-assertion": true,
    "object-shorthand-properties-first": true,
    "no-unnecessary-else": true,
    "no-collapsible-if": true,
    // tslint-consistent-codestyle end

    // tslint-clean-code begin
    "id-length": false,
    "try-catch-first": true,
    "max-func-args": true,
    "min-class-cohesion": true,
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
    "no-invalid-await": true,
    "cognitive-complexity": true,
    "consecutive-overloads": true,
    "max-union-size": [true, 3],
    "mccabe-complexity": true,
    "no-array-delete": true,
    "no-big-function": true,
    "no-duplicate-string": true,
    "no-hardcoded-credentials": true,
    "no-inconsistent-return": true,
    "no-nested-incdec": true,
    "no-nested-template-literals": true,
    "prefer-promise-shorthand": true
    // tslint-sonarts end
  }
}