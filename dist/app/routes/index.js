"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_routes_1 = require("../modules/book/book.routes");
const borrow_routes_1 = __importDefault(require("../modules/borrow/borrow.routes"));
const member_routes_1 = __importDefault(require("../modules/member/member.routes"));
const returnBook_routes_1 = __importDefault(require("../modules/returnBook/returnBook.routes"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/books",
        route: book_routes_1.bookRoutes,
    },
    {
        path: "/members",
        route: member_routes_1.default,
    },
    {
        path: "/borrow",
        route: borrow_routes_1.default,
    },
    {
        path: "/return",
        route: returnBook_routes_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
