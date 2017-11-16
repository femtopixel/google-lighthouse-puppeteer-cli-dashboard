globalGoogle Lighthouse Puppeteer - Docker Image
============================================

[![latest release](https://img.shields.io/github/release/femtopixel/google-lighthouse-puppeteer-cli-dashboard.svg "latest release")](http://github.com/femtopixel/google-lighthouse-puppeteer-cli-dashboard/releases)
[![NPM release](https://img.shields.io/npm/v/google-lighthouse-puppeteer-cli-dashboard.svg "NPM release")](https://www.npmjs.com/package/google-lighthouse-puppeteer-cli-dashboard)
[![Bitcoin donation](https://github.com/jaymoulin/jaymoulin.github.io/raw/master/btc.png "Bitcoin donation")](https://m.freewallet.org/id/374ad82e/btc)
[![Litecoin donation](https://github.com/jaymoulin/jaymoulin.github.io/raw/master/ltc.png "Litecoin donation")](https://m.freewallet.org/id/374ad82e/ltc)
[![PayPal donation](https://github.com/jaymoulin/jaymoulin.github.io/raw/master/ppl.png "PayPal donation")](https://www.paypal.me/jaymoulin)
[![Beerpay donation](https://beerpay.io/femtopixel/google-lighthouse-puppeteer-cli-dashboard/badge.svg "Beerpay donation")](https://beerpay.io/femtopixel/google-lighthouse-puppeteer-cli-dashboard)

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
                     be multiple (usr -r for each rule)                                            
                                                                                                   
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
