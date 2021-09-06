const express = require("express");
const app = express();
const port = 3000;
const connectToMongo = require("./db");
connectToMongo();
app.use(express.json());
app.use("/user", require("./routes/userRoute"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
