<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>
    parent
    parent
    parent
    parent
    parent
    <child :age="age" @add="childAdd">
    </child>
    </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' 
import child from './components/child'

export default {
  name: 'app',
  components: {
    HelloWorld,
    child
  },
  data(){
    return{
      age:10
    }
  },
  methods: {
    childAdd(){
      this.age++
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
