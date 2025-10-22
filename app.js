
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("CI/CD Pipeline Deployed on EC2!"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
