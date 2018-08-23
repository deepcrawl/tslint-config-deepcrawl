# TSLint Config DeepCrawl

Shared TypeScript linting ruleset used by DeepCrawl developers.

## How to install the latest version

```
npm install git://github.com/deepcrawl/tslint-config-deepcrawl.git
```

## How to install a specific version

Every update is tagged to ensure clarity of what version of the rules is your project using.

```
npm install git://github.com/deepcrawl/tslint-config-deepcrawl.git#1.0.0
```

## How to add it to your project

Edit your `tslint.json` file and extend your ruleset by adding `tslint-config-deepcrawl` to `extends` array.

```javascript
{
  "extends": [
    "tslint-config-deepcrawl"
  ]
}
```
