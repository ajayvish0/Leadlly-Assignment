const express = require("express");
const app = express();
const userRouter = require("./route/user");

app.use(express.json());
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
