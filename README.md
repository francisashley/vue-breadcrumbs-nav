<div align="center">
  <h1>Vue Breadcrumbs Nav</h1>
  <em>A breadcrumbs navigation component built in Vue 3.</em>
  <br/>
  <a href="https://francisashley.github.io/vue-breadcrumbs-nav/">Documentation</a>
</div>

## Install

This package is hosted on npm. You can install it using npm or yarn:

```bash
npm install vue-breadcrumbs-nav
# or
yarn add vue-breadcrumbs-nav
```

## Basic usage

```vue
<template>
  <vue-breadcrumbs-nav :data="data" v-model="activePath" />
</template>

<script lang="ts">
import { VueBreadcrumbsNav } from 'vue-breadcrumbs-nav'
import 'vue-breadcrumbs-nav/style.css'
import { ref } from 'vue'

const activePath = ref('recipes/breakfast/pancakes')

const data = {
  "label": "Recipes",
  "id": "recipes",
  "children": [
    {
      "id": "breakfast",
      "label": "Breakfast",
      "children": [
        {
          "id": "pancakes",
          "label": "Pancakes",
          "children": [
            { "id": "classic-pancakes", "label": "Classic Pancakes" },
            { "id": "blueberry-pancakes", "label": "Blueberry Pancakes" }
          ]
        }
      ]
    }
  ]
}
</script>
```

## Styling

Add custom classes:

```
<vue-breadcrumbs-nav
  :classes="{
    "NAV": "...",
    "CRUMB": "...",
    "CRUMB--IS-CURRENT": "...",
    "CRUMB__LABEL": "...",
    "CRUMB__LABEL--IS-CURRENT": "...",
    "DIVIDER": "...",
    "DIVIDER__DROPDOWN-BUTTON": "...",
    "DIVIDER__DROPDOWN-ICON": "",
    "DIVIDER__DROPDOWN-ICON--OPEN": "",
    "DIVIDER__DROPDOWN-ICON--CLOSED": "",
    "DIVIDER__DROPDOWN-MENU": "",
    "DIVIDER__DROPDOWN-MENU-ITEM": "",
    "DIVIDER__DROPDOWN-MENU-ITEM--IS-CURRENT": "",
  }"
/>
```

Or style default classes:

```
.vue-breadcrumbs-nav
.vue-breadcrumbs-nav__crumb
.vue-breadcrumbs-nav__crumb-label
.vue-breadcrumbs-nav-divider
.vue-breadcrumbs-nav-divider__dropdown-button
.vue-breadcrumbs-nav-divider__dropdown-icon
.vue-breadcrumbs-nav-divider__dropdown-icon--open
.vue-breadcrumbs-nav-divider__dropdown-icon--closed
.vue-breadcrumbs-nav-divider__dropdown-menu
.vue-breadcrumbs-nav-divider__dropdown-menu-item
.vue-breadcrumbs-nav-divider__dropdown-menu-item--is-current
```

## License
MIT