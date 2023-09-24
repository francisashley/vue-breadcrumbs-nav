import { aq as defineComponent, ar as openBlock, as as createElementBlock, at as createBaseVNode, au as ref, av as directive, aw as createBlock, ax as normalizeClass, ay as withDirectives, az as Fragment, aA as renderList, aB as toDisplayString, aC as createCommentVNode, aD as computed, aE as resolveComponent, aF as withCtx, aG as createVNode } from "./vendor-1d87a4e8.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "arrow-down-r",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M16 12L10 18V6L16 12Z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$1);
}
_sfc_main$4.__file = "src/components/icons/arrow-down-r.vue";
const ArrowDownR = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/icons/arrow-down-r.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "arrow-down-s",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M12 16L6 10H18L12 16Z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3);
}
_sfc_main$3.__file = "src/components/icons/arrow-down-s.vue";
const ArrowDownS = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/icons/arrow-down-s.vue"]]);
const VueBreadcrumbsNavDivider_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VueBreadcrumbsNavDivider",
  props: {
    items: { type: Array, required: true },
    classes: { type: Object, required: false }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const showDropdown = ref(false);
    const handleSelect = (path) => {
      showDropdown.value = false;
      emit("select", path);
    };
    const handleOpenDropdown = () => {
      showDropdown.value = true;
    };
    const handleClickOutside = () => {
      showDropdown.value = false;
    };
    const __returned__ = { showDropdown, emit, handleSelect, handleOpenDropdown, handleClickOutside, ArrowDownR, ArrowDownS, get vOnClickaway() {
      return directive;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g;
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["vue-breadcrumbs-nav-divider", (_a = $props.classes) == null ? void 0 : _a.DIVIDER])
    },
    [
      createBaseVNode(
        "button",
        {
          class: normalizeClass([
            "vue-breadcrumbs-nav-divider__dropdown-button",
            (_b = $props.classes) == null ? void 0 : _b["DIVIDER__DROPDOWN-BUTTON"]
          ]),
          onClick: $setup.handleOpenDropdown
        },
        [
          $setup.showDropdown ? (openBlock(), createBlock($setup["ArrowDownS"], {
            key: 0,
            class: normalizeClass([
              "vue-breadcrumbs-nav-divider__dropdown-icon",
              "vue-breadcrumbs-nav-divider__dropdown-icon--open",
              (_c = $props.classes) == null ? void 0 : _c["DIVIDER__DROPDOWN-ICON"],
              (_d = $props.classes) == null ? void 0 : _d["DIVIDER__DROPDOWN-ICON--OPEN"]
            ])
          }, null, 8, ["class"])) : (openBlock(), createBlock($setup["ArrowDownR"], {
            key: 1,
            class: normalizeClass([
              "vue-breadcrumbs-nav-divider__dropdown-icon",
              "vue-breadcrumbs-nav-divider__dropdown-icon--open",
              (_e = $props.classes) == null ? void 0 : _e["DIVIDER__DROPDOWN-ICON"],
              (_f = $props.classes) == null ? void 0 : _f["DIVIDER__DROPDOWN-ICON--CLOSED"]
            ])
          }, null, 8, ["class"]))
        ],
        2
        /* CLASS */
      ),
      $setup.showDropdown && $props.items.length ? withDirectives((openBlock(), createElementBlock(
        "ul",
        {
          key: 0,
          class: normalizeClass([
            "vue-breadcrumbs-nav-divider__dropdown-menu",
            (_g = $props.classes) == null ? void 0 : _g["DIVIDER__DROPDOWN-MENU"]
          ])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.items, (item) => {
              var _a2;
              return openBlock(), createElementBlock("li", {
                class: normalizeClass([
                  "vue-breadcrumbs-nav-divider__dropdown-menu-item",
                  (_a2 = $props.classes) == null ? void 0 : _a2["DIVIDER__DROPDOWN-MENU-ITEM"]
                ]),
                onClick: ($event) => $setup.handleSelect(item.path),
                key: item.path
              }, toDisplayString(item.label), 11, _hoisted_1$1);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )), [
        [$setup["vOnClickaway"], $setup.handleClickOutside]
      ]) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$2.__file = "src/components/VueBreadcrumbsNavDivider.vue";
const NavDivider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/VueBreadcrumbsNavDivider.vue"]]);
const getFlatTree = (node, basePath) => {
  const { id: id2, label: label2, children: children2 = [] } = node;
  const path = (basePath ? basePath + "/" : "") + id2;
  return [
    {
      id: id2,
      label: label2,
      path,
      children: children2.map((node2) => ({
        path: path + "/" + node2.id,
        label: node2.label
      }))
    },
    ...children2.flatMap((node2) => getFlatTree(node2, path))
  ];
};
const getBreadcrumbs = (nodes, activePath) => {
  return nodes.filter((node) => activePath.includes(node.path));
};
const VueBreadcrumbsNav_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VueBreadcrumbsNav",
  props: {
    data: { type: Object, required: true },
    modelValue: { type: String, required: true },
    classes: { type: Object, required: false }
  },
  emits: ["input", "update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const showDropdown = ref("");
    const breadcrumbs = computed(() => {
      const flatTree = getFlatTree(props.data);
      return getBreadcrumbs(flatTree, props.modelValue ?? "");
    });
    const crumbs = computed(() => {
      return breadcrumbs.value.map((crumb, i) => ({
        ...crumb,
        isFirst: i === 0,
        isLast: i === breadcrumbs.value.length - 1
      }));
    });
    const handleSelect = (path) => {
      showDropdown.value = "";
      emit("input", path);
      emit("update:modelValue", path);
    };
    const __returned__ = { showDropdown, props, emit, breadcrumbs, crumbs, handleSelect, NavDivider };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock(
    "ul",
    {
      class: normalizeClass(["vue-breadcrumbs-nav", (_a = $props.classes) == null ? void 0 : _a.NAV])
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.crumbs, (crumb) => {
          var _a2, _b;
          return openBlock(), createElementBlock(
            "li",
            {
              key: crumb.path,
              class: normalizeClass(["vue-breadcrumbs-nav__crumb", (_a2 = $props.classes) == null ? void 0 : _a2.CRUMB])
            },
            [
              createBaseVNode("span", {
                class: normalizeClass(["vue-breadcrumbs-nav__crumb-label", (_b = $props.classes) == null ? void 0 : _b.CRUMB_LABEL]),
                onClick: ($event) => $setup.handleSelect(crumb.path)
              }, toDisplayString(crumb.label), 11, _hoisted_1),
              crumb.children.length ? (openBlock(), createBlock($setup["NavDivider"], {
                key: 0,
                items: crumb.children,
                classes: $props.classes,
                onSelect: _cache[0] || (_cache[0] = ($event) => $setup.handleSelect($event))
              }, null, 8, ["items", "classes"])) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/VueBreadcrumbsNav.vue";
const VueBreadcrumbsNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/VueBreadcrumbsNav.vue"]]);
const label = "Recipes";
const id = "recipes";
const children = [
  {
    id: "breakfast",
    label: "Breakfast",
    children: [
      {
        id: "eggs",
        label: "Eggs",
        children: [
          {
            id: "scrambled-eggs",
            label: "Scrambled Eggs"
          },
          {
            id: "omelette",
            label: "Omelette"
          }
        ]
      },
      {
        id: "pancakes",
        label: "Pancakes",
        children: [
          {
            id: "classic-pancakes",
            label: "Classic Pancakes"
          },
          {
            id: "blueberry-pancakes",
            label: "Blueberry Pancakes"
          }
        ]
      }
    ]
  },
  {
    id: "lunch",
    label: "Lunch",
    children: [
      {
        id: "sandwiches",
        label: "Sandwiches",
        children: [
          {
            id: "blt-sandwich",
            label: "BLT Sandwich"
          },
          {
            id: "turkey-club-sandwich",
            label: "Turkey Club Sandwich"
          }
        ]
      },
      {
        id: "salads",
        label: "Salads",
        children: [
          {
            id: "caesar-salad",
            label: "Caesar Salad"
          },
          {
            id: "greek-salad",
            label: "Greek Salad"
          }
        ]
      }
    ]
  },
  {
    id: "dinner",
    label: "Dinner",
    children: [
      {
        id: "pasta",
        label: "Pasta",
        children: [
          {
            id: "spaghetti-carbonara",
            label: "Spaghetti Carbonara"
          },
          {
            id: "vegetable-alfredo",
            label: "Vegetable Alfredo"
          }
        ]
      },
      {
        id: "steak",
        label: "Steak",
        children: [
          {
            id: "ribeye-steak",
            label: "Ribeye Steak"
          },
          {
            id: "filet-mignon",
            label: "Filet Mignon"
          }
        ]
      }
    ]
  }
];
const data = {
  label,
  id,
  children
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "usage.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const activePath = ref("recipes/lunch/sandwiches");
    const handleChange = (path) => {
      console.log("path", path);
    };
    const __returned__ = { activePath, handleChange, get VueBreadcrumbsNav() {
      return VueBreadcrumbsNav;
    }, get data() {
      return data;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode($setup["VueBreadcrumbsNav"], {
        modelValue: $setup.activePath,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.activePath = $event),
        data: $setup.data,
        onChangePath: $setup.handleChange
      }, null, 8, ["modelValue", "data"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/usage.story.vue";
const usage_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/stories/usage.story.vue"]]);
export {
  usage_story as default
};