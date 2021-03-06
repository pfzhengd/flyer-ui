# Container 布局容器

可快速搭出页面基本结构的组件:

```
fly-container:外层容器。
fly-header：顶栏窗口，常用于页面头部。
fly-aside：侧边栏容器。
fly-main：要区域容器。
fly-footer：底栏容器。
```

## 常见的布局结构

::: demo

```html
<fly-container class='fly-container-demo'>
  <fly-header>Header</fly-header>
  <fly-main>Main</fly-main>
  <fly-footer>Footer</fly-footer>
</fly-container>
<fly-container class='fly-container-demo'>
  <fly-main>Main</fly-main>
  <fly-footer>Footer</fly-footer>
</fly-container>
<fly-container class='fly-container-demo' direction="vertical">
  <fly-aside>Aside</fly-aside>
  <fly-main>Main</fly-main>
</fly-container>
<fly-container class='fly-container-demo'>
  <fly-header>Header</fly-header>
  <fly-container class='fly-container-demo' direction="vertical">
    <fly-aside>Aside</fly-aside>
    <fly-main>Main</fly-main>
  </fly-container>
  <fly-footer>Footer</fly-footer>
</fly-container>
<fly-container class='fly-container-demo' direction="vertical">
  <fly-aside>Aside</fly-aside>
  <fly-container class='fly-container-demo'>
    <fly-header>Header</fly-header>
    <fly-main>Main</fly-main>
    <fly-footer>Footer</fly-footer>
  </fly-container>
</fly-container>

<fly-container class='fly-container-demo'>
  <fly-header>Header</fly-header>
  <fly-container class='fly-container-demo' direction="vertical">
    <fly-aside>Aside</fly-aside>
    <fly-main>Main</fly-main>
  </fly-container>
  <fly-footer>Footer</fly-footer>
</fly-container>

<style>
  .fly-container-demo {
    /* margin-bottom:10px; */
  }
  .fly-container-demo .fly-header {
    background: #263238;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .fly-container-demo .fly-main {
    background: #a3afb7;
    color: #fff;
    line-height: 200px;
    text-align: center;
  }
  .fly-container-demo .fly-footer {
    background: #37474f;
    color: #fff;
    line-height: 60px;
    text-align: center;
  }
  .fly-container-demo .fly-aside {
    background: #526069;
    color: #fff;
    line-height: 200px;
    text-align: center;
  }
</style>
```

:::

## Container - 可定制属性

| 属性名称  | 类型   | 默认值     | 可选值                | 说明             |
| --------- | ------ | ---------- | --------------------- | ---------------- |
| direction | String | horizontal | horizontal / vertical | 子元素的排列方向 |

## Header - 可定制属性

| 属性名称 | 类型   | 默认值 | 可选值 | 说明     |
| -------- | ------ | ------ | ------ | -------- |
| height   | String | 60px   | -      | 顶栏高度 |

## Aside - 可定制属性

| 属性名称 | 类型   | 默认值 | 可选值 | 说明       |
| -------- | ------ | ------ | ------ | ---------- |
| width    | String | 300px  | -      | 侧边栏宽度 |

## Footer - 可定制属性

| 属性名称 | 类型   | 默认值 | 可选值 | 说明     |
| -------- | ------ | ------ | ------ | -------- |
| height   | String | 60px   | -      | 底栏高度 |
