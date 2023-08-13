<template>
  <div class="category-layout">
    <h1 class="title">标签</h1>
    <ul class="tag-list">
      <li v-for="tag in tags" :key="tag.name">
        <router-link class="blog-tag" :to="tag.path">
          <div class="tag-info">
            <h1>{{ tag.name }}</h1>
            <div class="tag-count">
              <!-- <h3>({{ tag.pages.length }})</h3> -->
            </div>
          </div>
          <div class="discription">该类型在博客中共有：{{tag.pages.length}}篇</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      tags: null,
    };
  },
  created() {
    this.tags = this.$frontmatterKey.list;
    // console.log(this.$frontmatterKey);
  },
};
</script>

<style lang="stylus" scoped>
.category-layout {
  width: $contentWidth;
  // 父元素塌陷
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(100% - 32px);

  .title {
    margin-top: 1.5em;
  }

  .tag-list {
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

    @media (max-width: $MQMobile) {
      width: 100%;
    }

    .blog-tag {
      display: flex;

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
        padding: 0 1em;
        line-height: 120px;
        color: $textColor;
      }
    }
  }
}
</style>>