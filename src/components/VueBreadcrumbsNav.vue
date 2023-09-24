<template>
  <ul class="vue-breadcrumbs-nav">
    <li
      v-for="crumb in crumbs"
      :key="crumb.path"
      :class="[
        'vue-breadcrumbs-nav__crumb',
        { 'vue-breadcrumbs-nav__crumb--is-first': crumb.isFirst },
        { 'vue-breadcrumbs-nav__crumb--is-last': crumb.isLast },
      ]"
    >
      <span
        class="vue-breadcrumbs-nav__crumb-label"
        @click="handleSelect(crumb.path)"
      >
        {{ crumb.label }}
      </span>
      <button
        v-if="!crumb.isLast"
        class="vue-breadcrumbs-nav__dropdown-button"
        @click="handleOpenDropdown(crumb.path)"
      >
        <arrow-down-r
          v-if="showDropdown !== crumb.path"
          class="vue-breadcrumbs-nav__dropdown-icon"
        />
        <arrow-down-s v-else class="vue-breadcrumbs-nav__dropdown-icon" />
      </button>
      <ul
        v-if="showDropdown === crumb.path"
        class="vue-breadcrumbs-nav__dropdown-menu"
        v-on-clickaway="handleClickOutside"
      >
        <li
          class="vue-breadcrumbs-nav__dropdown-menu-item"
          @click="handleSelect(crumb.path)"
        >
          abcdef
        </li>
        <li
          class="vue-breadcrumbs-nav__dropdown-menu-item"
          @click="handleSelect(crumb.path)"
        >
          bcdefg
        </li>
        <li
          class="vue-breadcrumbs-nav__dropdown-menu-item"
          @click="handleSelect(crumb.path)"
        >
          cdefghi
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import ArrowDownR from "./icons/arrow-down-r.vue";
import ArrowDownS from "./icons/arrow-down-s.vue";
import { directive as vOnClickaway } from "vue3-click-away";

const showDropdown = ref("");

const data = [
  {
    label: "Recipes",
    id: "recipes",
    path: "/",
    children: [],
  },
  {
    label: "Breakfast",
    id: "breakfast",
    path: "/breakfast/",
    children: [],
  },
  {
    label: "Eggs",
    id: "eggs",
    path: "/breakfast/eggs",
  },
];

const crumbs = computed(() => {
  return data.map((crumb, i) => ({
    ...crumb,
    isFirst: i === 0,
    isLast: i === data.length - 1,
  }));
});

const handleSelect = (path: string) => {
  showDropdown.value = "";
  console.log("handleSelect", path);
};

const handleOpenDropdown = (path: string) => {
  showDropdown.value = path;
  console.log("handleOpenDropdown", path);
};

const handleClickOutside = () => {
  showDropdown.value = "";
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

  &__crumb--is-last &__crumb-label {
    color: black;
    cursor: initial;
  }

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
    right: 0;
    translate: 50%;
    background: white;
    border: thin solid black;
    list-style: none;
    padding: 0;
  }

  &__dropdown-menu-item {
    padding: 0 4px;
    color: blue;
  }
}
</style>
