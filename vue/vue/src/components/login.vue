<template>
  <div class="login">
    <span>{{ userName }}</span>
    <input v-model="username" @keyup='setUser'/>
    

  </div>
</template>

<script>
export default {
  name: 'loginDiv',
  data () {
    return {
      username:''
    }
  },
  props:['userName'],
  methods:{
      setUser:function(){
          this.$emit('transferUser',this.username);
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
