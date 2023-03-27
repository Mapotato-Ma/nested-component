/**
 * 树节点类型
 */
export interface TreeNode {
  title: string;
  isLeaf: boolean;
  expanded: boolean;
  selected: boolean;
  children: TreeNode[];
}
