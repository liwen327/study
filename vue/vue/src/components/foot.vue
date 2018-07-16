<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>foot Links</h2>
    

  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      msg: 'this is vue.js footer'
    }
  }
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
