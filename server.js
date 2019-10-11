// dump dates from this project
const http = require('http');
const port = 3000;
const holidays = require('./dist/holidays-jp');

const requestHandler = (request, response) => {
  let data = [];
  for (var i in holidays.holidays) {
    data.push({
      location: 'JP',
      name: holidays.holidays[i].name,
      date: holidays.holidays[i].date
    });
  }
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(data));
};

const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
