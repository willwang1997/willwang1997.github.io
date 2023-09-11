<template>
  <div class="friendlink-layout">
    <h1 class="title">友情链接</h1>
    <ul v-if="data.features && data.features.length" class="friends-list">
      <li v-for="(feature, index) in data.features" :key="index">
        <a class="friend-one-a" :href="feature.link" target="target">
          <div class="tag-info">
            <h1>{{ feature.title | nameFliter }}</h1>
          </div>
          <div class="discription">
            <h3>{{ feature.title }}</h3>
            {{ feature.details }}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Friendlink",
  //计算属性来获取md中的数据
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
  created() {
    // console.log(this.$site);
    // console.log(this.$page);
    // console.log(this.$frontmatter);
    // console.log(this.$pagination);
  },
  filters: {
    nameFliter: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase();
    },
  },
};
</script>

<style lang="stylus" scoped>
.friendlink-layout {
  width: $contentWidth;
  // 父元素塌陷
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(100% - 32px);

  .title {
    margin-top: 1.5em;
  }

  .friends-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  li {
    width: calc(50% - 8px);
    height: fit-content;
    list-style: none;
    margin-top: 16px;
    border-radius: 15px;
    box-shadow: 0 1px 4px rgba(26, 26, 26, 0.15);
    // display: flex;
    max-height: 120px;

    @media (max-width: $MQMobile) {
      width: 100%;
    }

    .friend-one-a {
      display: flex;
    }

    .tag-info {
      width: 120px;
      height: 120px;
      background: $accentColor;
      color: white;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .discription {
      padding: 15px;
      color: $textColor;
      overflow: auto;
    }
  }
}
</style>