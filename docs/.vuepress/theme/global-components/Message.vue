<template>
  <div class="message-layout">
    <h1 class="title">留言板</h1>
    <div id="valine-vuepress-comment"></div>
    <!-- <Content />
    <Comment /> -->
  </div>
</template>

<script>
// import Valine from "valine";
// new Valine({
//   el: "#valine-vuepress-comment",
//   appId: "a7wKbSbc5RiKOd1zn4tvonXH-gzGzoHsz",
//   appKey: "tF2j46TCl3WBqg0HB963zchP",
// });
export default {
  components: {},
  name: "Message",
  data() {
    return {};
  },
  created() {
    // console.log(this.$site);
    // console.log(this.$page);
    // console.log(this.$frontmatter);
    // console.log(this.$pagination);
  },
};
</script>

<style lang="stylus" scoped>
.message-layout {
  width: $contentWidth;
  // 父元素塌陷
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(100% - 32px);

  .title {
    margin-top: 1.5em;
  }
}
</style>>