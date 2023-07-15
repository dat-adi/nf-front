import { z } from "zod";

export const productItemSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(10),
  imageUrl: z.string().url(),
  quantity: z.number().min(1),
  price: z.number().min(1),
})

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})
