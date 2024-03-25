# cucumber-playwright-Automation-Task

# Description

This project is an automation task that utilizes Cucumber and Playwright frameworks. It focuses on running a specific cucumber scenario that encompasses the objectives of the task.

# Project Structure

The project follows the Page Object Model (POM) design pattern. Here's an overview of the folder structure:

- /tests/pages: Contains page classes that implement the POM pattern. These classes define locators and actions functions used in the tests.
- /tests/steps: Contains cucumber steps files that utilize the functions declared in the page - - classes. These step files define the behavior and interactions of the application under test.
- /tests/features: Contains feature files that describe the scenarios to be executed. These feature files utilize the steps defined in the step files to run the tests.

## Kudos

This repository is based on the [cucumber-playwright](https://github.com/Tallyb/cucumber-playwright/workflows/Test/badge.svg) repo.

## What's inside

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Launching new context and page for each scenario
- Running feature with video recording option
- Report generated with last good image attached
- VScode configuration to debug a single feature or an only scenario (run when located on the feature file)

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run test <feature name>` or `npx cucumber-js <feature name>` run the single feature

## Browser selection

By default we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:

`BROWSER=firefox npm run test` or `BROWSER=firefox npx cucumber-js` runs all tests using Firefox

One Windows you need to write

```
set BROWSER=firefox
npm run test
``` 

## Debugging Features

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## In Visual Studio Code

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.
