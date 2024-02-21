import { z } from "zod";

export const CreatePostSchema = z.object({
  name: z.string(),
  createdById: z.string(),
});
