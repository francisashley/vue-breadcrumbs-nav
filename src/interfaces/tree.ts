export type Node = {
  id: string;
  label: string;
  children?: Node[];
};

export type FlatNode = {
  id: string;
  label: string;
  path: string;
  children: { path: string; label: string }[];
};
