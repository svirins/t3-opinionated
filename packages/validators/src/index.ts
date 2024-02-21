import { z } from "zod";


export const Schema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  dayId: z.string(),
});
