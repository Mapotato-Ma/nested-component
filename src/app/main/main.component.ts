import { Component } from '@angular/core';
import { TreeNode } from '../nested-component/nested.api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent {
  public treeData: TreeNode[] = [
    {
      title: '可意且示',
      isLeaf: true,
      expanded: true,
      children: [
        {
          title: '效电段思省业约',
          isLeaf: true,
          expanded: true,
          selected: false,
          children: [
            {
              title: '精提基议治',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '参了江京规',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '算按际南算以',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
      ],
      selected: false,
    },
    {
      children: [
        {
          title: '眼阶工万从平',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '事体斗保',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '义精许切',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '里广生身',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '转至争精况平',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '总明价性活从',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '习导家战',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '铁称部工示',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '知通省系起',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '况农深起色车',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '断教何十',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '很性样口式',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '值农单',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '第也天科',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '安形素表清',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '现形红间压',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '问义气导风',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '治复之直',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '带口历习直管',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '温细经火形更',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '心月革断八',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '电马总器任形',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
      ],
      isLeaf: false,
      title: '基边知住农真',
      expanded: false,
      selected: false,
    },
    {
      expanded: true,
      isLeaf: false,
      children: [
        {
          title: '平发导严给题',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '建就型产',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '听引口身名就月',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '积生周五我几对',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '制说例上离给当',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '达连次日性精',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '则济军',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '响层容并万它',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
      ],
      title: '目党叫构样',
      selected: false,
    },
    {
      selected: false,
      children: [
        {
          title: '却电于发声',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '了合属容',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '提志明没往身',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '争领己难话京她',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '己素林度',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '常议它二',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '群手接里便',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '起手矿运数',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '价果把者维打',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '理精花',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '党物和长原持无',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '在则结',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '西而图热',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '习风查干况今',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '命再做战',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '便人物列',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '处从干员参却且',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '力志术常广响',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '接不南米',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '构切后书口',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '还府声五志白',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
      ],
      title: '所化之团劳题',
      expanded: false,
      isLeaf: true,
    },
    {
      expanded: false,
      children: [
        {
          title: '收图青很公才',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '少法斯场化',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '只所江权示状那',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '同与车口产取',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '学或后小局市',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '声中存使',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '万毛除于每大',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '造统备水角点',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '林白声标叫',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '维实道段',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '位土过快又领',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '战劳属',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '江明院',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '列证南级府九主',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '导红万',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '住点器除',
          isLeaf: false,
          expanded: false,
          selected: false,
          children: [
            {
              title: '间命需音千并',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '级者所间应线选',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '道亲多表',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '也精断己些两',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '史个第究种完',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
        {
          title: '原老常方身作工',
          isLeaf: true,
          expanded: false,
          selected: false,
          children: [
            {
              title: '系素关金一张',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '边资在报',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '了红极里问养',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '说委金改联',
              isLeaf: true,
              expanded: false,
              selected: false,
              children: [],
            },
            {
              title: '省别委元',
              isLeaf: false,
              expanded: false,
              selected: false,
              children: [],
            },
          ],
        },
      ],
      title: '样而维点',
      selected: false,
      isLeaf: true,
    },
  ];

  ngOnInit(): void {
    this.transformData(this.treeData);
  }

  transformData(data: TreeNode[]) {
    data.forEach((item) => {
      item.expanded = true;
      if (item.children.length > 0) {
        item.isLeaf = false;
        this.transformData(item.children);
      } else {
        item.isLeaf = true;
      }
    });
  }
}
