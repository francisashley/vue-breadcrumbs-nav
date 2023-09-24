const __resolved__virtual_storySource_srcStoriesUsageStoryVue = '<template>\n  <Story>\n    <VueBreadcrumbsNav\n      v-model="activePath"\n      :data="data"\n      @change-path="handleChange"\n    />\n  </Story>\n</template>\n\n<script lang="ts" setup>\nimport { ref } from "vue";\nimport { VueBreadcrumbsNav } from "../index";\nimport data from "../fixtures/data.json";\n\nconst activePath = ref("recipes/lunch/sandwiches");\n\nconst handleChange = (path: string) => {\n  console.log("path", path);\n};\n<\/script>\n';
export {
  __resolved__virtual_storySource_srcStoriesUsageStoryVue as default
};
