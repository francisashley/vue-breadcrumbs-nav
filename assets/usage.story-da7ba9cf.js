import { ar as defineComponent, as as ref, at as directive, au as openBlock, av as createElementBlock, aw as createBaseVNode, ax as renderSlot, ay as normalizeClass, az as withDirectives, aA as Fragment, aB as renderList, aC as toDisplayString, aD as createCommentVNode, aE as createBlock, aF as withCtx, aG as computed, aH as resolveComponent, aI as createVNode } from "./vendor-dea00948.js";
const BreadcrumbsNavDropdown_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbsNavDropdown",
  props: {
    items: { type: Array, required: true },
    currentPath: { type: String, required: true }
  },
  emits: ["select", "open", "close"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const open = ref(false);
    const handleSelect = (path) => {
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
    const __returned__ = { open, emit, handleSelect, handleOpenDropdown, handleClickOutside, get vOnClickaway() {
      return directive;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "vbn-dropdown" };
const _hoisted_2$2 = {
  key: 0,
  class: "vbn-dropdown__menu"
};
const _hoisted_3$2 = ["onClick"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode(
      "button",
      {
        class: normalizeClass([
          "vbn-dropdown__button",
          { "vbn-dropdown__button--is-open": $setup.open }
        ]),
        onClick: $setup.handleOpenDropdown
      },
      [
        renderSlot(_ctx.$slots, "trigger-content", { open: $setup.open })
      ],
      2
      /* CLASS */
    ),
    $setup.open && $props.items.length ? withDirectives((openBlock(), createElementBlock("ul", _hoisted_2$2, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.items, (item) => {
          return openBlock(), createElementBlock("li", {
            class: normalizeClass([
              "vbn-dropdown__menu-item",
              $props.currentPath.startsWith(item.path) && "vbn-dropdown__menu-item--active"
            ]),
            onClick: ($event) => $setup.handleSelect(item.path),
            key: item.path
          }, toDisplayString(item.label), 11, _hoisted_3$2);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])), [
      [$setup["vOnClickaway"], $setup.handleClickOutside]
    ]) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$5.__file = "src/components/BreadcrumbsNavDropdown.vue";
const BreadcrumbsNavDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/BreadcrumbsNavDropdown.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "arrow-right-s-line",
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
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z",
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
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
}
_sfc_main$4.__file = "src/components/icons/arrow-right-s-line.vue";
const ArrowRightSLine = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/icons/arrow-right-s-line.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "arrow-down-s-line",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z",
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
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
}
_sfc_main$3.__file = "src/components/icons/arrow-down-s-line.vue";
const ArrowDownSLine = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/icons/arrow-down-s-line.vue"]]);
const BreadcrumbsNavCrumb_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbsNavCrumb",
  props: {
    crumb: { type: Object, required: true },
    currentPath: { type: String, required: true }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const isOpen = ref(false);
    const handleSelect = (path) => {
      emit("select", path);
    };
    const handleToggleState = (isOpenState) => {
      isOpen.value = isOpenState;
    };
    const __returned__ = { isOpen, emit, handleSelect, handleToggleState, BreadcrumbsNavDropdown, ArrowRightSLine, ArrowDownSLine };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["vbn-crumb", { "vbn-crumb--is-open": $setup.isOpen }])
    },
    [
      createBaseVNode(
        "span",
        {
          class: "vbn-crumb__label",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleSelect($props.crumb.path))
        },
        toDisplayString($props.crumb.label),
        1
        /* TEXT */
      ),
      $props.crumb.children.length ? (openBlock(), createBlock($setup["BreadcrumbsNavDropdown"], {
        key: 0,
        class: "vbn-crumb__divider",
        items: $props.crumb.children,
        "current-path": $props.currentPath,
        onSelect: _cache[1] || (_cache[1] = ($event) => $setup.handleSelect($event)),
        onOpen: _cache[2] || (_cache[2] = ($event) => $setup.handleToggleState(true)),
        onClose: _cache[3] || (_cache[3] = ($event) => $setup.handleToggleState(false))
      }, {
        "trigger-content": withCtx(({ open }) => [
          open ? (openBlock(), createBlock($setup["ArrowDownSLine"], {
            key: 0,
            class: "vbn-crumb__divider-icon"
          })) : (openBlock(), createBlock($setup["ArrowRightSLine"], {
            key: 1,
            class: "vbn-crumb__divider-icon"
          }))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["items", "current-path"])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$2.__file = "src/components/BreadcrumbsNavCrumb.vue";
const NavCrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/BreadcrumbsNavCrumb.vue"]]);
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
const BreadcrumbsNav_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbsNav",
  props: {
    data: { type: Object, required: true },
    modelValue: { type: String, required: true }
  },
  emits: ["input", "update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const showDropdown = ref("");
    const crumbs = computed(() => {
      const flatTree = getFlatTree(props.data);
      return getBreadcrumbs(flatTree, props.modelValue ?? "");
    });
    const handleSelect = (path) => {
      showDropdown.value = "";
      emit("input", path);
      emit("update:modelValue", path);
    };
    const __returned__ = { showDropdown, props, emit, crumbs, handleSelect, NavCrumb };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vbn" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", _hoisted_1, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.crumbs, (crumb) => {
        return openBlock(), createBlock($setup["NavCrumb"], {
          key: crumb.path,
          crumb,
          "current-path": $props.modelValue,
          onSelect: _cache[0] || (_cache[0] = ($event) => $setup.handleSelect($event))
        }, null, 8, ["crumb", "current-path"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
_sfc_main$1.__file = "src/components/BreadcrumbsNav.vue";
const VueBreadcrumbsNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-breadcrumbs-nav/vue-breadcrumbs-nav/src/components/BreadcrumbsNav.vue"]]);
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
