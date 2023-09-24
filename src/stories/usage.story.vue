<template>
  <Story>
    <VueBreadcrumbsNav
      v-model="activePath"
      :data="data"
      @change-path="handleChange"
    />
  </Story>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VueBreadcrumbsNav } from "../index";
import data from "../fixtures/data.json";

const activePath = ref("recipes/lunch/sandwiches");

const handleChange = (path: string) => {
  console.log("path", path);
};
</script>
