"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var posts_1 = require("./routes/api/posts");
var app = express_1.default();
var port = process.env.PORT || 5000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/api/posts', posts_1.router);
app.listen(port, function () {
    console.log("Listening " + port + " port!");
});
