import { z } from "zod";

export const CreateLocationSchema = z.object({
  coords: z.any(),
  name: z.string(),
  addressId: z.string(),
});
