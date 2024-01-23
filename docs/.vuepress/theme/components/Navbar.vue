<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink
      :to="$localePath"
      class="home-link"
    >
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </RouterLink>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      <NavLinks class="can-hide" />
      <div class="black-them">
        <p href="" class="nav-link"
        @click="selectMode(nowModeTitle)"
        >{{nowModeTitle}}</p>
      </div>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import applyMode from './Mode/applyMode.js'

export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  data () {
    return {
      linksWrapMaxWidth: null,
      nowModeTitle: null,
      currentMode: 'auto'
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    // 深色模式 功能加入  
    //modePicker 开启时默认使用用户主动设置的模式
    this.currentMode = localStorage.getItem('mode')  || 'auto'
    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    var that = this
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
      that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
    })
    window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
      that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
    })
    switch (this.currentMode) {
      case 'auto':
        this.nowModeTitle ='🌓自动';
        break;
      case 'dark':
        this.nowModeTitle ='🌙深色';
        break;
      case 'light':
        this.nowModeTitle ='🌕浅色';
        break;
    }
    console.log(this.currentMode,'2');
    applyMode(this.currentMode);
  },
   methods: {
    modeNext(mode){
      let modeName = null;
      switch (mode) {
        case '🌙深色':
          modeName='dark';
          this.nowModeTitle='🌕浅色';
          break;
        case '🌕浅色':
          modeName = 'light';
          this.nowModeTitle='🌓自动';
          break;
        case '🌓自动':
          modeName = 'auto';
          this.nowModeTitle='🌙深色';
          break;
      }
      return  modeName;
    },
    selectMode (mode) {
      let modeClick = this.modeNext(mode);
      console.log(modeClick);
      if (modeClick !== this.currentMode) {
        this.currentMode = modeClick
        applyMode(modeClick)
        localStorage.setItem('mode', modeClick)
      }
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color var(--regular-text)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color var(--bg-color)
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis

.black-them{
  margin-left: 1rem;
  display: flex;
  align-items: center;
  cursor pointer;
  p{
    color: var(--a-Text-color)
  }
  }
.navbar{
  background-color: var(--bg-color) !important;
}
</style>
