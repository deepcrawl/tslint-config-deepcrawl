# TSLint Config DeepCrawl

Shared TSLint ruleset used by DeepCrawl developers.

## How to install the latest version

```
yarn add @deepcrawl/tslint-config
```

## How to install a specific version

Every update is tagged to ensure clarity of what version of the rules is your project using.

```
yarn add @deepcrawl/tslint-config@0.2.3
```

## How to add it to your project

Edit your `tslint.json` file and extend your ruleset by adding `@deepcrawl/tslint-config` to `extends` array.

```javascript
{
  "extends": [
    "@deepcrawl/tslint-config"
  ]
}
```
