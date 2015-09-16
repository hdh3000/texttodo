var mongo = require('mongodb');

var seedData = [
  {
    decade: '1970s',
    artist: 'Debby Boone',
    song: 'You Light Up My Life',
    weeksAtOne: 10
  },
  {
    decade: '1980s',
    artist: 'Olivia Newton-John',
    song: 'Physical',
    weeksAtOne: 10
  },
  {
    decade: '1990s',
    artist: 'Mariah Carey',
    song: 'One Sweet Day',
    weeksAtOne: 16
  }
];


var uri = 'mongodb://heroku_j3rmv3fd:cfkmsvas7355h5l3af766qj9ar@ds033828.mongolab.com:33828/heroku_j3rmv3fd';

mongo.MongoClient.connect(uri, function(err, db) {
  
  if(err) throw err;

  var songs = db.collection('songs');
  
  songs.insert(seedData, function(err, result) {
    
    if(err) throw err;

     songs.update(
      { song: 'One Sweet Day' }, 
      { $set: { artist: 'Mariah Carey ft. Boyz II Men' } },
      function (err, result) {
        
        if(err) throw err;

        songs.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1 }).toArray(function (err, docs) {

          if(err) throw err;

          docs.forEach(function (doc) {
            console.log(
              'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] + 
              ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
            );
          });
         
          // // Since this is an example, we'll clean up after ourselves.
          // songs.drop(function (err) {
          //   if(err) throw err;


          //   // Only close the connection when your app is terminating.
          //   db.close(function (err) {
          //     if(err) throw err;
          //   });
          // });
        });
      }
    );
  });
});







