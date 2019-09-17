## 我是谁

<details>
<summary>我是谁 TODO</summary>
**Browser**
```
    asdf 
```
</details>

## 遇到的问题

<details>
<summary>先举几个遇到的问题</summary>

- [`问题 1`](#问题1)
- [`问题 2`](#问题2)
- [`问题 3`](#问题3)


## </details>


<details>
<summary>有什么解决方案</summary>

总结一下遇到的问题：

- 对象取值的时候不能保证不为空
  - [lodash.get](./lodash.get.md)
  - [new Function](./function.md)
- 后台返回的值不能直接使用，需要增加很多重复的代码来转义
- 前台的值不能直接入库，需要增加很多重复的代码来转义
  </details>

* 我的解决方案
* 各个方法的优缺点
* 我们还可以做什么

### 问题1

[demo](./imgs/demo0.jpg)

> 在这种场景下，我们在开发中就不得不写一些防御性的代码，久而久之，项目中类似代码会越来越多，碰到层级深的，防御性代码就会写的越来越恶心。另外还有的就是，如果服务端在这中间某个字段删掉了，那就又得特殊处理了，否则会有一些未知的非空错误报错，这种编码方式会导致前端严重依赖服务端定义的数据结构，非常不利于后期维护。

<br>[⬆ Back to top](#遇到的问题)

### 问题2

```javascript
// 获取数据
async getData(){
    const data = await ajax();
    const { primaryPrice, lastBuyTime/** 省略很多需要处理的字段 */ } = data;
    // 原始单位是分，需要转为元
    primaryPrice = parseFloat(primaryPrice / 100).toFixed(2);
    // 格式化显示时间 毫秒数 --> 2019-01-01
    lastBuyTime = dateFormat(lastBuyTime, 'yyyy-MM-dd');
    /** 省略很多类似的转换 */
}
```

> 平时开发中，我们拿到了服务端返回的数据，有些不是标准格式的，是无法直接在视图上直接使用的，是需要而外格式化处理的，假如服务端返回的的价格字段单位统一是分，跟时间相关的字段统一是毫秒值，这个时候我们在组件的生命周期内，就不得不而外增加一些对数据处理的逻辑，还有就是这部分处理在很多组件都是公用的，我们就不得不频繁编写类似的代码，数据处理逻辑没有得到复用。

<br>[⬆ Back to top](#遇到的问题)

### 问题3

```javascript
// 提交
async submit(){
    const { primaryPrice, lastBuyTime/** 省略很多字段 */ } = this.data;
    // 单位在页面上是元，需要转为分
    primaryPrice = primaryPrice * 10;
    // 时间在页面上是字符串，需要转为毫秒数
    lastBuyTime = new Date(lastBuyTime.replace(/-/g,'/')).getTime();
    /** 省略很多类似的转换 */
}
```

> 在用户做了一些交互后，需要将一些数据存储到服务端，这个时候我们拿到的数据往往也是非标准的，就比如你要提交个表单，其中有个价格字段，你拿到价格单位可能是百位的，而服务端需要的单位必须是分位的，这个时候在提交数据之前，你又得对这部分数据进行处理，还有就是有些接口的参数是 json 字符串形式的，可能是多级嵌套的，你还要需要特意构造这样的参数数据格式，导致开发中编写了太多与业务无关的逻辑，随着项目逐渐扩大或者维护人员更迭，项目会越来越不好维护。

<br>[⬆ Back to top](#遇到的问题)
