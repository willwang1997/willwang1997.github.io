<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
export default {
  name: "Layout",
  mounted(){
    // console.log(this);
  }
};
</script>