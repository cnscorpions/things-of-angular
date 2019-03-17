
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery'; // 这边引入jquery
import * as echarts from 'echarts';
import { GRAPH } from './graph';
import * as G2 from '@antv/g2'; // 引入G2
import scrollmagic from 'scrollmagic';

@Component({
  selector: 'app-root',
  template: `
    <h3>测试</h3>
    <hr/>
    <div>
      <h4>jquery</h4>
      <p>兄dei打开console，看下</p>
    </div>
    <hr/>
    <div>
      <h4>echarts</h4>
      <div id="chart" style="width: 30rem; height: 20rem;"></div>
    </div>
    <hr/>
    <div>
      <h4>G2 (没有@types文件，但是在库的index.d.ts中已经声明了)</h4>
      <div id="c1"></div>
    </div>
    <hr/>
    <div>
      <h4>scrollmagic(自己写)</h4>
      <p>兄dei打开console，看下</p>
    </div>
  `,
  styles: []
})

export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private el: ElementRef
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).ready(() => {
      console.log('%c jquery works', 'background:#113f67;color:#fff');
    });

    // $(() => console.log('hello'));

    // 通过el的nativeElement获取DOM元素
    const chartElement = this.el.nativeElement.querySelector('#chart');
    echarts.init(chartElement).setOption(GRAPH); // 初始化折线图，并且配置项
    console.log('%c 获取id为chart的DOM元素', 'background:#113f67;color:#fff', chartElement);

    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 1150 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const chart = new G2.Chart({
      container: 'c1',
      width: 500,
      height: 500
    });

    chart.source(data);
    chart.interval().position('genre*sold').color('genre');
    chart.render();

    // init controller
    let controller = new scrollmagic.Controller();
    console.log('%c 获取scrollmagic的controller', 'background:#113f67;color:#fff', controller);

    // create a scene
    // new scrollmagic.Scene({
    //   duration: 100,	// the scene should last for a scroll distance of 100px
    //   background: 'black',
    //   offset: 50	// start this scene after scrolling for 50px
    // }).setPin("#chart") // pins the element for the the scene's duration
    //   .addTo(controller); // assign the scene to the controller

  }

}
