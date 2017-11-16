#! /usr/bin/env node
const clu = require('command-line-usage');
const cla = require('command-line-args');
const dashboard = require('../dashboard');
const optionDefinitions = {
    header: 'Options',
    optionList: [
        {
            name: 'file',
            alias: 'f',
            typeLabel: '[underline]{file}',
            description: 'Path to your summary.json (default : /home/chrome/reports/summary.json)'
        },
        {
            name: 'rules',
            multiple: true,
            alias: 'r',
            typeLabel: '[underline]{json}',
            description: 'JSON of an object explaining the title of the rule and the JSONPath rule. Can be multiple (use -r for each rule)\n\n'
            + '[underline]{Example}: -r "{\\"Interactive value\\": \\"\\$.audits[\'consistently-interactive\'].displayValue\\"}"'
        },
        {
            name: 'help',
            alias: 'h',
            description: 'Print this usage guide.',
            type: Boolean
        }
    ]
};
const usage = clu(optionDefinitions);
const options = cla(optionDefinitions.optionList);
if (options.help) {
    console.log(usage);
} else {
    const db = new dashboard(options);
    console.log(db.getTable());
}
