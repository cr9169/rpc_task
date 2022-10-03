import jayson from "jayson/promise";

const server = new jayson.Server({
    multiply: async function(args: number[]) {
      return (args[0] * args[1]);
    }
});

server.http().listen(3005, () => { console.log("server is listening to port 3005") });