import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainHeaderText() {
    return element(by.css('app-root h1.display-1')).getText();
  }
}
