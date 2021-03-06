import {Component} from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';
import {Page1Page} from "../page1/page1";
import {Page2Page} from "../page2/page2";
import {Page3Page} from "../page3/page3";
import {SuperTabsController} from "ionic2-super-tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = Page1Page;
  page2: any = Page2Page;
  page3: any = Page3Page;

  showIcons: boolean;
  showTitles: boolean;
  pageTitle: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    this.showIcons = navParams.get('icons');
    this.showTitles = navParams.get('titles');
    this.pageTitle = navParams.get('pageTitle');
  }

  ngAfterViewInit() {
    // this.superTabsCtrl.increaseBadge('page1', 10);
    // this.superTabsCtrl.enableTabSwipe('page3', false);
    // this.superTabsCtrl.enableTabsSwipe(false);
  }

  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }

}
