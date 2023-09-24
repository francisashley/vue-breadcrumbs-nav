<template>
  <div class="vue-breadcrumbs-nav-divider">
    <button
      class="vue-breadcrumbs-nav-divider__dropdown-button"
      @click="handleOpenDropdown"
    >
      <arrow-down-s
        v-if="showDropdown"
        class="vue-breadcrumbs-nav-divider__dropdown-icon vue-breadcrumbs-nav-divider__dropdown-icon--open"
      />
      <arrow-down-r
        v-else
        class="vue-breadcrumbs-nav-divider__dropdown-icon vue-breadcrumbs-nav-divider__dropdown-icon--closed"
      />
    </button>
    <ul
      v-if="showDropdown && items.length"
      class="vue-breadcrumbs-nav-divider__dropdown-menu"
      v-on-clickaway="handleClickOutside"
    >
      <li
        v-for="item in items"
        class="vue-breadcrumbs-nav-divider__dropdown-menu-item"
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
import ArrowDownR from "./icons/arrow-down-r.vue";
import ArrowDownS from "./icons/arrow-down-s.vue";
import { directive as vOnClickaway } from "vue3-click-away";

const showDropdown = ref(false);

defineProps<{
  items: { path: string; label: string }[];
}>();

const emit = defineEmits(["select"]);

const handleSelect = (path: string) => {
  showDropdown.value = false;
  emit("select", path);
};

const handleOpenDropdown = () => {
  showDropdown.value = true;
};

const handleClickOutside = () => {
  showDropdown.value = false;
};
</script>

<style lang="scss">
.vue-breadcrumbs-nav-divider {
  display: inline-flex;
  position: relative;

  &__dropdown-button {
    display: inline-flex;
    align-items: center;
    margin: 0 4px;
    background: transparent;
    border: transparent;
    padding: 0;
    cursor: pointer;
  }

  &__dropdown-icon {
    width: 16px;
  }

  &__dropdown-menu {
    position: absolute;
    top: 20px;
    left: 8px;
    background: white;
    border: thin solid black;
    list-style: none;
    padding: 0;
  }

  &__dropdown-menu-item {
    padding: 0 4px;
    color: blue;
    cursor: pointer;
  }
}
</style>
