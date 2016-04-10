var express = require('express');
var app = express();


app.get('/api/whoami', function(req, res){
var returnObj = {
  "ipaddress": req.connection.remoteAddress,
  "language": req.headers["accept-language"].split(',')[0],
  "software": req.headers["user-agent"].split(/\((.*?)\)/)[1]
}
  res.sendStatus(JSON.stringify(returnObj));
  res.end(JSON.stringify(req.headers));
});



app.listen(3000, function(){console.log('Server is running on port 3000')});
