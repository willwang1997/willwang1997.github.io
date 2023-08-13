<template>
  <div class="talk-layout">
    <h1 class="title">说说</h1>
    <div class="time-info">
      <div class="create-time">创建于: {{ createTime }}</div>
      <div class="update-time">更新于: {{ updateTime }}</div>
    </div>
    <Content />
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  name: "Talk",
  data() {
    return {
      createTime: null,
      updateTime: null,
    };
  },
  created() {
    // console.log(this.$site);
    // console.log(this.$page);
    // console.log(this.$frontmatter);
    // console.log(this.$pagination);
    this.updateTime = dayjs(this.$page.lastUpdatedTimestamp).format(
      "YYYY年MM月DD日"
    );
    this.createTime = dayjs(this.$frontmatter.date).format("YYYY年MM月DD日");
  },
};
</script>

<style lang="stylus" scoped>
.talk-layout {
  width: $contentWidth;
  // 父元素塌陷
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(100% - 32px);
  font-size: $fontSize;

  .title {
    margin-top: 1.5em;
  }

  .time-info {
    display: flex;
    align-content: center;
    font-size: 12px;
    color: #808695;
    margin: 1em 0px;

    .update-time {
      margin-left: 15px;
    }
  }
}
</style>>