<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br>
    <button @click="add(1)">值 + 1</button>
    <button @click="add(5)">值 + 5</button>
    <button @click="add(10)">值 + 10</button>
    <button @click="any">一秒後修改666</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    add (n) {
      this.$store.commit('addn', {
        nbr: n,
        str: 'abc'
      })
    },
    any () {
      this.$store.dispatch('ChangeAsync', 666)
    }
  }

}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
