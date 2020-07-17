# React学习项目

这是React学习入门项目库。

## 克隆当前项目到本地

```shell
git clone https://github.com/guozhenyi/study-react.git
```

## 起一个简单的web服务

```shell
yarn global add serve
serve study-react
```

## 压缩js

执行

```shell
npx terser -c -m -o lib/like_button.min.js -- js/like_button.js
```

## 配置JSX预处理器

```shell
yarn add --dev babel-cli@6 babel-preset-react-app@3
#yarn add --dev @babel/core @babel/cli
#yarn add --dev babel-preset-react-app
```

## 创建JSX预处理后放置目录

```shell
mkdir src
mkdir lib
```

## 运行JSX预处理器

```shell
npx babel src/like_button4.js --out-file lib/like_button4.js --presets react-app/prod
```

## 监听目录以运行JSX预处理

```shell
npx babel --watch src --out-dir lib --presets react-app/prod
```



