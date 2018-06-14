<template>
  <div id="app">
    <h4>{{title}}</h4>
    <input type="text" v-model='newItem' @keyup.enter="addNewItem"/>
    <ul>
      <li v-for='item in items' v-bind:class='{finished:item.isFinished}' @click="toggleClass(item)">{{item.label}}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
//import helloWorld from './components/HelloWorld'
export default {
  name: 'app',
  data(){
    return{
      title:'this is a todolist',
      items:[],
      newItem:''
    } 
  },
  methods:{
    toggleClass:function(item){
      item.isFinished = !item.isFinished;
    },
    addNewItem:function(){
      this.items.push({
        label:this.newItem,isFinished:false
      });
      this.newItem = '';
    }
  }
}
</script>

<style>
.finished{
  color:red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
