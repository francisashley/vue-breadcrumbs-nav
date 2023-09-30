<template>
  <div class="vbn-dropdown">
    <button
      :class="[
        'vbn-dropdown__button',
        { 'vbn-dropdown__button--is-open': open },
      ]"
      @click="handleOpenDropdown"
    >
      <slot name="trigger-content" :open="open" />
    </button>
    <ul
      class="vbn-dropdown__menu"
      v-if="open && items.length"
      v-on-clickaway="handleClickOutside"
    >
      <li
        v-for="item in items"
        :class="[
          'vbn-dropdown__menu-item',
          currentPath.startsWith(item.path) &&
            'vbn-dropdown__menu-item--active',
        ]"
        @click="handleSelect(item.path)"
        :key="item.path"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { directive as vOnClickaway } from "vue3-click-away";

const open = ref(false);

defineProps<{
  items: { path: string; label: string }[];
  currentPath: string;
}>();

const emit = defineEmits(["select", "open", "close"]);

const handleSelect = (path: string) => {
  open.value = false;
  emit("select", path);
  emit("close");
};

const handleOpenDropdown = () => {
  open.value = true;
  emit("open");
};

const handleClickOutside = () => {
  open.value = false;
  emit("close");
};
</script>

<style lang="scss">
.vbn-dropdown {
  @apply tw-inline-flex tw-relative tw-h-full;

  &__button {
    @apply tw-inline-flex tw-items-center tw-bg-transparent tw-border-transparent tw-p-0 tw-cursor-pointer tw-h-full tw-opacity-50;

    &:hover,
    &--is-open {
      @apply tw-bg-gray-200 tw-opacity-100;
    }
  }

  &__menu {
    @apply tw-absolute tw-left-0 tw-border tw-border-gray-300 tw-top-full tw-bg-white tw-list-none tw-p-0 tw-m-0;
  }

  &__menu-item {
    @apply tw-px-1 tw-cursor-pointer tw-whitespace-nowrap;

    &:hover {
      @apply tw-bg-gray-100;
    }

    &--active {
      @apply tw-font-medium;
    }
  }
}
</style>
