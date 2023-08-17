<template>
  <div class="post-meta">
    <div
      v-if="author"
      class="post-meta-author"
      itemprop="publisher author"
      itemtype="http://schema.org/Person"
      itemscope
    >
      <span itemprop="name">{{ author }}</span>
      <span v-if="location" itemprop="address"> &nbsp; in {{ location }}</span>
    </div>
    <div v-if="date" class="post-meta-date">
      <time pubdate itemprop="datePublished" :datetime="date"  class="date-time">
      创建于：{{ resolvedDate }}
      </time>
      更新于：<time pubdate itemprop="datePublished" :datetime="date">
        {{ resolveLastDate }}
      </time>
    </div>
    <ul v-if="tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs/plugin/utc'
import PostTag from './PostTag.vue'

dayjs.extend(dayjsPluginUTC)

export default {
  name: 'PostMeta',
  components: { PostTag },
  props: {
    tags: {
      type: [Array, String],
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
    lastUpdateTime:{
      type: String,
    }
  },
  created(){
    // console.log(this.$themeConfig);
  },
  computed: {
    resolvedDate() {
      return dayjs
        .utc(this.date)
        .format(this.$themeConfig.dateFormat || 'YYYY-MM-DD')
    },
    resolveLastDate(){
      return dayjs.utc(this.lastUpdateTime).format(this.$themeConfig.dateFormat || "YYYY-MM-DD")
    },
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags
      return [this.tags]
    },
  },
}
</script>

<style lang="stylus">
.post-meta
  &-tags
    display flex
    flex-wrap wrap
    list-style none
    overflow hidden
    padding 0
    margin 20px 0

    > li
      margin-bottom 10px

  > div
    display inline-flex
    line-height 12px
    font-size 12px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px

  .date-time{
    margin-right:15px;
  }
</style>
