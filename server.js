var express = require("express");
require("./build/build");
var app = express();
app.use(express.static("./dist"));
app.listen(process.env.PORT, function() {});
