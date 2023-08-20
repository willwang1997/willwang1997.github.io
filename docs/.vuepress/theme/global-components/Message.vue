<template>
  <div class="message-layout">
    <h1 class="title">留言板</h1>
    <div id="valine-vuepress-comment"></div>
    <!-- id 将作为查询条件 -->
    <span id="/message/" class="leancloud_visitors" data-flag-title="留言板">
      <em class="post-meta-item-text">阅读量 </em>
      <i class="leancloud-visitors-count">10000</i>
    </span>
  </div>
</template>

<script>
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

  // 评论通过config配置使用失败，替代方法来自于 https://segmentfault.com/a/1190000017890986，
  mounted() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }
    new Valine({
      el: "#valine-vuepress-comment",
      appId: "a7wKbSbc5RiKOd1zn4tvonXH-gzGzoHsz",
      appKey: "tF2j46TCl3WBqg0HB963zchP",
      // 评论框占位内容
      placeholder: "评论支持Markdown语法",
      // 评论者头像
      avatar: "monsterid",
      visitor: true,
    });
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

  #valine-vuepress-comment {
    margin: 1em 0px;
  }
}
</style>>