import { z } from 'zod';

export type User = z.infer<typeof UserSchema>
export const UserSchema = z.object({
    id: z.string().cuid(),
    name: z.string(),
    avatar: z.string(),
    createdAt: z.date(),
});

export const FormUserSchema = z.object({
    username: UserSchema.shape.name.min(3, {
        message: "Username must be at least 3 characters.",
    }),
    avatar: UserSchema.shape.avatar.url("Avatar must be a valid URL").optional(),
})