import { z } from "zod";

export const CreatePostSchema = z.object({
  authorId: z.string().optional(),
  content: z.string(),
});
