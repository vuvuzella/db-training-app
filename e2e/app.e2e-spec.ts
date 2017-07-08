import { TrainingAppAngularCliPage } from './app.po';

describe('training-app-angular-cli App', () => {
  let page: TrainingAppAngularCliPage;

  beforeEach(() => {
    page = new TrainingAppAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
