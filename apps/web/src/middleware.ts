import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ publicRoutes: ["/", "/api/(.*)"] });
// TODO: Consider after-auth middleware to a fine-grained control over the redirect
// https://clerk.com/docs/references/nextjs/auth-middleware

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
