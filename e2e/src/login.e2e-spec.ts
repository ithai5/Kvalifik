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
    browser.get('/login');
  });
  it('success login', async ()=>{
    await login('test@mail.dk', '123456')
    let url;
    await browser.getCurrentUrl().then(res => url = res)
    expect(url).toBe('http://localhost:4200/feed')
  });
 //this test doesn't work
  it('logout-success', async ()=> {
    try {
      await element(by.id('logout-btn')).click()
    }
    catch (e){
      console.log("user not logged-in");
      await login('test@mail.dk', '123456')
      await browser.sleep(1000);
      element(by.id('logout-btn')).click();
      await browser.sleep(1000);
    }
    expect(element(by.css('sign-up-btn')).isPresent()).toBeFalsy()
    //expect(element(by.css('#logout-btn')).isPresent()).toBeFalsy()

  });

  it('failed login', async () => {
    await browser.sleep(5000);
    /*await element(by.id('logout-btn')).click()*/
    await login('failed@mail.dk', '123456')
    let url;
    await browser.getCurrentUrl().then(res => url = res)
    expect(url).toBe('http://localhost:4200/login' )
  })
});
