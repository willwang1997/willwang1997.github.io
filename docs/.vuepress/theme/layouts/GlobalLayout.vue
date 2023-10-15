<template>
  <div id="vuepress-theme-blog__global-layout">
    <!-- <div v-if="$page.regularPath == '/'">
      <Home />
    </div>
    <div v-else> -->
      <!-- 公共样式组件 -->
      <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />
      <div class="sidebar-mask" @click="toggleSidebar(false)" />
      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <!-- <template #top>
            <slot name="sidebar-top" />
          </template>
          <template #bottom>
            <slot name="sidebar-bottom" />
          </template> -->
      </Sidebar>
      </div>
      <div class="content-wrapper">
        <component :is="layout" />
        <Footer/>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import Footer from '@theme/components/Footer.vue'
import { resolveSidebarItems } from "@theme/util";
export default {
  name:'GlobalLayout',
  components: {
    // AgainGlobalLayout: GlobalLayout,
    Home,
    Navbar,
    Sidebar,
    resolveSidebarItems,
    Footer
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style lang="stylus">
#vuepress-theme-blog__global-layout {
  word-wrap: break-word;
}
//头部固定但高度假装填充
.theme-container{
  height: 60px;
}
.content-wrapper {
  // padding 90px 15px 80px 15rem
  min-height: calc(100vh - 80px - 60px - 160px);
  // max-width $contentWidth
  // margin 0 auto
  margin-left: 240px;

  @media (max-width: $MQMobile) {
    & {
      // padding: 0px 5px 20px 5px;
      min-height: calc(100vh - 20px - 60px - 100px);
      // 移动端适配
      margin: 0 auto;
    }
  }
}
</style>