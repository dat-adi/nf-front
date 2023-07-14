import { z } from "zod";

export const productItemSchema = z.object({
  name: z.string().min(1),
  imageUrl: z.string().url(),
  description: z.string().min(10),
  quantity: z.number().min(1),
})
