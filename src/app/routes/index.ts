import { Router } from "express";
import { bookRoutes } from "../modules/book/book.routes";
import borrowRoutes from "../modules/borrow/borrow.routes";
import memberRoutes from "../modules/member/member.routes";
import returnBookRoutes from "../modules/returnBook/returnBook.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRoutes,
  },
  {
    path: "/return",
    route: returnBookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
