const Redis = require("redis");
const Q = require("bluebird");
Q.promisifyAll(Redis.RedisClient.prototype);
Q.promisifyAll(Redis.Multi.prototype);

const redis = Redis.createClient({
    "host": "127.0.0.1",
    "port": "6379"
});

const set = redis.setAsync.bind(redis);
const get = redis.getAsync.bind(redis);

redis.on("error", function (err) {
    console.log("error event - " + redis.host + ":" + redis.port + " - " + err);
});

(async () => {
    try {
        let res = await set("key", ["string"]);
        console.log("is Ok? ", res);
        res = await get("key");
        console.log("get key: ", res);
    } catch (error) {
        console.error(error);
    }
})();