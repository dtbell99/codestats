# codestats
Simple code statistics application showing how many lines of code are found in which extensions. 

## To use this application complete the following.

1. npm install
2. npm start /path/to/your/project

## Expected output

```
{
  directories: 10,
  files: [
    { extension: 'gitignore', files: 2, lines: 63 },
    { extension: 'js', files: 23, lines: 705 },
    { extension: 'md', files: 1, lines: 37 },
    { extension: 'json', files: 5, lines: 16385 },
    { extension: 'ico', files: 1, lines: 13 },
    { extension: 'css', files: 14, lines: 224 },
    { extension: 'html', files: 2, lines: 23 },
    { extension: 'png', files: 2, lines: 63 },
    { extension: 'txt', files: 1, lines: 2 },
    { extension: 'sh', files: 2, lines: 6 },
    { extension: 'http', files: 1, lines: 23 },
    { extension: 'env', files: 1, lines: 1 }
  ]
}
```
