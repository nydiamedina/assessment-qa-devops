
import { Builder, Capabilities, By } from "selenium-webdriver";

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html');
});

afterAll(async () => {
    driver.quit();
});

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
});

test('Bot choices are displayed when clicking on Draw', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000);
    
    const choicesDiv = await driver.findElement(By.id('choices'));
    const displayedChoices = await choicesDiv.isDisplayed();

    expect(displayedChoices).toBe(true);
});

test('Player Duo is displayed when clicking on Add to Duo', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath('//*[@id="choices"]/div[1]/button')).click();
    await driver.sleep(2000);
    
    const playerDuoDiv = await driver.findElement(By.id('player-duo'));
    const displayedPlayerDuo = await playerDuoDiv.isDisplayed();

    expect(displayedPlayerDuo).toBe(true);
});