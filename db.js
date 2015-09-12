var pg = require('pg');
var pgHstore = require("pg-hstore")
var Sequelize = require('Sequelize')

var seq = new Sequelize("postgres://cxnvgnladmdola:HmlAONT9f2WDtwKSoz9dRQV7gF@ec2-107-21-105-116.compute-1.amazonaws.com:5432/d5bjcvrreiej0q?ssl=true");


var User = seq.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});


User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.findAll({
  where: {
    firstName: "John"
  }
}).then(function (something){ console.log(something)});