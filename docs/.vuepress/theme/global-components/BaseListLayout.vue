<template>
  <div id="base-list-layout">
    <h1 class="title">文章</h1>
    <div class="ui-posts">
      <article v-for="page in pages" :key="page.key" class="ui-post">
        <router-link :to="page.path" class="post-link">
          <img
            :src="showFMImg(page.frontmatter.img)"
            alt=""
            class="article-img"
          />
          <div class="text-warp">
            <div class="ui-post-title" itemprop="name headline">
              {{ page.title }}
            </div>
            <client-only v-if="page.excerpt">
              <div class="ui-post-summary" v-html="delHtmlTag(page.excerpt)" />
            </client-only>
            <div v-else class="ui-post-summary" itemprop="description">
              {{ page.frontmatter.summary || page.summary }}
            </div>
          </div>
        </router-link>
        <footer>
          <div v-if="page.frontmatter.date" class="ui-post-meta ui-post-date">
            <time
              pubdate
              itemprop="datePublished"
              :datetime="page.frontmatter.date"
            >
              日期：{{ resolvePostDate(page.frontmatter.date) }}
            </time>
          </div>

          <div
            v-if="page.frontmatter.tags"
            class="ui-post-meta ui-post-tag"
            itemprop="keywords"
          >
            <!-- <router-link
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :to="'/tag/' + tag"
            >
              {{ tag }}
            </router-link> -->
            <PostTag
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :tag="tag"
            />
          </div>
        </footer>
      </article>
    </div>
    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */
let THEME_BLOG_PAGINATION_COMPONENT;
import Vue from "vue";
import dayjs from "dayjs";
import dayjsPluginUTC from "dayjs/plugin/utc";
// import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import NavLink from "@theme/components/NavLink.vue";
import PostTag from "@theme/components/PostTag.vue";
import {
  Pagination,
  SimplePagination,
} from "@vuepress/plugin-blog/lib/client/components";
import { showFMImg } from "../util/index";

dayjs.extend(dayjsPluginUTC);

export default {
  components: {
    NavLink,
    PostTag,
  },

  data() {
    return {
      paginationComponent: null,
    };
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
    // console.log(this.$pagination);
  },

  methods: {
    showFMImg,
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT;
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    },

    resolvePostDate(date) {
      return dayjs
        .utc(date)
        .format(this.$themeConfig.dateFormat || "YYYY-MM-DD");
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags;
      return [tags];
    },
    //删除简介的p标签
    delHtmlTag(str) {
      return str.replace(/<[^>]+>/g, "");
    },
  },
};
</script>

<style lang="stylus">
#base-list-layout {
  width: $contentWidth;
  // 父元素塌陷
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(100% - 32px);
}

.title {
  margin-top: 1.5em;
}

.common-layout {
  .content-wrapper {
    padding-bottom: 80px;
  }
}

.post-link {
  // padding: 0px 5px;
}

.text-warp {
  padding: 8px 12px;
}

footer {
  padding: 8px 12px;
  border-top: 1px solid $borderColor;
}

.ui-post {
  // padding-bottom: 25px;
  // border-bottom: 1px solid $borderColor;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(26, 26, 26, 0.15);
  border-radius: 5px;
  border: 1px solid rgba(26, 26, 26, 0.15);

  &:last-child {
    // border-bottom: 0px;
    // margin-bottom: 0px;
  }

  .article-img {
    height: 240px;
    width: 100%;
  }

  a {
    color: $darkTextColor;
    font-weight: normal;
  }
}

.ui-post-title {
  // font-family: PT Serif, Serif;
  font-size: 18px;
  border-bottom: 0;
  cursor: pointer;

  a {
    // color: $darkTextColor;
    transition: all 0.2s;
    text-decoration: none;
  }
}

.ui-post-summary {
  font-size: 14px;
  // color rgba($darkTextColor, 0.54)
  // font-weight: 200;
}

.ui-post-meta {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;

  &:not(:last-child) {
    margin-bottom: 3px;
    margin-right: 20px;
  }

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }

  @media (max-width: $MQMobile) {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.ui-post-date {
  // color rgba($darkTextColor, 0.54)
  // font-weight: 200;
}

.ui-post-tag {
  // color rgba($darkTextColor, 0.54)
  // font-weight: 200;
  a {
    // color: $textColor;
    // font-weight: 200;
    text-decoration: none;

    // margin-right: 5px;
    &:hover {
      // color: $accentColor;
    }
  }
}
</style>
