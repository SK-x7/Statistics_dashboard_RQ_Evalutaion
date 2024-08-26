// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const generalRouter=require("./routes/generalRoutes")

dotenv.config({ path: "./config.env" });
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
app.use('/',generalRouter);



