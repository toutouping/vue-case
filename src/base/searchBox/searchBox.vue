<template>
  <div class="search-box">
    <i class="icon-SearchF9"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <i @click="clear" v-show="query" class="icon-dismiss"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import {debounce} from "common/js/util";

  export default {
    props: {
      placeholder: {
        type: String,
        default: "搜索歌曲、歌手"
      }
    },
    data() {
      return {
        query: ""
      };
    },
    methods: {
      clear() {
        this.query = "";
      },
      setQuery(query) {
        this.query = query;
      },
      blur() {
        this.$refs.query.blur();
      }
    },
    created() {
      this.$watch("query", debounce((newQuery) => {
        this.$emit("query", newQuery);
      }, 200));
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .search-box{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 6px;
    height: 33px;
    background: #fff;
    border-radius: 6px;
    .icon-SearchF9{
      font-size: 24px;
      color: rgba(0,0,0,0.3);
    }
    .box{
      flex: 1;
      margin: 0 5px;
      line-height: 18px;
      background: #fff;
      color: rgba(0,0,0,1);
      font-size: 16px;
      &::placeholder{
        color: rgba(0,0,0,0.3);
      }
      &:focus{
        outline: none;
      }
    }
    .icon-dismiss{
      font-size: 16px;
      color: rgba(0,0,0,0.3);
    }
  }
</style>
