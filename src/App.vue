<template>
  <div class="tw-p-4">
    <VueBreadcrumbsNav v-model="activePath" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueBreadcrumbsNav from "./components/BreadcrumbsNav.vue";
import baseData from "./fixtures/data.json";
import { Node } from "./interfaces/tree";

const data: Node = baseData as any; // eslint-disable-line
const activePath = ref("recipes/lunch/sandwiches");
</script>

<style scoped></style>
