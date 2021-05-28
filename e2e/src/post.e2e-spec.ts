import {browser, by, element, logging} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  async function  login  (email: string, password: string){
    await browser.sleep(300);
    await browser.get('/login');
    await browser.sleep(300);
    await element(by.id('email-login')).sendKeys(email);
    await browser.sleep(300);
    await element(by.id('password-login')).sendKeys(password);
    await browser.sleep(300);
    await element(by.id('submit-login')).click();
  }
  beforeEach(() => {
    page = new AppPage();
    login('test@mail.dk', '123456')
  });
  it('open post tab', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('/');
    await element(by.id('postList')).click();
    expect(await element(by.id('createPostButton')).getText() === 'Create new Post!');
  });
  it('create new post', async () => {


    /*
        await browser.waitForAngularEnabled(false);
        await browser.get('/');
        await element(by.id('postList')).click();
        const count = await element.all(by.css('.edit-button')).count();
        await element(by.id('createPostButton')).click();
        // await element(by.id('postTitle'))
        await element(by.id('postTitle')).sendKeys('postList title test');
        await element(by.id('postContent')).sendKeys('postList content test');
        await element(by.id('create-post-button')).click();
        await browser.sleep(3000);
        await element(by.id('postList')).click();
        await browser.sleep(3000);
        const afterAdding = await element.all(by.css('.edit-button')).count();
        expect(await afterAdding).toBe(count + 1);
    */
  });
  it('delete post', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('/');
    await element(by.id('postList')).click();
    const count = await element.all(by.css('.edit-button')).count();
    await element.all(by.css('.delete-button')).get(0).click();
    await element(by.id('events')).click();
    await element(by.id('postList')).click();
    const afterAdding = await element.all(by.css('.edit-button')).count();
    expect(await afterAdding).toBe(count + -1);

  });
});
