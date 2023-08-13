<template>
  <div class="footer-layout">
    <ul class="footer-list">
      <li>
        <div class="title">关于本站</div>
        <div class="text">
          MIT Licensed | Copyright © 2022-present Will Wang
        </div>
        <div class="text"></div>
      </li>
      <li>
        <div class="title">联系方式</div>
        <div class="text">邮箱:942345396@qq.com</div>
        <div class="text">
          <router-link to="/message/">留言板:点击留言</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.footer-list {
  width: $contentWidth;
  margin: 0 auto;
  max-width: calc(100% - 32px);
  padding-top: 3em;
  display: flex;
  justify-content: space-between;

  .title {
    font-weight: 700;
  }

  li:first-child {
    width: 50%;
  }
}

.footer-list * {
  color: $footerTextColor;
  font-weight: 400;
  font-size: 12px;
}
</style>