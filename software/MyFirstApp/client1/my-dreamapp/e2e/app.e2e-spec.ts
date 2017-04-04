import { MyDreamappPage } from './app.po';

describe('my-dreamapp App', () => {
  let page: MyDreamappPage;

  beforeEach(() => {
    page = new MyDreamappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
