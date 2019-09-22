## Assumption

confused for expiring jobs so add expire job functionality and
also added expiring job function in helper/utility.jsx which help to show a job which expire by tommorow .

## .env

create .env file
Add envirnment REACT_APP_URLIS=YOUR-API-URL

## setup with testing

```
    npm run setup
```

### Start Development

```bash
git clone https://github.com/manojown/react-demo.git
cd react-demo
npm i
npm start
```

### Test Development

`npm test`

```
 PASS  src/app/jobs-portal/components/JobCard/JobCard.test.jsx
 PASS  src/app/App.test.jsx
 PASS  src/app/jobs-portal/components/JobListing/JobListing.test.jsx
 PASS  src/app/jobs-portal/components/Search/Search.test.jsx
 PASS  src/app/_shared/components/ErrorBoundries/ErrorBoundries.test.jsx
 PASS  src/App.test.js
 PASS  src/app/_shared/components/Header/Header.test.jsx
 PASS  src/app/_shared/helpers/Utility.test.jsx

Test Suites: 8 passed, 8 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        6.324s, estimated 8s
Ran all test suites.
```

## Other dev usefull commands

`npm run es-lint`
`npm run fix-code`

### Folder Structure

```
src
|   app
|    |   _shared # shared components, services, constants, redux, etc.
|    |   models # object classes or interfaces
|    |   job-portal # which hold all job components
|    |   helper # a utility usefull function
|   assets # static assets, images, icons, logos, etc.
|    |   icons
|    |   images
|    |   videos
|   styles # The 7-in-1 formatted scss stylesheets
```
