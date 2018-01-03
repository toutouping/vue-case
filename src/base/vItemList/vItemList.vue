<template>
  <div class="v-list border-1px">
    <div class="v-list-group">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="scss" scoped type="text/css">
.v-list{
  @include border-1px(#c8c7cc);
  .v-list-header{
    font-size: 1.2rem;
    padding-left: 16px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 0;
    @include border-1px(#c8c7cc);
    background-color: #f6f6f6;
  }
  & .v-item:not(:last-child) .v-item-inner{
    @include border-1px(#c8c7cc);
  }
}
</style>


