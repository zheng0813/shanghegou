<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	if(!localStorage.getItem("zhi")){
		localStorage.setItem("zhi","{}")
	}
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
