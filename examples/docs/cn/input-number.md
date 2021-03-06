<script>
 module.exports =  {
        data(){
            return {
                num:1,
                num1:0,
                num2:0,
                num3:0,
                value1:999,
                value2:0,
                disabled:false
            }
        },
         methods:{
            handleDisabled(){
                this.disabled = !this.disabled
            },
            formatter(value){
                return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/ig,',')
            },
            formatter1(value){
                return `${value} %`
            },
            handleChange(value){
                console.log(value)
            }
        }
    }
</script>

## Input Number 数字输入组件

### 基本使用

::: demo

```html
<template>
  <fly-input-number v-model="num"></fly-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    }
  };
</script>
```

:::

### 定制最大及最小值

::: demo

```html
<template>
  <fly-input-number v-model="num1" :min="0" :max="10"></fly-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 0
      };
    }
  };
</script>
```

:::

### 设置为禁用

::: demo

```html
<template>
  <fly-input-number :disabled="disabled"></fly-input-number>
  <fly-button type="primary" @click="handleDisabled"
    >Toggle disabled</fly-button
  >
</template>
<script>
  export default {
    data() {
      return {
        disabled: false
      };
    },
    methods: {
      handleDisabled() {
        this.disabled = !this.disabled;
      }
    }
  };
</script>
```

:::

### 设置步数及精确显示

::: demo

```html
<template>
  <fly-input-number
    v-model="num2"
    @change="handleChange"
    :step="2"
  ></fly-input-number>
  <fly-input-number
    v-model="num3"
    :precision="2"
    :step="0.1"
  ></fly-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: 0,
        num3: 0
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::

### 指定显示的格式

::: demo

```html
<template>
  <fly-input-number
    v-model="value1"
    :formatter="formatter"
    @change="handleChange"
  ></fly-input-number>
  <fly-input-number
    v-model="value2"
    @change="handleChange"
    :formatter="formatter1"
    :precision="2"
    :step="0.1"
  ></fly-input-number>
</template>
<script>
  export default {
    data() {
      return {
        value1: 999,
        value2: 0
      };
    },
    methods: {
      formatter(value) {
        return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/gi, ",");
      },
      formatter1(value) {
        return `${value} %`;
      },
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::

### InputNumber - 可定制属性

| 属性名称        | 类型     | 默认值 | 可选值       | 说明                      |
| --------------- | -------- | ------ | ------------ | ------------------------- |
| value / v-model | Number   | -      | -            | 绑定的值                  |
| min             | Number   | -      | -            | 最小值                    |
| max             | Number   | -      | -            | 最大值                    |
| disabled        | Boolean  | false  | true / false | 是否设置为禁用            |
| step            | Number   | 1      | -            | 每次改变的步数值,支持小数 |
| precision       | Number   | 0      | -            | 数值精度                  |
| formatter       | Function | -      | -            | 指定输入框显示值的格式    |

### InputNumber - 可定制的事件

| 事件名称  | 返回值     | 说明                       |
| --------- | ---------- | -------------------------- |
| change | 更新后的值 | 在点击选项状态变更时触发。 |
