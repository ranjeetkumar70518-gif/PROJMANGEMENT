import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;
connectDB()
   .then(() => {
    app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/instagram`);
});
    })
   .catch((err) => {
    console.error("MongoDB connection error", err)
    process.exit(1)
   })


let Myusername = process.env.user_name;
console.log("value:", Myusername);
console.log("starting backend");
