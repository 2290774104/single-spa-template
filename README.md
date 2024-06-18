# single-spa-template

single-spa 项目模板

## 基座项目 layout

使用 vite+vue3+ts 搭建基座项目

启动项目

```sh
cd ./layout
pnpm install
pnpm run dev
```

## vue2 子项目 app1/app2

使用 webpack+vue2+ts 搭建的子项目

安装依赖

```sh
cd ./(app1/app2)
pnpm install
```

单独启动

```sh
pnpm run dev
```

作为子应用启动

```sh
pnpm run dev:micro
```

## vue3 子项目 app3

使用 vite+vue3+ts 搭建的子项目

安装依赖

```sh
cd ./app3
pnpm install
```

单独启动

```sh
pnpm run dev
```

作为子应用启动

```sh
pnpm run dev:micro
```

## react 子项目 app4

使用 vite+react18+ts 搭建的子项目

安装依赖

```sh
cd ./app4
pnpm install
```

单独启动

```sh
pnpm run dev
```

作为子应用启动

```sh
pnpm run dev:micro
```
