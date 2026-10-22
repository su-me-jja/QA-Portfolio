# Playwright QA Portfolio

This portfolio demonstrates web UI and API test automation using Playwright Test and TypeScript, with accessible locators and focused assertions.

## Project Overview

The UI tests cover login functionality on [The Internet](https://the-internet.herokuapp.com/login), a public demo application. API tests exercise the public JSONPlaceholder API at `https://jsonplaceholder.typicode.com`.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js and npm
- GitHub Actions (workflow: `.github/workflows/playwright.yml`)

## UI Test Coverage

UI tests run in Chromium, Firefox, and WebKit:

1. Login page smoke test
2. Successful login
3. Login fails with incorrect password
4. Login fails with incorrect username
5. Successful logout

## API Test Coverage

API tests run once in a dedicated Playwright project and cover:

1. Get a single post and verify its status, JSON content type, and expected fields
2. Filter posts by user ID
3. Create a post and verify the response data and generated ID
4. Request a nonexistent post and verify the 404 response with an empty JSON object
5. Filter posts using a non-numeric user ID and verify the empty array response

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
| `npm run test:chromium` | Run UI tests in Chromium. |
| `npx playwright test --project=api` | Run API tests only. |
| `npm run test:headed` | Run all tests with the browser UI visible. |
| `npm run test:report` | Open the latest Playwright HTML report. |

GitHub Actions runs the test suite automatically on pushes and pull requests to the `main` and `master` branches.

## AI-Assisted Workflow

Playwright MCP was used to inspect the demo applications, and GitHub Copilot assisted with test implementation. Test changes were reviewed and validated by running the test suite.
