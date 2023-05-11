import { Component } from '@angular/core';
import { TreeNode } from '../nested-component/nested.api';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent {
  public treeData: TreeNode[] = [];

  async ngOnInit() {
    this.treeData = await (
      await fetch('assets/mock-data/tree-data.json')
    ).json();
    this.transformData(this.treeData);
  }

  /**
   * @description 转换处理treeData
   * @author Mapotato
   * @date 11/05/2023
   * @param {TreeNode[]} data
   * @memberof MainComponent
   */
  transformData(treeNodeList: TreeNode[]) {
    treeNodeList.forEach((item) => {
      item.selected = false;
      if (item.children.length > 0) {
        item.isLeaf = false;
        this.transformData(item.children);
      } else {
        item.isLeaf = true;
      }
    });
  }
}
