<template>
  <ul-table v-bind="config" />
</template>

<script setup lang="tsx">
import { reactive, h } from "vue";
import type { TableProps } from "udesign-vue";

const config: TableProps = reactive({
  columns: [
    {
      label: "企业名称",
      prop: "CompanyName",
    },
    {
      label: "车牌号码",
      prop: "PlateNumber",
    },
    {
      label: "是否安装GPS",
      formatter: (row) => (row.HaveGps == "1" ? "有" : "没有"),
    },
  ],
  searchForms: [
    {
      label: "违规日期",
      id: "a",
      component: "date",
      el: {
        type: "daterange",
      },
      span: 8,
    },
    {
      label: () =>
        h(
          "span",
          {
            style: {
              color: "red",
            },
          },
          "车牌号码"
        ),
      id: "b",
      component: "input",
      default: "苏州",
      el: {
        placeholder: "车牌号",
      },
      span: 8,
    },
    {
      id: "c",
      label: "车辆类型",
      component: "select",
      options: [
        {
          label: "A",
          value: "A",
        },
      ],
      span: 8,
    },
    {
      id: "e",
      label: "清单类型",
      component: "input-number",
      span: 8,
    },
    {
      id: "f",
      label: "处理状态",
      component: "ElSelect",
    },
  ],
  forms: [
    {
      id: "PlateNumber",
      label: "车牌号码：",
      component: "input",
      rules: {
        required: true,
        message: "请输入车牌号码！",
        trigger: "change",
      },
    },
    {
      id: "HaveGps",
      label: "是否安装GPS：",
      component: "input",
    },
  ],
  getList() {
    return {
      list: [
        {
          CompanyName: "1",
        },
        {
          CompanyName: "2",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
        {
          CompanyName: "3",
        },
      ],
      total: 300,
    };
  },
});

const onclick = async () => {
  config.searchForms?.push({
    label: "李四",
    component: "input",
  });
};
</script>

<style scoped></style>
