import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { WikiPage } from '../wiki/wiki';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tabWiki = WikiPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
