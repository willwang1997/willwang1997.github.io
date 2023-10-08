<template>
  <div class="comment-layout">
    <div id="test"></div>
    <!-- id 将作为查询条件 -->
    <span
      v-show="isShowReadCount"
      id="/message/"
      class="leancloud_visitors"
      data-flag-title="留言板"
    >
      <em class="post-meta-item-text">阅读量 </em>
      <i class="leancloud-visitors-count">10000</i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    isShowReadCount: {
      type: Boolean,
      default: true,
    },
  },
  // 评论通过config配置使用失败，替代方法来自于 https://segmentfault.com/a/1190000017890986，
  mounted() {
    this.renderValine();
  },
  destroyed() {
    // layoutDom2.removeChild(commentDom2);
  },
  watch: {
    // 路由变化时从新初始化Valine组件
    $route(a, b) {
      console.log("routechange", a, b);
      if (a.path == b.path) {
        this.renderValine();
      }
    },
  },
  methods: {
    renderValine() {
      let commentDom = document.getElementById("valine-vuepress-comment");
      let layoutDom = document.getElementById("test");
      if (!commentDom) {
        commentDom = document.createElement("div");
        commentDom.id = "valine-vuepress-comment";
        layoutDom.appendChild(commentDom);
      } else {
        console.log("yi jing cun zai");
      }
      this.newValine();
    },
    newValine() {
      // require window
      const Valine = require("valine");
      const leancloudStorage = require("leancloud-storage");
      if (typeof window !== "undefined") {
        window.AV = leancloudStorage;
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
        // 纠结了一个月的不刷新评论问题，没配下面这个配置
        path: window.location.pathname
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.comment-layout {
  #valine-vuepress-comment {
    margin: 1em 0px;
  }

  #test {
    margin: 1em 0px;
  }
}
</style>