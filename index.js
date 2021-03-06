const express = require("express");
const app = express();
const port = 5000;
const connectToMongo = require("./db");
connectToMongo();
app.use(express.json());
app.use("/user", require("./routes/userRoute"));

app.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`);
});
