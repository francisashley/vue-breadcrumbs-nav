import { Node, FlatNode } from "@/interfaces/tree";

export const getFlatTree = (node: Node, basePath?: string): FlatNode[] => {
  const { id, label, children = [] } = node;

  const path = (basePath ? basePath + "/" : "") + id;

  return [
    {
      id,
      label,
      path,
      children: children.map((node: Node) => ({
        path: path + "/" + node.id,
        label: node.label,
      })),
    },
    ...children.flatMap((node: Node) => getFlatTree(node, path)),
  ];
};

export const getBreadcrumbs = (
  nodes: FlatNode[],
  activePath: string,
): FlatNode[] => {
  return nodes.filter((node) => activePath.includes(node.path));
};
