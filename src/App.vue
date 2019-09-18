<template>
  <div id="app">
    <input v-model="value1.a.b.d" />
  </div>
</template>

<script>
// import Basic from 'src/class/Basic'
import Detail from 'src/class/Detail';
import fetch from 'src/services/fetch';

export default {
  name: 'app',
  data() {
    return {
      value1: Detail.parse({ a: { e: [{}] } }),
      value2: Detail.dispose({}),
      postData: {
        primaryPrice: 0, //
        lastBuyTime: '',
      },
    };
  },
  mounted() {
    // let basicValue = Basic.parse({});
    // console.log(basicValue)
    // let basicValue2 = Basic.dispose({});
    // console.log(basicValue2)
    console.log(this.value1);
    console.log(this.value2);

    fetch({
      method: 'get',
      url: '/getUserInfo',
    }).then(response => {
      console.log(response);
    });
  },
  components: {},
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
