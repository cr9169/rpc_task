import jayson from "jayson/promise";

const client = jayson.Client.http({
  port: 3005
});

const reqs = [
  client.request('multiply', [2, 5]),
];

Promise.all(reqs).then(function(responses) {
  console.log(responses[0].result);
});