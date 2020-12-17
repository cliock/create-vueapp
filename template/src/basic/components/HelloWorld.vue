<template>
  <div>

    <div class="hello" @click="jumpPage">
      {{ aaa }}
    </div>

    <div style="width: 50px;height: 50px;background: red" @click="add"></div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      aaa: 1
    }
  },
  methods: {
    jumpPage () {
      this.$router.push({
        name: 'home'
      })
    },
    add () {
      this.aaa++
    }
  },
  created () {
    // post请求
    let data1 = {
      _ajax: 1,
      username: 'demo',
      password: 'demo',
      remember: 1,
      auto_login: 0
    }


    this.$api.login(data1).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })

    // get请求演示
    let data2 = {_ajax: 1}
    this.$api.getProgressPdf(data2).then((res) => {
      console.log(res)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: rebeccapurple;
  width: 500px;
  height: 200px;
  background: aqua;
}
</style>
