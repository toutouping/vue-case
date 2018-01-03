<template>
  <div class="v-list-header border-1px">{{itemHeader}}</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    itemHeader: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
  .v-list-header{
    font-size: 1.2rem;
    padding-left: 16px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 0;
    @include border-1px(#c8c7cc);
    background-color: #f6f6f6;
  }
</style>


