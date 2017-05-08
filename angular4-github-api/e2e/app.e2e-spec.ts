import { Angular4GithubApiPage } from './app.po';

describe('angular4-github-api App', () => {
  let page: Angular4GithubApiPage;

  beforeEach(() => {
    page = new Angular4GithubApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
