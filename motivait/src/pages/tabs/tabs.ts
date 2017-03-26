import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SchedulePage } from '../schedule/schedule';
import { DataPage } from '../data/data';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SchedulePage;
  tab3Root: any = DataPage;
  tab4Root: any = SettingsPage;

  constructor() {

  }
}
