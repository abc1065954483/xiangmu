<template>

<div class="btn" @click="handleclick">{{text}}</div>

</template>

<script>
export default {
  props: ['text'],
  data () {
    return {

    }
  },
  methods: {
    handleclick () {
      this.$emit('btnhandle')
    }
  }

}
</script>

<style lang="less" scoped>
.btn{
     height: 48*100vw/360;
    width: 314*100vw/360;
    color: white;
    line-height:48*100vw/360 ;
    background-color: #cc3300;
    text-align: center;
    border-radius: 24*100vw/360

}
</style>
