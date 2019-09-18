```javascript
const cardData = {
  arr: [
    {
      description: {
        lastBuyTime: '2019-01-01',
      },
    },
  ],
};

console.log(
  getData(cardData, 'arr[0].description.lastBuyTime', 'arr[1].description'),
);
// ["2019-01-01", undefined]
```

> 实现一个 getData 使得下面的调用可以输出正确的结果

[Back](./share.md#遇到的问题)
