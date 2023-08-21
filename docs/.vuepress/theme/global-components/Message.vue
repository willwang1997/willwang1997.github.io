<template>
  <div class="message-layout">
    <h1 class="title">留言板</h1>
    <Comment></Comment>
  </div>
</template>

<script>
import Comment from "@theme/components/Comment.vue";
export default {
  components: { Comment },
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
</style>