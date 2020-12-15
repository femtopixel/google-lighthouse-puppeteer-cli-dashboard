![logo](logo.png)

Google Lighthouse Puppeteer Cli Dashboard
=========================================

[![latest release](https://img.shields.io/github/release/femtopixel/google-lighthouse-puppeteer-cli-dashboard.svg "latest release")](http://github.com/femtopixel/google-lighthouse-puppeteer-cli-dashboard/releases)
[![NPM release](https://img.shields.io/npm/v/google-lighthouse-puppeteer-cli-dashboard.svg "NPM release")](https://www.npmjs.com/package/google-lighthouse-puppeteer-cli-dashboard)
[![PayPal donation](https://github.com/jaymoulin/jaymoulin.github.io/raw/master/ppl.png "PayPal donation")](https://www.paypal.me/jaymoulin)
[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png "Buy me a coffee")](https://www.buymeacoffee.com/3Yu8ajd7W)
[![Become a Patron](https://badgen.net/badge/become/a%20patron/F96854 "Become a Patron")](https://patreon.com/jaymoulin)

DISCLAIMER: As-of 2021, this product does not have a free support team anymore. If you want this product to be maintained, please support on Patreon.

(This product is available under a free and permissive license, but needs financial support to sustain its continued improvements. In addition to maintenance and stability there are many desirable features yet to be added.)

Description
-----------

The purpose of this package is to have a quick and simple overview of your [Lighthouse-Puppeteer](https://github.com/femtopixel/docker-google-lighthouse-puppeteer) report.

Installation
------------

```
yarn add google-lighthouse-puppeteer-cli-dashboard -g
or
npm install google-lighthouse-puppeteer-cli-dashboard --global
```

Usage
-----

```
$> lp-dashboard -h                                  

Options

  -f, --file file    Path to your summary.json (default : /home/chrome/reports/summary.json)       
  -r, --rules json   JSON of an object explaining the title of the rule and the JSONPath rule. Can 
                     be multiple (use -r for each rule)                                            
                                                                                                   
                     Example: -r "{\"Interactive value\": \"\$.audits['consistently-               
                     interactive'].displayValue\"}"                                                
  -h, --help         Print this usage guide.                                                       
```

Output
------

```
╔═══════════════════════════════════════════════════════════╤═══════════════════╗
║                                                           │ Interactive value ║
╟───────────────────────────────────────────────────────────┼───────────────────╢
║ https://myawesome.site/admin/lightpage/list?id=1          │ 6,740 ms          ║
╟───────────────────────────────────────────────────────────┼───────────────────╢
║ https://myawesome.site/admin/heavypage/list?id=12         │ 8,610 ms          ║
╚═══════════════════════════════════════════════════════════╧═══════════════════╝
```

Package Usage
-------------

```javascript
const dashboard = require('google-lighthouse-puppeteer-cli-dashboard');

const db = new dashboard({file:'/path/to/summary.json'}); //file is optional - Default : /home/chrome/reports/summary.json
console.log(db.getTable()); // displays CLI dashboard
console.log(db.getReport()); // returns a Json with filtered results for each URL
console.log(db.reportToTable(db.getReport())); // returns an Array to be converted in CLI dashboard
```
