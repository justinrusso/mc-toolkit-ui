import { AppPage } from './app.po';

describe('mc-toolkit-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', () => {
    page.navigateTo();
    expect(page.getMainHeaderText()).toEqual('MCToolKit');
  });
});
