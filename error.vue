<template>
  <div class="error-page">
    <div class="img-box" :class="`img-${error.statusCode}`" />
    <p class="error-message">{{ error?.message }}</p>
    <el-button class="back-box" type="primary" @click="goBack">返回</el-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});
const error = props.error;
// 打印错误栈
const message = error.stack.replace(/<[^>]+>/g, "");
message && console.error(message);

useHead({
  title: `${error.statusCode} - ${error.message}`,
});

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped lang="scss">
.error-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-box {
    width: 100%;
    height: 50vh;
  }
  .img-404 {
    background: url("~/assets/images/404.svg") no-repeat center/contain;
  }

  .img-500 {
    background: url("~/assets/images/500.svg") no-repeat center/contain;
  }

  .error-message {
    color: #666060;
    margin-bottom: 40px;
  }

  .back-box {
    width: 16vw;
    margin-bottom: 12vh;
  }
}
</style>
