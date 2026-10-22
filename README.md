# Playwright QA Portfolio

This portfolio demonstrates web UI test automation using Playwright Test and TypeScript, with accessible locators and user-focused assertions.

## Project Overview

The tests cover login functionality on [The Internet](https://the-internet.herokuapp.com/login), a public demo application.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js and npm
- GitHub Actions (workflow: `.github/workflows/playwright.yml`)

## Test Coverage

The suite covers five login scenarios:

1. Login page smoke test
2. Successful login
3. Login fails with incorrect password
4. Login fails with incorrect username
5. Successful logout

## Prerequisites

- Node.js (LTS recommended)
- npm (included with Node.js)
- Git

## Installation

Replace `<repository-url>` with the repository URL when available:

```bash
git clone <repository-url>
cd <repository-directory>
npm ci
npx playwright install
```

## Running Tests

Run commands from the project directory:

| Command | Description |
| --- | --- |
| `npm test` | Run all Playwright tests across configured browser projects. |
| `npm run test:chromium` | Run all tests in Chromium. |
| `npm run test:headed` | Run all tests with the browser UI visible. |
| `npm run test:report` | Open the latest Playwright HTML report. |

## AI-Assisted Workflow

Playwright MCP was used to inspect the application, and GitHub Copilot assisted with test implementation. The changes were reviewed; run `npm test` to execute and validate the suite.
