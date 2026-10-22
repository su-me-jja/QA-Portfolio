import { test, expect } from '@playwright/test';

test('login page smoke test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: /Login/ })).toBeVisible();
});

test('successful login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /Login/ }).click();

  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true  })).toBeVisible();
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});

test('login fails with incorrect password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('WrongPassword123');
  await page.getByRole('button', { name: /Login/ }).click();

  await expect(page.locator('#flash')).toContainText('Your password is invalid!');
  await expect(page.getByRole('heading', { name: 'Login Page', exact: true })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
});

test('login fails with incorrect username', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('wronguser');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /Login/ }).click();

  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  await expect(page.getByRole('heading', { name: 'Login Page', exact: true })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
});

test('user can log out successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /Login/ }).click();

  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Login Page', exact: true })).toBeVisible();
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});
