<template>
<div>
  <div>

  
  这是一个子组件
  {{age}}
  <button @click="$emit('add',34)">向父组件传值 </button>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['age'],
  data(){
    return{
      name:'lily'
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
