const {test, expect} = require('@playwright/test');

test('Login existoso', async ({ page }) => {   
    await page.goto('https://virtual.tdea.edu.co/login/')
    await page.fill('username', 'samuel.diaz')
    await page.fill('password', 'primosdc99S')
    await page.click('button#loginbtntype[type="submit"]')
    await expect(page).toHaveURL('https://virtual.tdea.edu.co/my/courses.php')
});
