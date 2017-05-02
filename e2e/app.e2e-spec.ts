import { IeangularPage } from './app.po';

describe('ieangular App', () => {
  let page: IeangularPage;

  beforeEach(() => {
    page = new IeangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
