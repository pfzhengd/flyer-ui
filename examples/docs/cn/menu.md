<script>
    module.exports = {
        data(){
            return {
                current:'001',
                items:[
                    {
                        text:'菜单一',
                        value:'001'
                    },
                    {
                        text:'菜单二',
                        value:'002'
                    },
                    {
                        text:'菜单三',
                        value:'003'
                    }
                ]
            }
        },
        methods:{
            handleClick(menu,index,$event){
                this.current = index
                console.log(menu,index,$event,this.current)
            }
        }
    }
</script>

## Menu 导航条

### 基本使用
::: demo
```html
<template>
    <fly-menu v-model='current'>
        <fly-menu-group>
            <fly-menu-item 
                @click='(current,$event)=>{handleClick(item,current,$event)}' 
                v-for='(item,index) in items' 
                :index='item.value'
                :key='index'>
                {{item.text}}
            </fly-menu-item>
        </fly-menu-group>
    </fly-menu>
</template>
```
```JS
export default {
    data(){
        return {
            current:'001',
            items:[
                {
                    text:'菜单一',
                    value:'001'
                },
                {
                    text:'菜单二',
                    value:'002'
                },
                {
                    text:'菜单三',
                    value:'003'
                }
            ]
        }
    },
    methods:{
        handleClick(menu,index,$event){
            this.current = index
            console.log(menu,index,$event,this.current)
        }
    }
}
```
::: 
### 

### Menu - 可定制的属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| value / v-model | String / Number / Boolean | -      | -            | 绑定的值      |

### Menu-Item - 可定制的属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| index | String / Number / Boolean | -      | -            | 唯一标识符      |

### Input - 可定制的事件

| 事件名称  | 返回值                   | 说明                                        |
| --------- | ------------------------ | ------------------------------------------- |
| click   | (index,Event)           | 点击菜单时触发                     |