# https://manojown.github.io/React-App-calculator/

### Start Development

```bash
git clone https://github.com/manojown/React-App-calculator.git
cd React-App-calculator
npm i
npm start
```

### Test Development

`npm test`
```
PASS  src/App.test.js
PASS  src/app/calculator/calculator.test.js
PASS  src/app/_shared/components/Header/header.test.js
PASS  src/app/_shared/helpers/helper.test.js

Test Suites: 4 passed, 4 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        4.968s
Ran all test suites.
```

## Other dev usefull commands
`npm run es-lint`
`npm run prettier`
`npm run fix-code`

### Folder Structure

```
src
|   app
|    |   _shared # shared components, services, constants, redux, etc.
|    |   models # object classes or interfaces
|    |   calculator # a calculator module
|    |   helper # a utility usefull function
|   assets # static assets, images, icons, logos, etc.
|    |   icons
|    |   images
|    |   videos
|   styles # The 7-in-1 formatted scss stylesheets
```
