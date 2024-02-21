import { z } from "zod";

import { CreateAddressSchema } from "./address";
import { CreateDaySchema } from "./day";

export const CreateGroupSchema = z.object({
  name: z.string().min(3),
  established: z.date().optional(),
  phone: z.string().min(10),
  email: z.string().email().optional(),
  address: CreateAddressSchema.optional(),
  days: z.array(CreateDaySchema),
});
