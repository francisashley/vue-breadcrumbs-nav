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
import VueBreadCrumbsNav from 'vue-breadcrumbs-nav'
import 'vue-breadcrumbs-nav/style.css'
import ref from 'vue'
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

## License
MIT