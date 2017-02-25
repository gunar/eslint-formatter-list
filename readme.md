# eslint-formatter-list

> Simple list of files formatter for [ESLint](http://eslint.org)

## Install

```
$ npm install --save-dev eslint-formatter-list
```


## Usage

### Open all files with errors in you favorite editor

```
$ $EDITOR `eslint --format=node_modules/eslint-formatter-list <dir>`
```

### ESLint CLI

```
$ eslint --format=node_modules/eslint-formatter-list file.js
```

## Output example

```
/home/user/repo/file_with_errors_1.js
/home/user/repo/file_with_errors_2.js
/home/user/repo/file_with_errors_3.js
```

## License

MIT [http://gunar.mit-license.org]()
