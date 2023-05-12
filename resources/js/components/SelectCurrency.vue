<template>
  <select v-model="value" @input="selectedValue">
    <option value="rub" selected>RUB</option>
    <option value="usd">USD</option>
    <option value="kzt">KZT</option>
  </select>
</template>

<script>
export default {
  name: "SelectCurrency",
    data() {
      return {
          value: 'rub'
      }
    },
    methods: {
      selectedValue(){
            this.$store.commit("ADD_CURRENCY_VALUE", this.value)
      }
    }
}
</script>

<style scoped>
</style>
