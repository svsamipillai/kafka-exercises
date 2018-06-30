let kafka = require("kafka-node"),
    Consumer = kafka.Consumer,
    client = new kafka.Client("159.89.180.227:2181", "ClientOne"),
    consumer = new Consumer(client, [{ topic: "metric" }, { topic: "metric" }], {
        groupId: "kafka-node-group",
        autoCommit: true,
        autoCommitIntervalMs: 5000,
        encoding: "UTF-8",
        fromOffset: "latest"
    });
// client2 = new kafka.Client("159.89.180.227:2181", "ClientOne"),
// consumer2 = new Consumer(client2, [{ topic: "test" }], {
//     groupId: "kafka-node-group",
//     autoCommit: true,
//     autoCommitIntervalMs: 5000,
//     encoding: "UTF-8",
//     fromOffset: "latest"
// });

consumer.on("message", function(message) {
    console.log("Consumer: ", JSON.stringify(message));
    // consumer.commit((err, data) => {
    //     console.log("Err: ", err);
    //     console.log("Data: ", data);
    // });
});

consumer.on("error", function(error) {
    console.log("error", error);
});

consumer.on("offsetOutOfRange", function(offsetOutOfRange) {
    console.log("offsetOutOfRange", offsetOutOfRange);
});

// consumer2.on("message", function(message) {
//     console.log("Consumer2: ", JSON.stringify(message));
//     // consumer2.commit((err, data) => {
//     //     console.log("Err: ", err);
//     //     console.log("Data: ", data);
//     // });
// });

// consumer2.on("error", function(error) {
//     console.log("error2", error);
// });

// consumer2.on("offsetOutOfRange", function(offsetOutOfRange) {
//     console.log("offsetOutOfRange2", offsetOutOfRange);
// });
