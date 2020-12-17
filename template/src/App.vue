<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>

<script>
import performance from 'web-performance-monitor'

export default {
  name: 'App',
  watch:{
    $route(){
      if (process.env.NODE_ENV == 'development') {
        this.$nextTick(() => {
          performance.resourceDetection()
        })
      }
    }
  },
  created () {
    if (process.env.NODE_ENV == 'development') {
      this.$nextTick(() => {
        performance.homePageDetection()
      })
    }
  }
}
</script>

<style>

</style>
