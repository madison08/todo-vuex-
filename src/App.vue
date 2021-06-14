<template>
  <div id="app">
    <h1>Todos</h1>

    <div id="main-card">
      <div class="input_todos_bloc">
        <button>⬇</button>
        <input type="text" placeholder="What need to be done ?">
      </div>
      
      <router-view></router-view>

      <div id="state_bloc">
        <ul>
          <li>
            <router-link :to="{ name: 'all' }">All</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'acive' }" >Active</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'completed' }"> Completed </router-link>
          </li>
        </ul>
      </div>
    </div>

    

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  font-family: Poppins,sans-serif;
  background-color: #2b3345;
  margin: 0px;
  padding: 0px;
}
h1{
  font-weight: bold;
  color: #fff;
}
#app {
  font-family: Poppins,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} 
#main-card{
  background-color: #fff;
  width: 40%;
  max-width: 700px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #e5f1ff;
}
.input_todos_bloc{
  height: 50px;
  display: flex;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
}
input:focus{
  outline: none;
}
.input_todos_bloc input{
  width: 100%;
  height: 90%;
  border-left: 0px;
  font-size: 25px;
  border: none;
  color: rgb(24, 23, 23);
}
.input_todos_bloc input::placeholder{
  color: #a19c9c;
  font-style: italic;
}
.input_todos_bloc button{
  border: none;
  font-size: 25px;
  padding: 10px;
  margin-right: 10px;
}

/* label */
.label_todo_item{
  height: 50px;
  display: flex;
  border-top: 1px solid #e8e5e5;
  display: flex;
}
.label_todo_item label{
  width: 90%;
  line-height: 50px;
  font-size: 23px;
  text-align: left;
  margin-left: 15px;
}
.label_todo_item input{
  width: 1.3em;
  height: 1.5em;
  margin-top: 12px;
  padding: 10px;
  margin-right: 10px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
} 
.label_todo_item input:checked{
  background-color: #000;
}

/* //state bloc */


#state_bloc ul{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid #e2e2e2;
  padding-top: 12px;
}
#state_bloc ul li{
  list-style-type: none;
}
li a:visited{
  color: inherit;
}
#state_bloc ul li a{
  text-decoration: none;
  padding: 5px;
}
.router-link-exact-active{
  border: 1px solid #e2e2e2;
}


@media (max-width: 768px){

  #main-card{
    min-width: 80%;

  }

}
</style>
