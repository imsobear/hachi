# some config files


## Tree

- `.eslintrc`
- `.gitignore`
- `.npmignore`
- `.editorconfig` @todo


## Content


### `.eslintrc`


```
{
  // 根据 env 会忽略相关的全局变量
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true,
    "jquery": true,
    "amd": true
  },
  "ecmaFeatures": {
    "jsx": true
  },
  "globals": {
    "KISSY": true,
    "React": true
  },

  /**
   *  0 - turn the rule off
   *  1 - turn the rule on as a warning (doesn't affect exit code)
   *  2 - turn the rule on as an error (exit code is 1 when triggered)
   */
  "rules": {
    "eqeqeq": 1,                // !=, == 会报警
    "quotes": [1, "single"]      // 双引号会报警
  }
}
```

### `.gitignore`

```
.idea
node_modules
npm-debug.log
.DS_Store
coverage
```


### `.npmignore`

```
.idea
node_modules
npm-debug.log
.DS_Store
coverage
examples
```

### `.editorconfig`

@todo