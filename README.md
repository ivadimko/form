#**Ultra form**

[DEMO](https://ivadimko.github.io/form/assets/index.html)

###Usage
`start` - run webpack-dev-server

`build` - run build

`test`  - run validator test

###Features:

+ Indicates `required` fields with *
+ `Text` validation disallows quotes (', ")
+ `Date` format yyyy/mm/dd, disallows year < 1900 and > 2015
+ `Date` field has native datepicker and text-input instead if browser doesn't support `date` input
+ `Email` field allows only valid email
+ Shows different `Errors` for empty `required` fields and `validation` failure
+ After submiting shows native `modal dialog`. If it is not supported - shows simple `alert` instead.