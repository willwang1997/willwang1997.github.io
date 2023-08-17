<template>
  <div class="post-tag" :class="userStyle">
    <router-link :to="'/category/' + tag">
      <span>{{ tag }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostTag",
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tagCum: this.tag,
      userStyle: null,
    };
  },
  created() {
    this.styleCalss(this.tagCum);
  },
  // 动态样式tags
  methods: {
    styleCalss(tag) {
      switch (tag) {
        case "前端":
          this.userStyle = "green";
          break;
        case "工作":
          this.userStyle = "red";
          break;
        case "生活":
          this.userStyle = "blue";
          break;
        case "书籍":
          this.userStyle = "origin";
          break;
        default:
          this.userStyle = "default";
          break;
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.post-tag {
  font-size: 12px;
  padding: 0 8px;
  line-height: 18px;
  border-radius: 2px;

  span {
    color: $tagsTextColor;
  }
}

.default {
  background-color: $accentColor;
}

.blue {
  background-color: rgb(83, 144, 208);
}

.green {
  background-color: rgb(152, 194, 60);
}

.red {
  background-color: rgb(252, 72, 100);
}

.origin {
  background-color: rgb(218, 109, 50);
}

&:not(:last-child) {
  margin-right: 10px;
}
</style>
