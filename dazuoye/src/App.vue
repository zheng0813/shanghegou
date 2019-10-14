<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


	if(!localStorage.getItem("zhi")){
		localStorage.setItem("zhi","{}")
  }
  
  if(!localStorage.getItem("kind")){
		localStorage.setItem("kind","{}")
  }
  // localStorage.setItem("kind","{}")
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin:0;
    font-size: 13px;
  }
</style>
