<script>
module.exports =  {
        data(){
            return {
                value1:10,
                value2:20,
                value3:30,
                value4:10,
                value5:20,
                value6:30,
                value7:10,
                value8:20,
                value9:30
            }
        },
        computed:{
            status(){
                return this.value4 === 100 ? 'success':'normal'
            }
        },
        methods:{
            addition(){
                if(this.value4<100){
                    this.value4+=10
                }
            },
            reduce(){
                if(this.value4>0){
                    this.value4-=10
                }
            },
            full(){
              this.value4 = 100
            }
        }
    }
</script>

## Progress 进度条

### 基本使用

::: demo

```html
<template>
  <div style="width:400px">
    <fly-progress :percentage="value1"></fly-progress>
    <fly-progress :percentage="value2" status="error"></fly-progress>
    <fly-progress :percentage="value3" status="success"></fly-progress>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: 10,
        value2: 20,
        value3: 30
      };
    }
  };
</script>
```
:::

### 显示状态及文本

::: demo

```html
<template>
  <div style="width:400px">
    <div style='width:200px'>
      <fly-progress :percentage="value7" size='small' show-text></fly-progress>
    </div>
    <div style='width:300px'>
      <fly-progress :percentage="value8" show-text status="error"></fly-progress>
    </div>
    <fly-progress
      :percentage="value9"
      show-text
      size='large'
      status="success"
    ></fly-progress>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value7: 10,
        value8: 20,
        value9: 30
      };
    }
  };
</script>
```

:::

### 动态使用

::: demo

```html
<template>
  <div style="width:400px">
    <div style='width:200px'>
      <fly-progress
        :status="status"
        size='small'
        :percentage="value4"
        show-text
      ></fly-progress>
    </div>
    <div style='width:300px'>
      <fly-progress
        :status="status"
        size='medium'
        :percentage="value4"
        show-text
      ></fly-progress>
    </div>
    <fly-progress
      :status="status"
      size='large'
      :percentage="value4"
      show-text
    ></fly-progress>
    <br />
    <fly-button @click="addition" size='mini'>+</fly-button>
    <fly-button @click="reduce" size='mini'>-</fly-button>
    <fly-button @click="full" size='mini'>100</fly-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value4: 10
      };
    },
    computed: {
      status() {
        return this.value4 === 100 ? "success" : "normal";
      }
    },
    methods: {
      addition() {
        if (this.value4 < 100) {
          this.value4 += 10;
        }
      },
      reduce() {
        if (this.value4 > 0) {
          this.value4 -= 10;
        }
      }
    }
  };
</script>
```

:::

### 进度条组
::: demo
```html
<template>
  <fly-progress>
    <fly-progress-item :percentage="10"></fly-progress-item>
    <fly-progress-item :percentage="30" class='green'></fly-progress-item>
    <fly-progress-item :percentage="40" class='red'></fly-progress-item>
    <fly-progress-item :percentage="20" class='default'></fly-progress-item>
  </fly-progress>
</template>
<style scoped>
  .green{
    background-color:#3eb058;
  }
  .red{
    background-color:#e93939;
  }
  .default{
    background-color:#ccc;
  }
</style>
```
:::


### Progress - 可定制属性

| 属性名称   | 类型    | 默认值 | 可选值                   | 说明                             |
| ---------- | ------- | ------ | ------------------------ | -------------------------------- |
| percentage | Number / String  | 0      | -                        | 百分比值，对应的是进度条的进度   |
| showText   | Boolean | false  | -                        | 是否显示文本                     |
| status     | String  | -      | normal / error / success | 进度条的状态，正常 / 错误 / 成功 |
| size     | String  | medium     | large / medium / small | 进度条的三种大小属性 |
| height     | String / Number  | 10px      |  | 指定进度条的高度，数字的单位是px|

### Modal - Slot

| 事件名称 | 说明           |
| -------- | -------------- |
| text     | 自定义文本     |
| status   | 自定义状态图标 |

### Progress Item - 可定制属性

| 属性名称   | 类型    | 默认值 | 可选值                   | 说明                             |
| ---------- | ------- | ------ | ------------------------ | -------------------------------- |
| percentage | Number / String  | 0      | -                        | 百分比值，对应的是进度条的进度   |
| status     | String  | -      | normal / error / success | 进度条的状态，正常 / 错误 / 成功 （优先级高于progress组件）|