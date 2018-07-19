<template>
  <div class="header">
    <div id="logo">{{ logo }}</div>
    <ul class="nav">
        <li v-for="nav in navs">{{nav.li}}</li>
    </ul>
    

  </div>
</template>

<script>
export default {
  name: 'headerDiv',
  data () {
    return {
      navs: [
          {li:'主页'},
          {li:'日志'},
          {li:'说说'},
          {li:'相册'}
      ]
    }
  },
  props:['logo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
