'use strict';

const fs = require('fs');
const jp = require('jsonpath');
const table = require('table');
const pathToSummary = '/home/chrome/reports/';

class LighthousePuppeteerDashboard {
    constructor(options = {}) {
        this.defaultOptions = {
            file: pathToSummary + '/summary.json',
            rules: {
                'Interactive value': "$.audits['consistently-interactive'].displayValue"
            }
        };
        this.options = Object.assign({}, this.defaultOptions);
        if (typeof (options.rules) !== 'undefined') {
            this.options.rules = {};
            for (let name in options.rules) {
                let json = JSON.parse(options.rules[name]);
                for (let key in json) {
                    this.options.rules[key] = json[key];
                }
            }
        }
        if (typeof (options.file) !== 'undefined') {
            this.options.file = options.file;
        }
        this.json = JSON.parse(fs.readFileSync(this.options.file));
    }

    getReport() {
        let reports = [];
        this.json.forEach((el) => {
            let report = {
                url: el.url,
                values: {},
            };
            let file = JSON.parse(fs.readFileSync(pathToSummary + '/' + el.file));
            for (let name in this.options.rules) {
                report.values[name] = jp.query(file, this.options.rules[name])[0];
            }
            reports.push(report);
        });
        return reports;
    }

    reportToTable(report) {
        let array = [];
        let line1 = [''];
        for (let name in this.options.rules) {
            line1.push(name);
        }
        array.push(line1);
        report.forEach((entity) => {
            let line = [entity.url];
            for (let name in entity.values) {
                line.push(entity.values[name]);
            }
            array.push(line);
        });
        return array;
    }

    getTable() {
        return table.table(this.reportToTable(this.getReport()));
    }
}


module.exports = LighthousePuppeteerDashboard;
