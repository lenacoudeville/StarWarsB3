import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { QuizzPage } from '../quizz/quizz';
import { WikiPage } from '../wiki/wiki';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QuizzPage;
  tab3Root = WikiPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
