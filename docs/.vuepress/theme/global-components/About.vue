<template>
  <div class="about-layout">
    <h1 class="title">关于</h1>
    <div class="time-info">
      <div class="create-time">创建于: {{ createTime }}</div>
      <div class="update-time">更新于: {{ updateTime }}</div>
    </div>
    <img :src="$withBase('/tupian1.jpeg')" alt="" class="aboutImg" />
    <Content />
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  name: "About",
  data() {
    return {
      createTime: null,
      updateTime: null,
    };
  },
  created() {
    // console.log(this.$site);
    this.$page.runTime = null;
    this.getRunTime();
    // console.log(this.$page);
    // console.log(this.$frontmatter);
    // console.log(this.$pagination);
    this.updateTime = dayjs(this.$page.lastUpdatedTimestamp).format(
      "YYYY年MM月DD日"
    );
    this.createTime = dayjs(this.$frontmatter.date).format("YYYY年MM月DD日");
  },
  methods: {
    getRunTime() {
      let startTime = new Date("06/01/2020 08:00:00");
      let endTime = new Date();
      let userTime = endTime - startTime;
      let T = 24 * 60 * 60 * 1000 * 365;
      let y = userTime / T;
      let Y = Math.floor(y);
      let d = (y - Y) * 365;
      let D = Math.floor(d);
      let h = (d - D) * 24;
      let H = Math.floor(h);
      let m = (h - H) * 60;
      let M = Math.floor(m);
      // let S = Math.floor((m - M) * 60);
      this.$page.runTime = Y + "年" + D + "天" + H + "小时" + M + "分";
      // console.log(Y + "年" + D + "天" + H + "小时" + M + "分",S);
    },
  },
};
</script>

<style lang="stylus" scoped>
.about-layout {
  width: $contentWidth;
  // 父元素塌陷
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(100% - 32px);
  font-size: $fontSize;

  // 关于界面的图片充满
  .aboutImg {
    height: auto;
    max-width: 100%;
  }

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

/deep/ p {
  margin: 1em 0;
}
</style>