<template>
  <div :class="['vbn-crumb', { 'vbn-crumb--is-open': isOpen }]">
    <span class="vbn-crumb__label" @click="handleSelect(crumb.path)">
      {{ crumb.label }}
    </span>
    <breadcrumbs-nav-dropdown
      v-if="crumb.children.length"
      class="vbn-crumb__divider"
      :items="crumb.children"
      :current-path="currentPath"
      @select="handleSelect($event)"
      @open="handleToggleState(true)"
      @close="handleToggleState(false)"
    >
      <template #trigger-content="{ open }">
        <arrow-down-s-line v-if="open" class="vbn-crumb__divider-icon" />
        <arrow-right-s-line v-else class="vbn-crumb__divider-icon" />
      </template>
    </breadcrumbs-nav-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BreadcrumbsNavDropdown from "./BreadcrumbsNavDropdown.vue";
import ArrowRightSLine from "./icons/arrow-right-s-line.vue";
import ArrowDownSLine from "./icons/arrow-down-s-line.vue";

import type { FlatNode } from "../interfaces/tree";

const isOpen = ref<boolean>(false);

defineProps<{
  crumb: FlatNode;
  currentPath: string;
}>();

const emit = defineEmits(["select"]);

const handleSelect = (path: string) => {
  emit("select", path);
};

const handleToggleState = (isOpenState: boolean) => {
  isOpen.value = isOpenState;
};
</script>

<style lang="scss">
.vbn-crumb {
  @apply tw-inline-flex tw-items-center tw-relative;

  &:hover {
    @apply tw-bg-gray-100;
  }

  &__label {
    @apply tw-p-1 tw-cursor-pointer;
  }

  &__divider {
    @apply tw-inline-flex tw-relative tw-h-full;

    &-icon {
      @apply tw-w-4;
    }
  }

  &--is-open {
    @apply tw-bg-gray-100;
  }
}
</style>
