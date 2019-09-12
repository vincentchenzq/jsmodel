<template>
  <div id="app"></div>
</template>

<script>
import Basic from 'src/class/Basic'

export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {
    let basicValue = Basic.parse({});
    console.log(basicValue)
  },
  components: {
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
