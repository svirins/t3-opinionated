import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ publicRoutes: ["/", "/api/(.*)"] });
// TODO: Consider after-auth middleware
// https://clerk.com/docs/references/nextjs/auth-middleware

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
