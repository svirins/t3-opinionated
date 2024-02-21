import { z } from "zod";

import { States } from "@acme/types";

import { CreateLocationSchema } from "./location";

export const CreateAddressSchema = z.object({
  city: z.string().min(3),
  state: z.nativeEnum(States),
  street: z.string().min(3),
  room: z.string().optional(),
  comments: z.string().optional(),
  location: CreateLocationSchema,
  groupId: z.string(),
});
