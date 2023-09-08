<template>
  <div class="login-page">
    <div class="left-box"></div>
    <div class="right-box">
      <ul-form ref="formRef" class="login-form" :content="content" :model="loginInfo" label-position="top">
        <el-form-item>
          <el-button class="sub-btn" type="primary" @click="login"> 登录 </el-button>
          <div class="op-box">
            <el-checkbox v-model="loginInfo.autoLogin">自动登陆</el-checkbox>
            <nuxt-link to="/">忘记密码?</nuxt-link>
          </div>
        </el-form-item>
      </ul-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFormItem, FormInstance } from "udesign-vue";

definePageMeta({
  layout: false,
});

const formRef = ref<FormInstance>();

const loginInfo = reactive<any>({
  username: "",
  password: "",
  autoLogin: false,
});

const content = ref<IFormItem[]>([
  {
    component: "input",
    label: "用户名",
    id: "username",
    el: {
      placeholder: "请输入用户名",
    },
    rules: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  },
  {
    component: "input",
    label: "密码",
    id: "password",
    el: {
      placeholder: "请输入密码",
      type: "password",
    },
    rules: [{ required: true, message: "请输入密码", trigger: "blur" }],
  },
]);

const login = async () => {
  await formRef.value?.validate()?.(async (valid) => {
    if (!valid) return;
  });
};
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .left-box {
    flex: 1;
    background: url("~/assets/images/login/bg.svg") #0b71cc no-repeat center;
    background-size: 88%;
  }

  .right-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-form {
      width: 330px;

      :deep(.el-input__wrapper) {
        padding: 1px;

        .el-input__inner {
          padding: 0 10px;
        }
      }
      .sub-btn {
        width: 100%;
        margin-bottom: 15px;
      }
      .op-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
