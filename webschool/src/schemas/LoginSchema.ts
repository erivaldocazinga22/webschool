import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Informe um email válido!"),
    password: z.string().min(6, "A senha deve conter no minimo 6 caracteres"),
    remember_me: z.boolean()
});

export type LoginFormData = z.infer<typeof LoginSchema>;