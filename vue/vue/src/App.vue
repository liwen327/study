<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <headerDiv :logo="logoMsg"></headerDiv>
    <loginDiv :userName="userName" @transferUser='getUser'></loginDiv>
    <p>用户名为：{{user}}</p>
    <foot/>
  </div>
</template>  

<script>
//import HelloWorld from './components/HelloWorld'
import headerDiv from './components/header'
import loginDiv from './components/login'
import foot from './components/foot'

export default {
  name: 'App',
  data(){
    return {
      logoMsg:'logo message111',
      userName:'用户名：',
      user:''
    }
  },
  components: {
    //HelloWorld,
    headerDiv,
    loginDiv,
    foot
  },
  methods:{
    getUser:function(msg){
      this.user = msg;
    }
  }
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
