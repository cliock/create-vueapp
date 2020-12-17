<template>
  <div>
    <img src="../../assets/vue-2.png" alt="">
    <div class="btn" @click="jumpPage">
      跳转
    </div>


  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    jumpPage () {
      this.$router.push({
        name: 'helloworld'
      })
    }
  }
}
</script>

<style scoped>

.btn {
  color: rebeccapurple;
  width: 500px;
  height: 200px;
  background: aqua;
}
</style>