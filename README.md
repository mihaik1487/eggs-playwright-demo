# eggs-playwright-demo <a><img src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" alt="nodejs" width="40" height="37"/></a>
This eggs playwright demo project contains automation tests for the Sauce demo site https://www.saucedemo.com/
 
## 1. Pre-Requisits
- Install [node.js](https://nodejs.org/en/download/package-manager)  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="30" height="30"/></a> above v17 or just get the latest version

## 2. Installation
After cloning the project on your local machine install the project dependencies by running the command in the project folder:
```
npm install
```
Install playwright by running the command:
```
npx playwright install
```

## 3. Run tests
To run all the tests from the project:
```
npx playwright test --headed
```

## 4. Run specific test(s) marked with a tag
To run a specific test or a subcategory of tests marked with a tag i.e. @smoke from the project:
```
npx playwright test --grep '@smoke'
```