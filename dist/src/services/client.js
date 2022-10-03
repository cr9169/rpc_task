"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("jayson/promise"));
const client = promise_1.default.Client.http({
    port: 3005
});
const reqs = [
    client.request('multiply', [2, 5]),
];
Promise.all(reqs).then(function (responses) {
    console.log(responses[0].result);
});
//# sourceMappingURL=client.js.map