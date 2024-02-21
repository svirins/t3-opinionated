import { z } from "zod";

import { Topics } from "@acme/types";

export const CreateMeetingsSchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  topic: z.nativeEnum(Topics),
  dayId: z.string(),
});
