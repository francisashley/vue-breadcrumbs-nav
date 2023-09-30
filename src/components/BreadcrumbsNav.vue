<template>
  <nav class="vbn">
    <NavCrumb
      v-for="crumb in crumbs"
      :key="crumb.path"
      :crumb="crumb"
      :current-path="modelValue"
      @select="handleSelect($event)"
    />
  </nav>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import NavCrumb from "./BreadcrumbsNavCrumb.vue";
import { getBreadcrumbs, getFlatTree } from "../utils/tree.utils";
import type { Node } from "../interfaces/tree";

const showDropdown = ref("");

const props = defineProps<{
  data: Node;
  modelValue: string;
}>();

const emit = defineEmits(["input", "update:modelValue"]);

const crumbs = computed(() => {
  const flatTree = getFlatTree(props.data);
  return getBreadcrumbs(flatTree, props.modelValue ?? "");
});

const handleSelect = (path: string) => {
  showDropdown.value = "";
  emit("input", path);
  emit("update:modelValue", path);
};
</script>

<style lang="scss">
.vbn {
  @apply tw-flex tw-font-sans tw-border tw-border-gray-300 tw-bg-white;
}
</style>
