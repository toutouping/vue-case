<template>
  <div class="v-item border-1px">
    <p class="v-icon-start" :class="itemIcon"></p>
    <div  @click="itemClick" class="v-item-inner border-1px">
      <div class="v-item-text">{{itemText}}</div>
      <div class="v-item-note">
        <span class="v-note-text">{{itemNote}}</span>
        <span class="v-note-icon icon-keyboard_arrow_rightF9"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    itemText: {
      type: String
    },
    itemNote: {
      type: String
    },
    itemIcon: {
      type: String
    }
  },
  methods: {
    itemClick(event) {
      this.$emit("item-click", event);
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
  .v-item{
    display: flex;
    font-size: 1.7rem;
    padding-left: 16px;
    .v-icon-start{
      display: inline-block;
      margin: 8px 16px 8px 0;
      font-size: 2.8rem;
      color:#aeacb4;
      vertical-align: middle;
    }
    .v-item-inner{
      display: flex;
      flex: 1;
      line-height: 2.8rem;
      .v-item-text{
        flex: 1;
        display: inline-block;
        margin: 12px 8px 11px 0;
      }
      .v-item-note{
        display: inline-block;
        margin: 12px 8px 11px 0;
        color: #aeacb4;
        .v-note-text{
          margin-right: 8px;
          vertical-align: middle;
        }
        .v-note-icon{
          font-size: 2.8rem;
          vertical-align: middle;
        }
      }
    }
  }
</style>


