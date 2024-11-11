import { Router } from "express";
import { bookRoutes } from "../modules/book/book.routes";
import memberRoutes from "../modules/member/member.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
