var pg = require('pg');
var conString = "postgres://henryhutcheson@localhost:5432/texttodo";
 
//this initializes a connection pool 
//it will keep idle connections open for a (configurable) 30 seconds 
//and set a limit of 20 (also configurable) 

var query = "select column_name, data_type, character_maximum_length" +
            "from INFORMATION_SCHEMA.COLUMNS where table_name = 'users'";


pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query(query, function(err, result) {
    //call `done()` to release the client back to the pool 
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
    //output: 1 
  });
});
