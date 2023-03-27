import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from './nested.api';

@Component({
  selector: 'app-nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.less'],
})
export class NestedComponentComponent {
  constructor() {}
  @Input() treeData!: TreeNode[];

  nodeSelectClick(node: any) {
    node.selected = !node.selected;
  }

  nodeExpandClick(node: any) {
    node.expanded = !node.expanded;
  }
}
