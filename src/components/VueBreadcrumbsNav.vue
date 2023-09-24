<template>
  <ul class="vue-breadcrumbs-nav">
    <li
      v-for="crumb in crumbs"
      :key="crumb.path"
      class="vue-breadcrumbs-nav__crumb"
    >
      <span
        class="vue-breadcrumbs-nav__crumb-label"
        @click="handleSelect(crumb.path)"
      >
        {{ crumb.label }}
      </span>

      <NavDivider
        v-if="crumb.children.length"
        :items="crumb.children"
        @select="handleSelect($event)"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import NavDivider from "./VueBreadcrumbsNavDivider.vue";
import { getBreadcrumbs, getFlatTree } from "../utils/tree.utils";
import type { Node } from "../interfaces/tree";

const showDropdown = ref("");

const props = defineProps<{
  data: Node;
  modelValue: string;
}>();

const emit = defineEmits(["input", "update:modelValue"]);

const breadcrumbs = computed(() => {
  const flatTree = getFlatTree(props.data);
  return getBreadcrumbs(flatTree, props.modelValue ?? "");
});

const crumbs = computed(() => {
  return breadcrumbs.value.map((crumb, i) => ({
    ...crumb,
    isFirst: i === 0,
    isLast: i === breadcrumbs.value.length - 1,
  }));
});

const handleSelect = (path: string) => {
  showDropdown.value = "";
  emit("input", path);
  emit("update:modelValue", path);
};
</script>

<style lang="scss">
.vue-breadcrumbs-nav {
  display: flex;
  list-style-type: none;
  padding: 0;

  &__crumb {
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  &__crumb-label {
    color: blue;
    cursor: pointer;
  }

  &__crumb:last-child &__crumb-label {
    color: black;
    cursor: initial;
  }
}
</style>
