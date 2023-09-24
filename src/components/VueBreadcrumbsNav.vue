<template>
  <ul :class="['vue-breadcrumbs-nav', classes?.NAV]">
    <li
      v-for="(crumb, i) in crumbs"
      :key="crumb.path"
      :class="[
        'vue-breadcrumbs-nav__crumb',
        classes?.CRUMB,
        i === crumbs.length - 1 && 'vue-breadcrumbs-nav__crumb--is-current',
        i === crumbs.length - 1 && classes?.['CRUMB--IS-CURRENT'],
      ]"
    >
      <span
        :class="[
          'vue-breadcrumbs-nav__crumb-label',
          classes?.CRUMB__LABEL,
          i === crumbs.length - 1 &&
            'vue-breadcrumbs-nav__crumb-label--is-current',
          i === crumbs.length - 1 && classes?.['CRUMB__LABEL--IS-CURRENT'],
        ]"
        @click="handleSelect(crumb.path)"
      >
        {{ crumb.label }}
      </span>

      <NavDivider
        v-if="crumb.children.length"
        :items="crumb.children"
        :classes="classes"
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

export type InlineClass =
  | "NAV"
  | "CRUMB"
  | "CRUMB--IS-CURRENT"
  | "CRUMB__LABEL"
  | "CRUMB__LABEL--IS-CURRENT"
  | "DIVIDER"
  | "DIVIDER__DROPDOWN-BUTTON"
  | "DIVIDER__DROPDOWN-ICON"
  | "DIVIDER__DROPDOWN-ICON--OPEN"
  | "DIVIDER__DROPDOWN-ICON--CLOSED"
  | "DIVIDER__DROPDOWN-MENU"
  | "DIVIDER__DROPDOWN-MENU-ITEM";

const showDropdown = ref("");

const props = defineProps<{
  data: Node;
  modelValue: string;
  classes?: Partial<Record<InlineClass, string>>;
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
