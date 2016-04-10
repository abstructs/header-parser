var express = require('express');
var app = express();

app.get('/api/whoami', function(req, res){
  
var returnObj = {
  "ipaddress": req.headers['x-forwarded-for'],
  "language": req.headers["accept-language"].split(',')[0],
  "software": req.headers["user-agent"].split(/\((.*?)\)/)[1]
};

  res.send(JSON.stringify(returnObj));
  res.end(JSON.stringify(req.headers));
  
});

app.listen(process.env.PORT || 8080, function(){console.log('Server is running...')});