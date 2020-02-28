<template>
  <div class="hmcell">
      <div class="left">{{text}}</div>
      <div class="right">{{text2}}</div>
  </div>
</template>

<script>
export default {
  props: ['text', 'text2']
}
</script>

<style lang='less' scoped>
.hmcell{
    padding: 20px 25px;
    display: flex;
    justify-content: space-between

}

</style>
