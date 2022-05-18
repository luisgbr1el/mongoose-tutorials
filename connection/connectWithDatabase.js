const mongoose = require("mongoose");

mongoose.connect(
  "SERVER_URL",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
