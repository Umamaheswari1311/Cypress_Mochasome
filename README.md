# Cypress_Mochasome

# cypress Mochawsome

Steps to follow

1.npm init
2.npm install cypress
3.Install mocha and mochawsome dependencies
Package.json
 "dependencies": {
    "mocha": "^9.1.3",
    "mochawesome": "^7.0.1",
    "mochawesome-merge": "^4.2.1",
    "mochawesome-report-generator": "^6.0.1"
	}
4.Cypress.json
"reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
            
        }
    },
    "video": true,
    "screenshotOnRunFailure":true,
    "screenshotsFolder": "cypress/reports/mochareports/assets"
5.Package.json
"scripts": {
    "clean:reports": "(if exist cypress\\reports (rmdir /Q /S cypress\\reports)) && mkdir cypress\\reports && mkdir cypress\\reports\\mocha  &&  mkdir cypress\\reports\\mochareports",
    "pretest": "npm run clean:reports",
    "scripts": "cypress run",
    "chrome": "cypress run --browser chrome --headless",
    "firefox": "cypress run --browser firefox --headless",
    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
    "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
    "posttest": "npm run combine-reports && npm run generate-report",
    "test": "npm run scripts || npm run posttest",
    "browser-firefox": "&& npm run firefox || npm run posttest",
    "browser-Chrome": "npm run clean:reports && npm run chrome && npm run posttest || npm run posttest"
  }