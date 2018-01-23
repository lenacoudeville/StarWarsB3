import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { QuizzPage } from '../quizz/quizz';
import { WikiPage } from '../wiki/wiki';
import { FilmsPage } from '../films/films';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmsPage;
  tabWiki = WikiPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
