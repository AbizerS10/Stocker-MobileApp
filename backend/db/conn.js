const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      UseUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection Successful");
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports = connect;
